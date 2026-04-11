import type { Metadata } from "next";
import "./globals.css";

import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "./_component/navbar/navbar";
import Contact from "./_component/footer/footer";
import Script from "next/script";


export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params:Promise<{ locale: string }>
}>) {
  const { locale } = await params;
  console.log("layout",locale);
  
  const direction = locale === "ar" ? "rtl" : "ltr";
  const lang = locale === "ar" ? "ar" : "en";
    const messages = await getMessages();

  const locales = ['en', 'ar'];
  if (!locales.includes(locale)) notFound();
  return (
    <html lang={lang}  dir={direction}>
      <head>
<Script id="fb-pixel" strategy="afterInteractive">
{/* !function(f,b,e,v,n,t,s)
{
if(f.fbq)return;
n=f.fbq=
function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1464903172093262');
fbq('track', 'PageView'); */}

{`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1464903172093262');
            fbq('track', 'PageView');
          `}
</Script>
<noscript><img height="1" width="1" style={{ display: 'none' }}
src="https://www.facebook.com/tr?id=1464903172093262&ev=PageView&noscript=1"
/></noscript>
      </head>
      <body className="overflow-x-hidden">
        <NextIntlClientProvider messages={messages} locale={locale}>
        <Navbar/>
        {children}
        <Contact />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
