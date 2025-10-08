"use client";
import { useEffect } from "react";

export default function TelegramLoginButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?2";
    script.setAttribute("data-telegram-login", "dagamdev_bot"); // tu bot
    script.setAttribute("data-size", "large");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");
    script.setAttribute("data-request-access", "write");
    script.async = true;
    document.getElementById("telegram-login")!.appendChild(script);
  }, []);

  return <div id="telegram-login"></div>;
}
