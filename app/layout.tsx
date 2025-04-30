import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Landing Pages de Alta Performance',
  description: 'Aumente suas conversões e gere leads qualificados com landing pages otimizadas entregues em até 2 dias.',
  keywords: 'landing page, alta conversão, leads qualificados, desenvolvimento web, SEO, responsivo',
  authors: [{ name: 'Ítalo Sol' }],
  openGraph: {
    title: 'Landing Pages de Alta Performance',
    description: 'Aumente suas conversões e gere leads qualificados com landing pages otimizadas entregues em até 2 dias.',
    url: 'https://landingpage-apresentacao.web.app/',
    siteName: 'Ítalo Sol Web Developer',
    images: [
      {
        url: 'og-image.png',
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
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
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
      <head>
        {/* Google Tag Manager Script (gtag.js) */}
        {gaMeasurementId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}');
                `,
              }}
            />
          </>
        )}
        
        {/* Meta Pixel Code */}
        {pixelId && (
          <>
            <Script
              id="fb-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '3937592949839754');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img height="1" width="1" className="hidden"
                src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
        
        {/* Other head elements if needed */}
      </head>
    </html>
  );
}