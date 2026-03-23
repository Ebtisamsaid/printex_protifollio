"use client"
import { useState } from "react"; // 1. استيراد useState
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter, Link } from "../../../../i18n/routing";

export default function Navbar() {  
  const [isOpen, setIsOpen] = useState(false); // 2. حالة القائمة
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Navbar")
  const pathname = usePathname();

  function toggleLanguage() {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <>
      <nav className="bg-[#fcf4f2] sticky w-full z-50 top-0 start-0 border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto w-[80%]">
          <Image src="/printex_logo.png" width="150" height={100} alt="printex logo" />    

          {/* 3. زر الموبايل مع إضافة onClick */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft focus:outline-none" 
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
          </button>

          {/* 4. ربط الحالة بالقائمة */}
          <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 my-4 md:my-0  border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <Link href="/" className="hover:text-[#be1019] block py-2 px-3 md:p-0">{t("home")}</Link>
              </li>
              <li>
                <Link href="#section-about" className="hover:text-[#be1019] block py-2 px-3 md:p-0">{t('about')}</Link>
              </li>
              <li>
                <Link href="#section-services" className="hover:text-[#be1019] block py-2 px-3 md:p-0">{t("services")}</Link>
              </li>
              <li>
                <Link href="#section-contact" className="hover:text-[#be1019] block py-2 px-3 md:p-0" >{t("contact")}</Link>
              </li>
              <li className="md:mr-4 mt-4 md:mt-0">
                <button onClick={toggleLanguage} className="w-full text-start md:w-auto">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={locale === 'ar'} readOnly className="sr-only peer"/>
                    <div className="relative w-9 h-5 bg-[#f53f88] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                    <span className="select-none ms-3 text-sm font-medium text-heading">{locale === 'en' ? 'العربية' : 'English'}</span>
                  </label>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}