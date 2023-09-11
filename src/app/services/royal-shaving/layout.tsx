import '../../globals.css';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { ReduxProvider } from '@/store/provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}