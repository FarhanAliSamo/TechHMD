import { ReactNode } from 'react';
import Header from '../components/molecules/header';
import Footer from '../components/molecules/footer';
import '../styles/globals.css';
import MobileMenu from '@/components/molecules/mobile-menu';
import LenisProvider from '@/components/LenisProvider'; // Create this component

export const metadata = {
  title: 'TechHMD - Digital Agency',
  description: 'Professional Digital Agency Services',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <Header />
          <MobileMenu />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
