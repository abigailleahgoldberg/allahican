import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | AllahiCan',
  description: 'Get in touch with the AllahiCan team.',
};

export default function ContactPage() {
  return (
    <main style={{ background: '#0C2E0C', color: '#FAFAF8', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#C9A84C', marginBottom: '0.5rem' }}>
          Contact Us
        </h1>
        <p style={{ color: '#FAFAF8', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          How can we help?
        </p>

        <div style={{ background: 'rgba(45,125,50,0.15)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Have a question about an order, a content inquiry, or just want to connect? We&apos;d love to hear from you.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            <strong style={{ color: '#C9A84C' }}>Email:</strong>{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#C9A84C', textDecoration: 'none' }}>
              thevoiceofcash@gmail.com
            </a>
          </p>
        </div>

        <div style={{ background: 'rgba(45,125,50,0.1)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '8px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#C9A84C', marginBottom: '1rem' }}>
            What We Can Help With
          </h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>Order questions or returns</li>
            <li style={{ marginBottom: '0.5rem' }}>Content feedback or corrections</li>
            <li style={{ marginBottom: '0.5rem' }}>Partnership and advertising inquiries</li>
            <li style={{ marginBottom: '0.5rem' }}>DMCA or copyright concerns</li>
            <li style={{ marginBottom: '0.5rem' }}>General questions</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
