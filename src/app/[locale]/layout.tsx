import type { Metadata } from "next";
import "./globals.css";

import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "./_component/navbar/navbar";
import Contact from "./_component/footer/footer";


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
