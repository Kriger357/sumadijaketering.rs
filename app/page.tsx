"use client";

import { useEffect, useState } from "react";

type Language = "sr" | "de";

const content = {
  sr: {
    nav: ["Usluge", "Kako radimo", "Kontakt"],
    eyebrow: "Ukus tradicije za vaše najvažnije dane",
    titleA: "Domaćinski sto.",
    titleB: "Gde god slavite.",
    intro: "Autentični ukusi Šumadije, pripremljeni s pažnjom i dostavljeni širom Srbije — za male skupove i velika veselja.",
    call: "Pozovite nas",
    nationwide: "Dostava širom Srbije",
    servicesKicker: "Za svaki povod",
    servicesTitle: "Od prvog zalogaja do poslednjeg gosta",
    servicesIntro: "Pripremamo kompletnu ketering ponudu prema broju gostiju, vašem ukusu i karakteru događaja.",
    services: [
      ["Svadbe", "Svečana trpeza dostojna vašeg velikog dana — bogata, skladna i poslužena s pažnjom."],
      ["Veselja i proslave", "Krsne slave, jubileji, krštenja i sva okupljanja koja traže pravu domaćinsku atmosferu."],
      ["Rođendani", "Slani i slatki zalogaji, topla jela i posluženje prilagođeno vašim gostima."],
      ["Dečji rođendani", "Praktični, ukusni zalogaji za male goste i bezbrižno slavlje za roditelje."],
      ["Firme i događaji", "Pouzdan ketering za sastanke, proslave, seminare i poslovna okupljanja."],
      ["Daće i pomeni", "Diskretno i pouzdano posluženje za dostojanstvene ispraćaje i porodična okupljanja."],
    ],
    promiseKicker: "Domaćinski, bez žurbe",
    promiseTitle: "Vi okupljate ljude. Mi brinemo o trpezi.",
    promises: [
      ["Dogovor po vašoj meri", "Meni i količine usklađujemo sa povodom, brojem gostiju i vašim željama."],
      ["Domaći ukusi", "Tradicionalna jela i bogato posluženje koje vraća mirise porodične trpeze."],
      ["Za celu Srbiju", "Dolazimo tamo gde ste vi — od porodičnog dvorišta do velike svečane sale."],
    ],
    stepsKicker: "Jednostavan dogovor",
    stepsTitle: "Do pune trpeze u tri koraka",
    steps: [
      ["Javite nam se", "Recite datum, mesto, povod i očekivani broj gostiju."],
      ["Dogovaramo meni", "Zajedno biramo ponudu i količine koje odgovaraju vašem događaju."],
      ["Mi pripremamo", "Sve stiže ukusno, uredno i na vreme, spremno za vaše goste."],
    ],
    ctaKicker: "Planirate događaj?",
    ctaTitle: "Hajde da zajedno postavimo trpezu.",
    ctaText: "Pozovite ili pošaljite WhatsApp poruku. Kažite nam datum, mesto i broj gostiju — odgovorićemo sa predlogom.",
    callNumber: "Pozovi",
    message: "WhatsApp poruka",
    footer: "Šumadija Ketering · Domaći ukusi za celu Srbiju",
  },
  de: {
    nav: ["Leistungen", "So arbeiten wir", "Kontakt"],
    eyebrow: "Traditioneller Geschmack für Ihre besonderen Tage",
    titleA: "Ein festlich gedeckter Tisch.",
    titleB: "Wo immer Sie feiern.",
    intro: "Authentische Spezialitäten aus Šumadija, sorgfältig zubereitet und in ganz Serbien geliefert — für kleine Runden und große Feste.",
    call: "Jetzt anrufen",
    nationwide: "Lieferung in ganz Serbien",
    servicesKicker: "Für jeden Anlass",
    servicesTitle: "Vom ersten Bissen bis zum letzten Gast",
    servicesIntro: "Wir stellen das Catering passend zu Gästezahl, Geschmack und Charakter Ihrer Veranstaltung zusammen.",
    services: [
      ["Hochzeiten", "Eine festliche Tafel für Ihren großen Tag — reichhaltig, harmonisch und aufmerksam serviert."],
      ["Feste und Feiern", "Familienfeste, Jubiläen, Taufen und jedes Beisammensein mit echter herzlicher Atmosphäre."],
      ["Geburtstage", "Herzhafte und süße Häppchen, warme Speisen und ein Angebot passend zu Ihren Gästen."],
      ["Kindergeburtstage", "Praktische, leckere Häppchen für kleine Gäste und eine entspannte Feier für die Eltern."],
      ["Firmen und Events", "Zuverlässiges Catering für Meetings, Feiern, Seminare und geschäftliche Veranstaltungen."],
      ["Trauerfeiern", "Diskrete und verlässliche Bewirtung für einen würdevollen Abschied und das Beisammensein der Familie."],
    ],
    promiseKicker: "Herzlich und sorgfältig",
    promiseTitle: "Sie bringen die Menschen zusammen. Wir kümmern uns um die Tafel.",
    promises: [
      ["Individuell abgestimmt", "Menü und Mengen stimmen wir auf Anlass, Gästezahl und Ihre Wünsche ab."],
      ["Hausgemachter Geschmack", "Traditionelle Gerichte und reichhaltige Speisen wie an einer großen Familientafel."],
      ["In ganz Serbien", "Wir kommen zu Ihnen — vom Familienhof bis zum großen Festsaal."],
    ],
    stepsKicker: "Einfach geplant",
    stepsTitle: "In drei Schritten zur gedeckten Tafel",
    steps: [
      ["Kontakt aufnehmen", "Nennen Sie uns Datum, Ort, Anlass und die ungefähre Gästezahl."],
      ["Menü abstimmen", "Gemeinsam wählen wir das passende Angebot und die richtigen Mengen."],
      ["Wir bereiten alles vor", "Alles kommt frisch, ordentlich und pünktlich bei Ihren Gästen an."],
    ],
    ctaKicker: "Planen Sie eine Veranstaltung?",
    ctaTitle: "Lassen Sie uns gemeinsam Ihre Tafel planen.",
    ctaText: "Rufen Sie an oder schreiben Sie uns per WhatsApp. Sagen Sie uns Datum, Ort und Gästezahl — wir melden uns mit einem Vorschlag.",
    callNumber: "Anrufen",
    message: "WhatsApp-Nachricht",
    footer: "Šumadija Ketering · Hausgemachter Geschmack in ganz Serbien",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("sr");
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#pocetna" aria-label="Šumadija Ketering — početna">
          <span className="brand-mark">ŠK</span><span>Šumadija Ketering</span>
        </a>
        <nav aria-label={language === "sr" ? "Glavna navigacija" : "Hauptnavigation"}>
          <a href="#usluge">{t.nav[0]}</a><a href="#kako">{t.nav[1]}</a><a href="#kontakt">{t.nav[2]}</a>
        </nav>
        <div className="language-switcher" aria-label="Izbor jezika / Sprachauswahl">
          <button className={language === "sr" ? "active" : ""} onClick={() => setLanguage("sr")} aria-pressed={language === "sr"}>SR</button>
          <span>/</span>
          <button className={language === "de" ? "active" : ""} onClick={() => setLanguage("de")} aria-pressed={language === "de"}>DE</button>
        </div>
      </header>

      <section className="hero" id="pocetna">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.titleA}<br/><em>{t.titleB}</em></h1>
          <p className="hero-text">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+381616443522">{t.call}</a>
            <a className="button button-whatsapp" href="https://wa.me/381616443522" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <div className="phone-row"><a href="tel:+381616443522">061 644 3522</a><span>•</span><a href="tel:+381677691959">067 769 1959</a></div>
        </div>
        <div className="hero-visual" aria-label={language === "sr" ? "Tradicionalna trpeza Šumadija Keteringa" : "Traditionelle Tafel von Šumadija Ketering"}>
          <div className="sunburst"/><img src="/sumadija-ketering-logo.png" alt="Šumadija Ketering"/><p>{t.nationwide}</p>
        </div>
      </section>

      <div className="kilim-band" aria-hidden="true"/>

      <section className="services section" id="usluge">
        <div className="section-heading">
          <p className="section-kicker">{t.servicesKicker}</p><h2>{t.servicesTitle}</h2><p>{t.servicesIntro}</p>
        </div>
        <div className="service-grid">
          {t.services.map(([title, description], index) => (
            <article className="service-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <div className="kilim-band kilim-band-light" aria-hidden="true"/>

      <section className="promise-section">
        <div className="promise-photo"><img src="/sumadija-ketering-logo.png" alt="Bogata tradicionalna ketering ponuda"/></div>
        <div className="promise-copy">
          <p className="section-kicker light">{t.promiseKicker}</p><h2>{t.promiseTitle}</h2>
          <div className="promise-list">
            {t.promises.map(([title, description], index) => (
              <div className="promise-item" key={title}><b>{index + 1}</b><div><h3>{title}</h3><p>{description}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <div className="kilim-band kilim-band-green" aria-hidden="true"/>

      <section className="steps section" id="kako">
        <div className="section-heading compact"><p className="section-kicker">{t.stepsKicker}</p><h2>{t.stepsTitle}</h2></div>
        <div className="steps-grid">
          {t.steps.map(([title, description], index) => (
            <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <div className="kilim-band kilim-band-dark" aria-hidden="true"/>

      <section className="contact-section" id="kontakt">
        <div className="contact-inner">
          <p className="section-kicker light">{t.ctaKicker}</p><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p>
          <div className="contact-cards">
            <article><small>{t.callNumber}</small><a href="tel:+381616443522">061 644 3522</a><a className="wa-link" href="https://wa.me/381616443522" target="_blank" rel="noreferrer">{t.message} →</a></article>
            <article><small>{t.callNumber}</small><a href="tel:+381677691959">067 769 1959</a><a className="wa-link" href="https://wa.me/381677691959" target="_blank" rel="noreferrer">{t.message} →</a></article>
          </div>
        </div>
      </section>

      <footer><a className="brand" href="#pocetna"><span className="brand-mark">ŠK</span><span>Šumadija Ketering</span></a><p>{t.footer}</p><a href="#pocetna" aria-label={language === "sr" ? "Nazad na vrh" : "Nach oben"}>↑</a></footer>
    </main>
  );
}
