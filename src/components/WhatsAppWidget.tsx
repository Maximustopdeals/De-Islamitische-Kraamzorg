"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/** Zwevende WhatsApp-knop met chatvenster (naar voorbeeld van Marley's Kraamzorg). */
export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="wa-widget">
      {open && (
        <div className="wa-popup" role="dialog" aria-label="WhatsApp chat">
          <div className="wa-popup__header">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.webp" alt="" className="wa-popup__avatar" />
            <div className="wa-popup__title">
              <strong>De Islamitische Kraamzorg</strong>
              <span>
                <i className="wa-popup__dot" aria-hidden="true" /> Online
              </span>
            </div>
            <button
              className="wa-popup__close"
              aria-label="Chat sluiten"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="wa-popup__body">
            <p className="wa-popup__message">
              Assalamu alaykum! Hoe kan ik u helpen met persoonlijke kraamzorg?
            </p>
            <a
              className="wa-popup__start"
              href={`${site.whatsapp}?text=${encodeURIComponent(
                "Assalamu alaykum! Ik heb een vraag over de kraamzorg."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start chat
            </a>
          </div>
        </div>
      )}

      <button
        className="wa-button"
        aria-label={open ? "WhatsApp chat sluiten" : "WhatsApp chat openen"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.2L2 22l4.9-1.6A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.1 15.1l-.3-.2-2.9 1 1-2.9-.2-.3a8.1 8.1 0 0 1 6.5-12.7Zm-3.1 4c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.8 4.4 3.9 2.2.9 2.6.7 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3l-2-.9c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.3.2-.6.1a7.6 7.6 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.8Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
