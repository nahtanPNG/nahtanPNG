// Execute este script uma vez para obter o refresh token
// node scripts/spotify-auth.js

import express from "express";
const app = express();

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = "http://127.0.0.1:8888/callback";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
].join(" ");

app.get("/login", (req, res) => {
  const authURL =
    `https://accounts.spotify.com/authorize?` +
    `response_type=code&` +
    `client_id=${CLIENT_ID}&` +
    `scope=${encodeURIComponent(scopes)}&` +
    `redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

  res.redirect(authURL);
});

app.get("/callback", async (req, res) => {
  const { code } = req.query;

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const data = await response.json();

    res.send(`
      <h1>Tokens obtidos!</h1>
      <p><strong>Access Token:</strong> ${data.access_token}</p>
      <p><strong>Refresh Token:</strong> ${data.refresh_token}</p>
      <p>Copie o <strong>Refresh Token</strong> para sua variável de ambiente SPOTIFY_REFRESH_TOKEN</p>
    `);

    console.log("Refresh Token:", data.refresh_token);
  } catch (error) {
    res.send(`Erro: ${error.message}`);
  }
});

app.listen(8888, () => {});
