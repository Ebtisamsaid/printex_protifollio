import Image from "next/image";
import { Metadata } from "next";
import Header from "./_component/header/header";
import Service from "./_component/service/service";
import About from "./_component/about/about";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppButton from "./_component/navbar/whatsapp/whatsapp";


export const metadata: Metadata = {
  title: 'printex',
  description: 'موقع برنتكس ',
  icons: {
    icon: '/favicon.jpeg', 
  },
  metadataBase: new URL("https://www.printexegy.com/en"),
  title: " برينتكس | خدمات طباعة رقمية وإعلانية - Printex Printing Services",

  description:
    "اكتشف خدمات برينتكس للطباعة عالية الجودة، من البروشورات والكروت الشخصية إلى اللوحات الإعلانية الضخمة. دقة في التنفيذ وسرعة في التسليم.",

  keywords: [
    "طباعة",
    "printing",
    "برينتكس",
    "Printex",
    "دعاية وإعلان",
    "Advertising",
    "خدمات طباعة",
    "Printing Services",
    "طباعة رقمية",
    "Digital Printing",
    "لوحات إعلانية",
    "Billboards",
    "كروت شخصية",
    "Business Cards",
    "بروشورات",
    "Brochures",
  ],

  openGraph: {
    title: "برينتكس للطباعة والإعلان",
    description: "جودة تليق بعلامتك التجارية",
    url: "https://www.printexegy.com/en", 
    siteName: "Printex",
    images: [
      {
        url: "/printex-logo.jpeg", 
        width: 800,
        height: 600,
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
};

export default function Home() {



  return (
    <main>
   
      <Header />
      <Service />
      <About />
      <WhatsAppButton/>
    </main>
  );
}
