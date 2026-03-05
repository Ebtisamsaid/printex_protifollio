"use client"
import Image from "next/image";
import { motion } from "framer-motion";
export default function Boxpic(){
    return <>
    <motion.div className="ml-10 w-full md:w-1/2"
     initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0   }}
   
       transition={{ duration: 1,ease:"easeOut" }} >
        <Image src="/print-box.webp" alt="print-box" width={700} height={700} />
    </motion.div>



    <div className="w-full md:w-1/2 text-center md:text-start "
  >
    <motion.h1 
      initial={{ y: 40, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}    
          transition={{ 
            duration: 0.8, 
            delay: 0.4, 
            ease: "easeOut" 
          }}
    className="text-white md:text-5xl leading-tight text-4xl font-bold mt-10">
        Spark Your Creativity, We’ll Handle the Print
    </motion.h1>

    <motion.p
      initial={{ y: 40, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}    
          transition={{ 
            duration: 0.8, 
            delay: 0.6, 
            ease: "easeOut" 
          }}
    className="text-white md:text-md leading-tight text-xl font-[cairo] mt-10">We turn your ideas into high-quality prints designed to impress.
    </motion.p>
<motion.p 
  initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}    
          transition={{ 
            duration: 0.8, 
            delay: 0.8, 
            ease: "easeOut" 
          }}
className="text-white md:text-md leading-tight text-xl font-[cairo] mt-10">Our printing process uses advanced technology and premium materials, ensuring sharp details, vibrant colors, and consistent results for every order.
</motion.p>
</div>
    </>
}