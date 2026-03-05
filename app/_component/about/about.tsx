import { title } from "process"

export default function About(){
    const abouts = [ {
        title:"Vibrant Prints",
        discription:"Our printing process uses advanced technology and premium materials, ensuring sharp details, vibrant colors, and consistent results for every order.",
        bg_color:"#ffe793"
    } ,{
        title:"Fast Delivery",
        discription:"We ensure timely delivery of all printed materials, meeting deadlines without compromising on quality.",
        bg_color:"#1f7b4d",
    } ,
{
    title:"Custom Solutions",
    discription:"We offer fully customizable printing services, allowing clients to create unique designs that perfectly match their vision and brand identity.",
    bg_color:"#f6b1de",
} ]
    return <>
    <section className="bg-[#eee1dd] p-16 md:p-4 " id="section-about">
     <div className="container mx-auto">
           <div>
            <h1 className="text-4xl font-bold text-center ">Why Clients Choose Our Print Services...</h1>
            <h4 className="font-semibold text-center text-gray-700 mt-8">Reliable printing solutions designed to deliver quality, speed, and complete customization for every order.

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