import type { Metadata } from "next";
import Link from "next/link";
import { locales } from "../../../../lib/i18n";
import { getTesseraDict } from "../../../../lib/tessera-i18n";

type Params = { locale: string };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getTesseraDict(locale);
  return {
    title: dict.metaTitle,
    description: dict.metaDescription,
    alternates: {
      canonical: `/${locale}/projects/tessera`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/projects/tessera`]),
      ),
    },
  };
}

export default async function TesseraPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  const dict = getTesseraDict(locale);

  return (
    <main className="shell tessera">
      <nav className="nav">
        <Link href={`/${locale}`} className="brand back-link">
          ← {dict.backToDemo}
        </Link>
        <div
          className="lang-switch"
          role="navigation"
          aria-label="Language"
        >
          {locales.map((l) => (
            <Link
              key={l}
              href={`/${l}/projects/tessera`}
              className="lang-link"
              aria-current={l === locale ? "page" : undefined}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>

      <span className="badge">{dict.statusBadge}</span>
      <h1>{dict.heroTitle}</h1>
      <p className="tagline">{dict.heroTagline}</p>
      <p className="lede">{dict.heroLede}</p>

      <section className="block" aria-labelledby="problem">
        <h2 id="problem">{dict.problemTitle}</h2>
        <p className="block-lede">{dict.problemLede}</p>
        <div className="bullet-grid">
          {dict.problemBullets.map((b) => (
            <article className="bullet" key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="market">
        <h2 id="market">{dict.marketTitle}</h2>
        <p className="block-lede">{dict.marketLede}</p>
        <div className="stats-grid">
          {dict.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-cite">{s.cite}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="approach">
        <h2 id="approach">{dict.approachTitle}</h2>
        <p className="block-lede">{dict.approachLede}</p>
        <ol className="pillars">
          {dict.approachPillars.map((p, i) => (
            <li key={p.title}>
              <div className="pillar-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="pillar-body">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="block" aria-labelledby="why-now">
        <h2 id="why-now">{dict.whyNowTitle}</h2>
        <div className="bullet-grid">
          {dict.whyNowBullets.map((b) => (
            <article className="bullet" key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="competition">
        <h2 id="competition">{dict.competitionTitle}</h2>
        <p className="block-lede">{dict.competitionLede}</p>
        <ul className="competitors">
          {dict.competitors.map((c) => (
            <li key={c.name}>
              <strong>{c.name}</strong>
              <span>{c.signal}</span>
            </li>
          ))}
        </ul>
        <p className="block-emphasis">{dict.competitionGap}</p>
      </section>

      <section className="block" aria-labelledby="compliance">
        <h2 id="compliance">{dict.complianceTitle}</h2>
        <p className="block-lede">{dict.complianceLede}</p>
        <table className="roadmap">
          <tbody>
            {dict.roadmap.map((r) => (
              <tr key={r.phase}>
                <td className="roadmap-phase">{r.phase}</td>
                <td className="roadmap-target">{r.target}</td>
                <td className="roadmap-timing">{r.timing}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="muted-note">{dict.complianceNote}</p>
      </section>

      <section className="block stage" aria-labelledby="stage">
        <h2 id="stage">{dict.stageTitle}</h2>
        <p>{dict.stageBody}</p>
        <ul className="ask-list">
          {dict.stageAsk.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="block disclaimer" aria-labelledby="disclaimer">
        <h2 id="disclaimer">{dict.disclaimerTitle}</h2>
        <p>{dict.disclaimerBody}</p>
      </section>

      <footer>
        <div>{dict.footerNotice}</div>
        <div>© {new Date().getFullYear()} demo.sarl</div>
      </footer>
    </main>
  );
}
