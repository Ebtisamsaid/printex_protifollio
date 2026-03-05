import Image from "next/image";
import Boxpic from "./boxpic.component";

export default function Header() {
    return <>
  <section className="bg-[#5B8B69] py-10">
    <div className="container flex-col flex md:flex-row px-4 md:justify-center md:items-center gap-10 mx-auto">
<Boxpic/>

    </div>
  </section>

    </>
}