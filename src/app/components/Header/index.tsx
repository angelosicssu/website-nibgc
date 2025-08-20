import { FaYoutube, FaInstagram, FaSpotify } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Image from "next/image";

export default function Header() {
    return (
        <div className="flex items-center justify-between py-3 px-7 p bg-linear-to-r from-[#1D0072] to-[#381B8E]">
            <Image 
            src="/marca.png"
            width={100}
            height={100}
            alt="teste" 
            />
            <nav>
                <ul className="flex items-center text-[#dbdbdb] gap-12 font-extrabold uppercase text-[21px] font-[Roboto]">
                    <div className="flex gap-5">
                        <li className="hover:text-white"><a className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[4px] after:bg-[#F10078] after:transition-all after:duration-500 hover:after:w-full after:rounded-2xl" href="#">Quem Somos</a></li>
                        <li className="hover:text-white"><a className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[4px] after:bg-[#F10078] after:transition-all after:duration-500 hover:after:w-full after:rounded-2xl" href="#">Meditação</a></li>
                        <li className="hover:text-white"><a className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[4px] after:bg-[#F10078] after:transition-all after:duration-500 hover:after:w-full after:rounded-2xl" href="#">Eventos</a></li>
                    </div>
                    <div className="flex gap-5">
                        <li className="hover:text-white"><a href="#"><FaYoutube size={30}/></a></li>
                        <li className="hover:text-white"><a href="#"><BiLogoInstagramAlt size={30}/></a></li>
                        <li className="hover:text-white"><a href="#"><FaSpotify size={27}/></a></li>
                    </div>
                    <div className="bg-[#FDA402] py-1 px-4 rounded-lg hover:bg-blue-500 hover:shadow-xl shadow-blue-500/50 hover:transition-all duration-300 hover:scale-110">
                        <li className="text-white"><a href="#">Contato</a></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}
