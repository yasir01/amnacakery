import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "Amna's Bakery | Handcrafted Cakes & Pastries",
  description:
    'Handcrafted cakes, cupcakes, cookies, and pastries made with love. Custom cakes for every occasion. Order online for pickup or delivery.',
  keywords: [
    'bakery',
    'cakes',
    'cupcakes',
    'custom cakes',
    'wedding cakes',
    'birthday cakes',
    'pastries',
    'cookies',
  ],
  openGraph: {
    title: "Amna's Bakery | Handcrafted Cakes & Pastries",
    description:
      'Handcrafted cakes, cupcakes, cookies, and pastries made with love.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
