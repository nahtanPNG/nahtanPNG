import { NextResponse } from "next/server";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_NOW_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";
const SPOTIFY_RECENTLY_PLAYED_URL =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

async function getAccessToken() {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!refresh_token) {
    throw new Error("Refresh token não configurado");
  }

  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  if (!response.ok) {
    throw new Error("Falha ao obter access token");
  }

  return response.json();
}

export async function GET() {
  try {
    const { access_token } = await getAccessToken();

    // Primeiro, tenta pegar a música atual
    const nowPlayingResponse = await fetch(SPOTIFY_NOW_PLAYING_URL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // Se há algo tocando agora
    if (nowPlayingResponse.ok && nowPlayingResponse.status !== 204) {
      const nowPlayingData = await nowPlayingResponse.json();

      if (nowPlayingData.item) {
        return NextResponse.json({
          name: nowPlayingData.item.name,
          artist: nowPlayingData.item.artists
            .map((artist: { name: string }) => artist.name)
            .join(", "),
          album: nowPlayingData.item.album.name,
          image: nowPlayingData.item.album.images[0]?.url || "",
          url: nowPlayingData.item.external_urls.spotify,
          isPlaying: nowPlayingData.is_playing,
        });
      }
    }

    // Se não há nada tocando, pega a última música tocada
    const recentlyPlayedResponse = await fetch(SPOTIFY_RECENTLY_PLAYED_URL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!recentlyPlayedResponse.ok) {
      throw new Error("Falha ao buscar músicas recentes");
    }

    const recentlyPlayedData = await recentlyPlayedResponse.json();

    if (recentlyPlayedData.items && recentlyPlayedData.items.length > 0) {
      const lastTrack = recentlyPlayedData.items[0];

      return NextResponse.json({
        name: lastTrack.track.name,
        artist: lastTrack.track.artists
          .map((artist: { name: string }) => artist.name)
          .join(", "),
        album: lastTrack.track.album.name,
        image: lastTrack.track.album.images[0]?.url || "",
        url: lastTrack.track.external_urls.spotify,
        isPlaying: false,
        playedAt: lastTrack.played_at,
      });
    }

    return NextResponse.json(
      { error: "Nenhuma música encontrada" },
      { status: 404 }
    );
  } catch (error) {
    console.error("Erro na API do Spotify:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
