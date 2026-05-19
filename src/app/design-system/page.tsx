import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-ds-mono',
});

export const metadata: Metadata = {
  title: 'Nordic Craft Design System | taktrzeba.pl',
  description: 'Nowy system projektowy Nordic Craft: kolory, typografia, spacing, komponenty i zasady UI.',
  alternates: {
    canonical: '/design-system',
  },
};

const colorTokens = [
  ['surface', '#fbf9f4'],
  ['surface-dim', '#dbdad5'],
  ['surface-bright', '#fbf9f4'],
  ['surface-container-lowest', '#ffffff'],
  ['surface-container-low', '#f5f3ee'],
  ['surface-container', '#f0eee9'],
  ['surface-container-high', '#eae8e3'],
  ['surface-container-highest', '#e4e2dd'],
  ['on-surface', '#1b1c19'],
  ['on-surface-variant', '#444748'],
  ['inverse-surface', '#30312e'],
  ['inverse-on-surface', '#f2f1ec'],
  ['outline', '#747878'],
  ['outline-variant', '#c4c7c7'],
  ['surface-tint', '#5f5e5e'],
  ['primary', '#000000'],
  ['on-primary', '#ffffff'],
  ['primary-container', '#1c1b1b'],
  ['on-primary-container', '#858383'],
  ['inverse-primary', '#c8c6c5'],
  ['secondary', '#795736'],
  ['on-secondary', '#ffffff'],
  ['secondary-container', '#fdcfa4'],
  ['on-secondary-container', '#785635'],
  ['tertiary', '#000000'],
  ['on-tertiary', '#ffffff'],
  ['tertiary-container', '#0d1f16'],
  ['on-tertiary-container', '#74897b'],
  ['error', '#ba1a1a'],
  ['on-error', '#ffffff'],
  ['error-container', '#ffdad6'],
  ['on-error-container', '#93000a'],
  ['primary-fixed', '#e5e2e1'],
  ['primary-fixed-dim', '#c8c6c5'],
  ['on-primary-fixed', '#1c1b1b'],
  ['on-primary-fixed-variant', '#474746'],
  ['secondary-fixed', '#ffdcbe'],
  ['secondary-fixed-dim', '#ebbe95'],
  ['on-secondary-fixed', '#2c1600'],
  ['on-secondary-fixed-variant', '#5f4021'],
  ['tertiary-fixed', '#d2e8d8'],
  ['tertiary-fixed-dim', '#b6ccbd'],
  ['on-tertiary-fixed', '#0d1f16'],
  ['on-tertiary-fixed-variant', '#384b40'],
  ['background', '#fbf9f4'],
  ['on-background', '#1b1c19'],
  ['surface-variant', '#e4e2dd'],
  ['canvas-beige', '#F2EDE4'],
  ['graphite-soft', '#373737'],
  ['accent-orange', '#D97706'],
  ['accent-brass', '#A37E2C'],
].map(([name, value]) => ({ name, value }));

const typographyTokens = [
  ['display-lg', 'Geist', '72px', '700', '80px', '-0.04em'],
  ['display-lg-mobile', 'Geist', '48px', '700', '52px', '-0.03em'],
  ['headline-xl', 'Geist', '40px', '600', '48px', '-0.02em'],
  ['headline-lg', 'Geist', '32px', '600', '40px', '-0.02em'],
  ['body-lg', 'Geist', '18px', '400', '30px', '0em'],
  ['body-md', 'Geist', '16px', '400', '26px', '0em'],
  ['label-mono', 'JetBrains Mono', '12px', '500', '16px', '0.05em'],
].map(([name, family, size, weight, lineHeight, letterSpacing]) => ({
  name,
  family,
  size,
  weight,
  lineHeight,
  letterSpacing,
}));

const roundedTokens = [
  ['sm', '0.25rem'],
  ['default', '0.5rem'],
  ['md', '0.75rem'],
  ['lg', '1rem'],
  ['xl', '1.5rem'],
  ['full', '9999px'],
].map(([name, value]) => ({ name, value }));

const spacingTokens = [
  ['unit', '8px'],
  ['container-max', '1280px'],
  ['gutter', '32px'],
  ['margin-desktop', '80px'],
  ['margin-mobile', '20px'],
  ['section-gap', '160px'],
].map(([name, value]) => ({ name, value }));

const corePrinciples = [
  'Editorial warmth with institutional readability.',
  'Cinematic visuals + high contrast + easy scanning.',
  'Tonal depth and texture over over-decorated UI effects.',
  'Premium documentary rhythm with generous white space.',
  'Readability and trust take priority over trend aesthetics.',
];

