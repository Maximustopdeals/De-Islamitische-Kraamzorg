"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjykeqvz";

const talenOpties = ["Nederlands", "Engels", "Arabisch", "Berbers", "Turks"];

const bevallingOpties = [
  "Thuisbevalling",
  "Ziekenhuis (poliklinisch)",
  "Ziekenhuis (klinisch)",
  "Geplande keizersnede",
  "Nog niet bekend",
];

const gevondenOpties = [
  "Google",
  "Facebook",
  "LinkedIn",
  "Familie en/ of vrienden",
  "Anders",
];

/**
 * Aanmeldformulier, post naar Formspree.
 * Mislukte verzending valt terug op WhatsApp met alle velden vooraf ingevuld.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: stilletjes negeren als deze is ingevuld
    if (data.get("website")) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        fallbackWhatsApp(data);
      }
    } catch {
      fallbackWhatsApp(data);
    }
  }

  function fallbackWhatsApp(data: FormData) {
    const talen = data.getAll("talen").join(", ");
    const regels = [
      `Salaam, mijn naam is ${data.get("voornaam_meisjesnaam")}.`,
      `Naam partner: ${data.get("naam_partner")}`,
      `Adres: ${data.get("adres")}`,
      `E-mail: ${data.get("email")}`,
      `Mobiel: ${data.get("mobiel")}`,
      `Uitgerekende datum: ${data.get("uitgerekende_datum")}`,
      data.get("hoeveelste_kind")
        ? `Hoeveelste kind: ${data.get("hoeveelste_kind")}`
        : "",
      `Bevalling: ${data.get("bevalling")}`,
      talen ? `Talen: ${talen}` : "",
      data.get("verloskundigepraktijk")
        ? `Verloskundigepraktijk: ${data.get("verloskundigepraktijk")}`
        : "",
      data.get("zorgverzekeraar")
        ? `Zorgverzekeraar: ${data.get("zorgverzekeraar")}`
        : "",
      data.get("aanvullende_informatie")
        ? `Aanvullende informatie: ${data.get("aanvullende_informatie")}`
        : "",
      `Gevonden via: ${data.get("gevonden_via")}`,
    ].filter(Boolean);
    window.open(
      `${site.whatsapp}?text=${encodeURIComponent(regels.join("\n"))}`,
      "_blank",
      "noopener"
    );
    setStatus("ok");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="voornaam_meisjesnaam">
            Voornaam en meisjesnaam *
          </label>
          <input
            id="voornaam_meisjesnaam"
            name="voornaam_meisjesnaam"
            type="text"
            required
            autoComplete="name"
            placeholder="Vul hier uw voornaam en meisjesnaam in"
          />
        </div>
        <div className="field">
          <label htmlFor="naam_partner">Naam partner *</label>
          <input
            id="naam_partner"
            name="naam_partner"
            type="text"
            required
            placeholder="Vul hier uw voor- en achternaam in"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="adres">Adres, postcode en woonplaats *</label>
        <input
          id="adres"
          name="adres"
          type="text"
          required
          autoComplete="street-address"
          placeholder="Vul hier je adres, postcode en woonplaats in"
        />
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="email">E-mail *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Vul hier uw e-mailadres in"
          />
        </div>
        <div className="field">
          <label htmlFor="mobiel">Mobiel *</label>
          <input
            id="mobiel"
            name="mobiel"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Vul hier uw mobiele nummer in"
          />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="uitgerekende_datum">Uitgerekende datum *</label>
          <input
            id="uitgerekende_datum"
            name="uitgerekende_datum"
            type="date"
            required
            placeholder="dd-mm-jjjj"
          />
        </div>
        <div className="field">
          <label htmlFor="hoeveelste_kind">Hoeveelste kind in uw gezin</label>
          <input
            id="hoeveelste_kind"
            name="hoeveelste_kind"
            type="text"
            placeholder="Bijv. 1e kind, 2e kind, enz..."
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="bevalling">Bevalling *</label>
        <select id="bevalling" name="bevalling" required defaultValue="">
          <option value="" disabled>
            --- Selecteer keuze ---
          </option>
          {bevallingOpties.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="field field--checkboxes">
        <legend>Welke talen spreekt u? *</legend>
        <div className="checkbox-group">
          {talenOpties.map((taal, i) => (
            <label key={taal} className="checkbox">
              <input
                type="checkbox"
                name="talen"
                value={taal}
                defaultChecked={i === 0}
              />
              <span>{taal}</span>
            </label>
          ))}
        </div>
        <p className="field__hint">Vink de talen aan die u spreekt!</p>
      </fieldset>

      <div className="form__row">
        <div className="field">
          <label htmlFor="verloskundigepraktijk">
            Verloskundigepraktijk (naam)
          </label>
          <input
            id="verloskundigepraktijk"
            name="verloskundigepraktijk"
            type="text"
          />
        </div>
        <div className="field">
          <label htmlFor="zorgverzekeraar">Zorgverzekeraar</label>
          <input id="zorgverzekeraar" name="zorgverzekeraar" type="text" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="aanvullende_informatie">Aanvullende informatie</label>
        <textarea id="aanvullende_informatie" name="aanvullende_informatie" />
      </div>

      <div className="field">
        <label htmlFor="gevonden_via">Hoe heb je mij gevonden? *</label>
        <select id="gevonden_via" name="gevonden_via" required defaultValue="">
          <option value="" disabled>
            --- Selecteer keuze ---
          </option>
          {gevondenOpties.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      {/* Honeypot tegen spam */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px" }}
        aria-hidden="true"
      />

      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Verzenden…" : "Verstuur aanvraag"}
      </button>

      <p className="form__privacy">
        Uw gegevens worden altijd vertrouwelijk behandeld.
      </p>
      {status === "ok" && (
        <p className="form__status ok" role="status">
          Dank u wel! Uw aanvraag is verstuurd. Wij nemen zo snel mogelijk
          contact met u op.
        </p>
      )}
    </form>
  );
}
