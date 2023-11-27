import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialFloatButton from '@/components/SocialFloatButton';
import ButtonScroolToTop from '@/components/ButtonScroolToTop';

const inter = Inter({ subsets: ['latin'] });
const myFont = localFont({
  src: '../assets/font/Inter/Inter-VariableFont_slnt,wght.ttf',
});

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
      <body className={myFont.className}>
        <header className='z-50'>
          <Navbar />
        </header>
        <main className='min-h-screen pt-[72px] pb-16 z-0'>
          <div className='fixed bottom-20 right-8 lg:bottom-20 z-10'>
            <SocialFloatButton />
          </div>
          <div className='fixed bottom-8 right-16 z-50'>
            <ButtonScroolToTop />
          </div>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
