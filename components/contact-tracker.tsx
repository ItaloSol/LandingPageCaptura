"use client";

import { useEffect } from "react";

// Registra no Pixel da Meta e no Google Analytics todo clique em link do WhatsApp.
// A origem vem do atributo data-cta do link (ex.: data-cta="hero").
export default function ContactTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>('a[href*="wa.me"]');
      if (!link) return;

      const source = link.dataset.cta || "outro";

      if (typeof window.fbq === "function") {
        window.fbq("track", "Contact", { content_name: source });
      }
      if (typeof window.gtag === "function") {
        window.gtag("event", "whatsapp_click", { cta_source: source });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
