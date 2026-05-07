import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://ganeshhetkar.netlify.app'),
  title: 'Ganesh Hetkar | Frontend Developer, Designer & Creator',
  description:
    'Portfolio of Ganesh Hetkar, a frontend developer, graphic designer, video editor, and AI learning enthusiast building modern digital experiences.',
  openGraph: {
    title: 'Ganesh Hetkar | Frontend Developer & Creative Designer',
    description:
      'Modern portfolio for Ganesh Hetkar featuring frontend projects, UI design, graphics work, video editing, and AI learning.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
