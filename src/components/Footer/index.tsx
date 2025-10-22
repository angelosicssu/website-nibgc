import Image from "next/image";

// icons
import { FaYoutube, FaSpotify } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";

export default function Footer() {
    return(
        <div className="flex justify-between items-center bg-[#140A55] border-t-20 border-white text-white p-10">
            <div className="flex flex-col items-center gap-5">
                <Image src='/image/visualIdentity/nib.png' width={120} height={120} alt="Logo Nib"/>
                  <div className="flex gap-8">
                    <a href="#"><FaYoutube size={25}/></a>
                    <a href="#"><BiLogoInstagramAlt size={25}/></a>
                    <a href="#"><FaSpotify size={23}/></a>
                  </div>
            </div>
            <div className="flex flex-col items-center uppercase font-bold">
                <p className="text-2xl">Desenvolvido por</p>
                <p className="text-5xl">NIB Grande Circular</p>
            </div>
            <div className="flex flex-col items-center text-xl">
                <p className="font-semibold">Contato</p>
                <p className="uppercase">(92) 99574-1344</p>
            </div>
        </div>
    )
}