import Image from "next/image";
import FilmSlider from "./slider";
import { useTranslations } from "next-intl";

export default function Service(){
const t =useTranslations("service")
    return <>
<section className="bg-[#eee1dd]" id="section-services">
   <div className="container px-4 py-10 mx-auto ">
     <div className="text-center">
        <h2 className="font-bold text-xl md:text-6xl font-[cairo]">{t("title")}</h2>
    </div>
<div className="grid grid-cols-3 gap-4 lg:gap-8 mt-8">
   
            <div  className="group overflow-hidden ">
              <Image 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300" 
                src="/sticker.webp"
                alt="Stickers" 
                width={400} 
                height={300}
              />
            </div>
              <div  className="group overflow-hidden ">
              <Image 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300" 
                src="/tshirt.webp"
                alt="T-Shirts" 
                width={400} 
                height={300}
              />
            </div>
              <div  className="group h-[70%] overflow-hidden ">
              <Image 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300" 
                src="/cup.webp"
                alt="Cups" 
                width={400} 
                height={300}
              />
            </div>
              <div  className="relative top-[-25%]  group overflow-hidden ">
              <Image 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300" 
                src="/bag.webp"
                alt="bags" 
                width={400} 
                height={300}
              />
            </div>
              <div  className="group overflow-hidden ">
              <Image 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300" 
                src="/card.webp"
                alt="Business Cards" 
                width={400} 
                height={300}
              />
            </div>
               <div  className="relative top-[-25%] h-[85%]  group overflow-hidden ">
              <Image 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300" 
                src="/product 2.webp"
                alt="Products" 
                width={400} 
                height={300}
              />
            </div>
            
        </div>
            <FilmSlider/>

    </div>
  
</section>
    </>
}