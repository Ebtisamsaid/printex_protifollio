import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Contact(){
    const currentYear = new Date().getFullYear()
    const t = useTranslations("footer")
    return <>
    <section className="bg-[#303030] p-16 md:p-4 " id="section-contact">
        <div id="section-contact" className="container mx-auto flex-col md:flex-row flex justify-between items-center " >
  <div className="my-20 flex-[3]">
              <h1 className="text-4xl font-bold text-white">{t("title")}</h1>
       <p className=" my-8 font-semibold text-white">{t("desc")}

</p>
  </div>
  <div className="flex-[1] my-20">
   <div>
     <h5 className="text-white font-semibold text-sm ">PHONE</h5>
<div className="flex "> 
     <span className="text-white "><svg className="w-10 h-10 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>
</span>
     <p className="text-white font-semibold text-xl"> 01032347077</p>

</div>
   </div>
    <div>
     <h5 className="text-white font-semibold mt-4 not-only:text-sm  ">EMAIL</h5>
<div className="flex "> 
     <span className="text-white "><svg className=" mx-2 w-8 h-8 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
</svg>

</span>
     <p className="text-white font-semibold text-xl"> printexegy@gmail.com</p>

</div>
   </div>
   <div>
     <h5 className="text-white font-semibold mt-4 text-sm ">LOCATION</h5>
<div className="flex "> 
  <Link href="https://maps.app.goo.gl/WcTosTRiq6bQEQ8s8?g_st=ic" target="_blank">       <span className="text-white "><svg className="mx-2 w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
</svg>

</span></Link>
     <p className="text-white font-semibold text-sm"> CAIRO,Nasr City, 7th District,In Front od Ali ibn Abitaleb school</p>

</div>
   </div>
 
  </div>
        </div>
        <div className="container mx-auto">
            <p className="text-center text-white ">         Copyright © {currentYear}  <span className="text-[#9c091a] font-bold text-lg">PRINTEX</span>. All rights reserved.
</p>
        </div>
    </section>
    </>
}