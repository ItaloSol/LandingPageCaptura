import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ítalo Sol - Landing Pages de Alta Performance',
  description: 'Aumente suas conversões e gere leads qualificados com landing pages otimizadas entregues em até 2 dias.',
  keywords: 'landing page, alta conversão, leads qualificados, desenvolvimento web, SEO, responsivo',
  authors: [{ name: 'Ítalo Sol' }],
  openGraph: {
    title: 'Ítalo Sol - Landing Pages de Alta Performance',
    description: 'Aumente suas conversões e gere leads qualificados com landing pages otimizadas entregues em até 2 dias.',
    url: 'https://italo-sol.com.br',
    siteName: 'Ítalo Sol Web Developer',
    images: [
      {
        url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ítalo Sol Web Developer'
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}