import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | AllahiCan',
  description: 'Important disclaimers for AllahiCan content.',
};

export default function DisclaimerPage() {
  return (
    <main style={{ background: '#0C2E0C', color: '#FAFAF8', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#C9A84C', marginBottom: '0.5rem' }}>
          Disclaimer
        </h1>
        <p style={{ color: '#FAFAF8', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: 'rgba(45,125,50,0.15)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8 }}>
            Please read this disclaimer carefully before using AllahiCan (allahican.com).
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#C9A84C', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
            Religious &amp; Educational Content
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            The content on this website is provided for educational and cultural purposes only. AllahiCan does not represent any official religious institution, mosque, Islamic organization, or any other faith body. We are not ordained imams, Islamic scholars, or authorized representatives of any faith tradition.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#C9A84C', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
            Sacred Texts &amp; Translations
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Quranic translations, hadith references, and religious commentary on this site represent personal perspectives and should not be taken as authoritative Islamic rulings (fatwas). Translations and interpretations may vary among scholars and schools of thought. For theological or legal guidance, please consult a qualified Islamic scholar or imam.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#C9A84C', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
            AI-Generated Content
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Some content on this website may be created or assisted by artificial intelligence tools. While we strive for accuracy and respect for Islamic traditions, AI-generated content may contain errors or misrepresentations. We encourage readers to verify religious content with authoritative sources.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#C9A84C', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
            External Links
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            This website may contain links to external websites. We are not responsible for the content, accuracy, or practices of any third-party sites. The inclusion of any link does not imply endorsement by AllahiCan.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#C9A84C', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
            Contact
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Questions about this disclaimer? Contact us at:{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#C9A84C' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
