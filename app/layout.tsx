import type { Metadata } from 'next';
import { Jersey_10, Jersey_25 } from 'next/font/google';
import './globals.css';

const jersey = Jersey_10({
  variable: '--font-pixel',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const jerseyFine = Jersey_25({
  variable: '--font-pixel-fine',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jack Schroeder | Computer Science',
  description:
    'Jack Schroeder is a computer science student focused on cloud computing, cybersecurity, software development, and local hosting.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jersey.variable} ${jerseyFine.variable}`}>
        {children}
      </body>
    </html>
  );
}
