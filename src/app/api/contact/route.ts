import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    const emailData = await resend.emails.send({
      from: 'contato@nathanferreira.dev',
      to: ['nathan.ferreiira.dev@gmail.com'],
      subject: subject || 'Nova mensagem do site',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: system-ui, sans-serif;
                line-height: 1.5;
                color: #333;
                max-width: 500px;
                margin: 0 auto;
                padding: 20px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: 600;
                color: #555;
              }
              .message {
                white-space: pre-wrap;
                margin-top: 10px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 4px;
              }
              .footer {
                margin-top: 20px;
                padding-top: 15px;
                border-top: 1px solid #eee;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <h2>Nova mensagem do site</h2>
            
            <div class="field">
              <div class="label">Nome:</div>
              <div>${name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div><a href="mailto:${email}">${email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Assunto:</div>
              <div>${subject || 'Sem assunto'}</div>
            </div>
            
            <div class="field">
              <div class="label">Mensagem:</div>
              <div class="message">${message}</div>
            </div>
            
            <div class="footer">
              <div>nathanferreira.dev</div>
              <div>${new Date().toLocaleString('pt-BR', {
                timeZone: 'America/Sao_Paulo',
              })}</div>
            </div>
          </body>
        </html>
      `,
      // Email em texto simples como fallback
      text: `
Nova mensagem do site nathanferreira.dev

Nome: ${name}
Email: ${email}
Assunto: ${subject || 'Sem assunto'}

Mensagem:
${message}

---
Enviado em: ${new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
      })}
      `,
      replyTo: email,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Email enviado com sucesso!',
        id: emailData.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor ao enviar email' },
      { status: 500 }
    );
  }
}
