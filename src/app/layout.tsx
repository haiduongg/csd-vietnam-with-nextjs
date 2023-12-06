import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialFloatButton from '@/components/SocialFloatButton';
import ButtonScroolToTop from '@/components/ButtonScroolToTop';
import Providers from './provides'

const font = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CSD Vietnam',
  description: 'CSD Vietnam - Highly skilled and experienced group',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Providers>
          <header className='z-50'>
            <Navbar />
          </header>
          <main className='min-h-screen pt-[72px] pb-16 z-0'>
            <div className='fixed bottom-20 right-8 lg:bottom-20 z-10'>
              <SocialFloatButton />
            </div>
            <div className='fixed bottom-8 right-20 z-50'>
              <ButtonScroolToTop />
            </div>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
