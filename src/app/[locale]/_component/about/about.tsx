import { useTranslations } from "next-intl"

export default function About(){
    const t = useTranslations("about")
    const t1 = useTranslations("about-card1")
    const t2 = useTranslations("about-card2")
    const t3 = useTranslations("about-card3")
    const abouts = [ {
        title:t3("title"),
        discription:t3("desc"),
        bg_color:"#ffe793"
    } ,{
        title:t2("title"),
        discription:t2("desc"),
        bg_color:"#1f7b4d",
    } ,
{
    title:t1("title"),
    discription:t1("desc"),
    bg_color:"#f6b1de",
} ]
    return <>
    <section className="bg-[#eee1dd] p-16 md:p-4 " id="section-about">
     <div className="container mx-auto">
           <div>
            <h1 className="text-4xl font-bold text-center ">{t("title1")}</h1>
            <h4 className="font-semibold text-center text-gray-700 mt-8">{t("title2")}

</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-26">
{abouts.map((about, index) => (
    <div key={index} className="p-6 rounded-lg border-[4px] border-[#ac9c9c] shadow-md" style={{ backgroundColor: about.bg_color }}>
        <h2 className="text-xl font-bold mb-2 text-[#ac9c9c]">{about.title}</h2>
        <p className="text-gray-700 font-semibold">{about.discription}</p>
    </div>
))}
        </div>
     </div>
    </section>
    
    </>
}