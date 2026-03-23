import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "01032347077";
  const message = "أهلاً برينتكس، كنت محتاجة استفسر عن جداريات التلوين..";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
  <div className="flex justify-between gap-2 fixed bottom-6 end-6 z-[999]">
      <Link
      href={whatsappUrl}
       target="_blank"
      rel="noopener noreferrer"
      className=" flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
      
      <span className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs px-2 py-1 rounded -top-10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        كلمينا واتساب
      </span>
    </Link>
      <Link
      href="https://www.facebook.com/Printexegy"
       target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-14 h-14 bg-blue-900 text-white rounded-full shadow-lg hover:scale-110 hover:bg-blue-700 transition-all duration-300 group"
      aria-label="Contact us on facebook"
    >
      <FaFacebook className="w-8 h-8" />
      
      <span className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs px-2 py-1 rounded -top-10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        كلمينا فيسبوك
      </span>
    </Link>
       <Link
      href="https://www.instagram.com/printexegy?igsh=YTR6dHZjdzl5dGpn"
      target="_blank"
      
      rel="noopener noreferrer"
      className="flex items-center justify-center w-14 h-14 bg-pink-800 text-white rounded-full shadow-lg hover:scale-110 hover:bg-pink-500 transition-all duration-300 group"
      aria-label="Contact us on instagram"
    >
      <FaInstagram className="w-8 h-8" />
      
      <span className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs px-2 py-1 rounded -top-10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        كلمينا انستجرام
      </span>
    </Link>


  </div>
    </>
  );
}