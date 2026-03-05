import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_component/navbar/navbar";
import Contact from "./_component/navbar/footer/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
      <Navbar/>
        {children}
        <Contact/>
      </body>
    </html>
  );
}
