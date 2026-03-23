import Image from "next/image";
import { Metadata } from "next";
import Header from "./_component/header/header";
import Service from "./_component/service/service";
import About from "./_component/about/about";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppButton from "./_component/navbar/whatsapp/whatsapp";


export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  // العنوان الذي يظهر في بحث جوجل (يفضل أن يكون بين 50-60 حرف)
  title: " برينتكس | خدمات طباعة رقمية وإعلانية - Printex Printing Services",

  // الوصف الذي يظهر تحت العنوان (يفضل أن يكون بين 150-160 حرف)
  description:
    "اكتشف خدمات برينتكس للطباعة عالية الجودة، من البروشورات والكروت الشخصية إلى اللوحات الإعلانية الضخمة. دقة في التنفيذ وسرعة في التسليم.",

  // الكلمات المفتاحية (اختياري، لكنها تساعد في تنظيم الفئات)
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

  // لإعدادات ظهور الرابط عند مشاركته على فيسبوك أو تويتر
  openGraph: {
    title: "برينتكس للطباعة والإعلان",
    description: "جودة تليق بعلامتك التجارية",
    url: "https://your-domain.com", // استبدله برابط موقعك الحقيقي لاحقاً
    siteName: "Printex",
    images: [
      {
        url: "/printex-logo.jpeg", // سيستخدم اللوجو الخاص بك كصورة للمشاركة
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
