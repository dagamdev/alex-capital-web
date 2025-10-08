// app/api/auth/telegram/route.js
import crypto from "crypto";

export async function POST(req) {
  const data = await req.json();
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const { hash, ...userData } = data;

  const dataCheckString = Object.keys(userData)
    .sort()
    .map(key => `${key}=${userData[key]}`)
    .join("\n");

  const secretKey = crypto.createHash("sha256").update(botToken!).digest();
  const hmac = crypto.createHmac("sha256", secretKey)
                     .update(dataCheckString)
                     .digest("hex");

  if (hmac !== hash) {
    return new Response(JSON.stringify({ error: "Firma inválida" }), { status: 403 });
  }

  // Aquí el login es válido
  return new Response(JSON.stringify({ user: userData }), { status: 200 });
}