export default function DesignSystemPage() {
  return (
    <main className={`ds-nordic ${geistMono.variable}`}>
      <section className="ds-nordic-hero">
        <div className="container">
          <p className="ds-nordic-eyebrow">Nordic Craft • Design System</p>
          <h1>Premium documentary storytelling, built for clarity.</h1>
          <p>
            System łączy skandynawską prostotę z rzemieślniczym klimatem warsztatu. Priorytet: wysoka czytelność,
            spokój wizualny i wiarygodność dla rodziców.
          </p>
        </div>
      </section>

      <section className="ds-nordic-section">
        <div className="container">
          <h2>Brand & Style</h2>
          <div className="ds-nordic-principles">
            {corePrinciples.map((item) => (
              <article key={item} className="ds-nordic-note">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ds-nordic-section ds-nordic-alt">
        <div className="container">
          <h2>Color Palette (Full)</h2>
          <div className="ds-nordic-color-grid">
            {colorTokens.map((token) => (
              <article key={token.name} className="ds-nordic-color-card">
                <div className="ds-nordic-color-preview" style={{ background: token.value }} />
                <h3>{token.name}</h3>
                <p>{token.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ds-nordic-section">
        <div className="container">
          <h2>Typography</h2>
          <div className="ds-nordic-type-grid">
            {typographyTokens.map((token) => (
              <article key={token.name} className="ds-nordic-type-card">
                <h3>{token.name}</h3>
                <p><strong>Family:</strong> {token.family}</p>
                <p><strong>Size:</strong> {token.size}</p>
                <p><strong>Weight:</strong> {token.weight}</p>
                <p><strong>Line-height:</strong> {token.lineHeight}</p>
                <p><strong>Letter-spacing:</strong> {token.letterSpacing}</p>
                <div
                  className={token.name === 'label-mono' ? 'ds-nordic-mono' : 'ds-nordic-type-sample'}
                  style={{
                    fontSize: token.size,
                    fontWeight: Number(token.weight),
                    lineHeight: token.lineHeight,
                    letterSpacing: token.letterSpacing,
                  }}
                >
                  Umiejętności, które zostają na całe życie.
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ds-nordic-section ds-nordic-alt">
        <div className="container">
          <h2>Layout, Radius & Spacing</h2>
          <div className="ds-nordic-token-columns">
            <article className="ds-nordic-token-card">
              <h3>Rounded</h3>
              {roundedTokens.map((token) => (
                <p key={token.name}><strong>{token.name}:</strong> {token.value}</p>
              ))}
            </article>
            <article className="ds-nordic-token-card">
              <h3>Spacing</h3>
              {spacingTokens.map((token) => (
                <p key={token.name}><strong>{token.name}:</strong> {token.value}</p>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="ds-nordic-section">
        <div className="container">
          <h2>Hero Model (Cinematic + Readable)</h2>
          <div className="ds-nordic-cinematic">
            <div className="ds-nordic-cinematic-overlay" />
            <div className="ds-nordic-cinematic-content">
              <p className="ds-nordic-label">Layer 1: media • Layer 2: dark gradient • Layer 3: headline • Layer 4: trust</p>
              <h3>Umiejętności, które zostają na całe życie.</h3>
              <p className="ds-nordic-overlay-code">linear-gradient(to right, rgba(0,0,0,0.72), rgba(0,0,0,0.35))</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ds-nordic-section ds-nordic-alt">
        <div className="container">
          <h2>Components</h2>
          <div className="ds-nordic-components-grid">
            <article className="ds-nordic-component-card">
              <h3>Buttons</h3>
              <div className="ds-nordic-button-row">
                <button type="button" className="ds-nordic-btn-primary">Sprawdź dostępne terminy</button>
                <button type="button" className="ds-nordic-btn-secondary">Dowiedz się więcej</button>
              </div>
            </article>

            <article className="ds-nordic-component-card">
              <h3>Inputs</h3>
              <div className="ds-nordic-inputs">
                <label htmlFor="ds-name-nordic">Imię rodzica</label>
                <input id="ds-name-nordic" type="text" placeholder="Jan Kowalski" />
                <label htmlFor="ds-tool-nordic">Preferowany warsztat</label>
                <input id="ds-tool-nordic" type="text" placeholder="Stolarka" />
              </div>
            </article>

            <article className="ds-nordic-component-card">
              <h3>Content Card</h3>
              <div className="ds-nordic-content-card">
                Karta treści bez twardej obwódki, na warstwie tonalnej i miękkim cieniu.
              </div>
            </article>

            <article className="ds-nordic-component-card">
              <h3>Technical Chips</h3>
              <div className="ds-nordic-chip-row">
                <span className="ds-nordic-chip">WOODWORKING</span>
                <span className="ds-nordic-chip">PLUMBING</span>
                <span className="ds-nordic-chip">ELECTRICAL</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="ds-nordic-section">
        <div className="container">
          <h2>Trust Metrics Blocks</h2>
          <div className="ds-nordic-metrics-grid">
            <article className="ds-nordic-metric-card">
              <strong>12</strong>
              <span>uczestników max</span>
            </article>
            <article className="ds-nordic-metric-card">
              <strong>35</strong>
              <span>godzin praktyki</span>
            </article>
            <article className="ds-nordic-metric-card">
              <strong>4</strong>
              <span>specjalizacje</span>
            </article>
            <article className="ds-nordic-metric-card">
              <strong>100%</strong>
              <span>zajęć praktycznych</span>
            </article>
          </div>
        </div>
      </section>

      <section className="ds-nordic-section ds-nordic-alt">
        <div className="container">
          <h2>Readability & Accessibility Rules</h2>
          <div className="ds-nordic-principles">
            <article className="ds-nordic-note">
              <p>Body text should maintain strong contrast against warm surfaces.</p>
            </article>
            <article className="ds-nordic-note">
              <p>Avoid low-opacity key copy and translucent CTA labels.</p>
            </article>
            <article className="ds-nordic-note">
              <p>Recommended paragraph width: 65-75 characters per line.</p>
            </article>
            <article className="ds-nordic-note">
              <p>Mobile body copy: minimum 18px with relaxed line-height.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="ds-nordic-section">
        <div className="container">
          <h2>Motion & Layout Guidance</h2>
          <div className="ds-nordic-principles">
            <article className="ds-nordic-note">
              <p>Use subtle cinematic fades, slow parallax and layered depth.</p>
            </article>
            <article className="ds-nordic-note">
              <p>Avoid flashy transitions, gaming-like motion and visual noise.</p>
            </article>
            <article className="ds-nordic-note">
              <p>Desktop layout: framed editorial margins with occasional wide cinematic breaks.</p>
            </article>
            <article className="ds-nordic-note">
              <p>Mobile layout: immersive, but always optimized for immediate scanning and clarity.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
