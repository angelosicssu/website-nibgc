import Image from "next/image";
import { Button } from "./ui/button"
import { FaYoutube, FaInstagram, FaSpotify } from "react-icons/fa";
import { Contact } from "./contact";

export const Header = () => {
    return (
        <div className="flex justify-between items-center bg-linear-to-r from-[#1D0072] to-[#1b238e] px-5 py-3">
            <div>
                <Image src="/images/nibGrandeCircular.png" alt="Logo NIB Grande Circular" width={100} height={100}/>
            </div>
            <nav className="flex items-center gap-10">
                <ul className="flex items-center gap-10">
                    <div className="flex gap-10 text-white font-bold text-xl uppercase">
                        <li><a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[4px] after:w-0 after:bg-[#F10078]  after:transition-all after:duration-400 hover:after:w-full cursor-pointer">Quem Somos</a></li>
                        <li><a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[4px] after:w-0 after:bg-[#F10078]  after:transition-all after:duration-400 hover:after:w-full cursor-pointer">Meditação</a></li>
                        <li><a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[4px] after:w-0 after:bg-[#F10078] after:transition-all after:duration-400 hover:after:w-full cursor-pointer">Eventos</a></li>
                    </div>
                    <div className="flex gap-5">
                        <li className="cursor-pointer"><FaYoutube size={30} color="#FFF"/></li>
                        <li className="cursor-pointer"><FaInstagram size={30} color="#FFF"/></li>
                        <li className="cursor-pointer"><FaSpotify size={30} color="#FFF"/></li>
                    </div>
                </ul>
                <Contact/>
            </nav>
        </div>
    )
}