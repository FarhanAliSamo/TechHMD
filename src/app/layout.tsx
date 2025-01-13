import { ReactNode } from 'react';
import Header from '../components/molecules/header';
import Footer from '../components/molecules/footer';
import '../styles/globals.css';

export const metadata = {
  title: 'TechHMD - Digital Agency',
  description: 'Professional Digital Agency Services',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
