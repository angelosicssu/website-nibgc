import { FaYoutube, FaInstagram, FaSpotify } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Image from "next/image";

export default function Header() {
    return (
        <div className="flex items-center justify-between py-3 px-5 p bg-linear-to-r from-[#1D0072] to-[#381B8E]">
            <Image 
            src="/marca.png"
            width={100}
            height={100}
            alt="teste" 
            />
            <nav>
                <ul className="flex items-center text-white gap-3 font-bold uppercase text-lg">
                    <li><a href="#">Quem Somos</a></li>
                    <li><a href="#">Meditação</a></li>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#"><FaYoutube size={30}/></a></li>
                    <li><a href="#"><BiLogoInstagramAlt size={30}/></a></li>
                    <li><a href="#"><FaSpotify size={27}/></a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}
