import Link from "next/link";
import { locales, getDict } from "../../lib/i18n";

type Params = { locale: string };

export default async function HomePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  const dict = getDict(locale);
  const donateUrl = process.env.NEXT_PUBLIC_STRIPE_DONATION_URL;

  return (
    <main className="shell">
      <nav className="nav">
        <span className="brand">demo.sarl</span>
        <div
          className="lang-switch"
          role="navigation"
          aria-label={dict.langLabel}
        >
          {locales.map((l) => (
            <Link
              key={l}
              href={`/${l}`}
              className="lang-link"
              aria-current={l === locale ? "page" : undefined}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>

      <span className="badge">{dict.badge}</span>
      <h1>{dict.heroTitle}</h1>
      <p className="subtitle">{dict.heroSubtitle}</p>

      <section className="grid">
        <article className="card">
          <h2>{dict.whatIsTitle}</h2>
          <p>{dict.whatIsBody}</p>
        </article>
        <article className="card">
          <h2>{dict.tldTitle}</h2>
          <p>{dict.tldBody}</p>
        </article>
        <article className="card" style={{ gridColumn: "1 / -1" }}>
          <h2>{dict.meaningTitle}</h2>
          <p>{dict.meaningIntro}</p>
          <dl className="acronym">
            {dict.meaningItems.map((m) => (
              <div className="acronym-row" key={m.letter}>
                <dt className="acronym-letter">{m.letter}</dt>
                <dd className="acronym-word">
                  <strong>{m.word}</strong>
                  <span className="acronym-gloss">{m.gloss}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="muted-note">{dict.meaningNote}</p>
        </article>
        <article className="card" style={{ gridColumn: "1 / -1" }}>
          <h2>{dict.equivalentsTitle}</h2>
          <p>{dict.equivalentsIntro}</p>
          <ul className="equivalents">
            {dict.equivalentsItems.map((e) => (
              <li key={e.country}>
                <span className="eq-country">{e.country}</span>
                <span className="eq-term">{e.term}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h2>{dict.usageTitle}</h2>
          <ul className="list">
            {dict.usageItems.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h2>{dict.countriesTitle}</h2>
          <ul className="list">
            {dict.countries.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </article>
      </section>

      {donateUrl ? (
        <section className="donate" aria-labelledby="donate-heading">
          <h2 id="donate-heading">{dict.donateTitle}</h2>
          <p>{dict.donateBody}</p>
          <a
            className="donate-btn"
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.donateButton}
          </a>
          <small className="donate-powered">{dict.donatePoweredBy}</small>
        </section>
      ) : null}

      <footer>
        <div>{dict.footerNotice}</div>
        <div>© {new Date().getFullYear()} demo.sarl</div>
      </footer>
    </main>
  );
}
