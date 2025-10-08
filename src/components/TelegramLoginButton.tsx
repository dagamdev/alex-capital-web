"use client";
import { useEffect } from "react";

export default function TelegramLoginButton() {
  useEffect(() => {
    window.onTelegramAuth = async function(user) {
      // Enviar datos al backend
      const res = await fetch("/api/auth/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log("Usuario autenticado:", data);
    };

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", "AlexCapital_bot"); // tu bot
    script.setAttribute("data-size", "large");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");
    script.setAttribute("data-request-access", "write");
    script.async = true;
    document.getElementById("telegram-login").appendChild(script);
  }, []);

  return <div id="telegram-login"></div>;
}
