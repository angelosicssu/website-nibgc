import Image from "next/image";
import { FaYoutube, FaInstagram, FaSpotify } from "react-icons/fa";

export const Footer = () => {
    return(
        <div className="flex justify-between bg-[#140A55] p-10 text-white items-center font-bold">
            <div className="flex flex-col items-center gap-3">
                <Image src="/images/nibGrandeCircular.png" alt="Logo" width={90} height={300}/>
                <nav>
                    <ul>
                        <div className="flex gap-5">
                            <li className="cursor-pointer"><FaYoutube size={20} color="#FFF"/></li>
                            <li className="cursor-pointer"><FaInstagram size={20} color="#FFF"/></li>
                            <li className="cursor-pointer"><FaSpotify size={20} color="#FFF"/></li>
                        </div>
                    </ul>
                </nav>
            </div>

            <div className="flex flex-col uppercase items-center gap-1">
                <p className="text-xl">Desenvolvido por</p>
                <p className="text-4xl">NIB Grande Circular</p>
            </div>

            <div className="flex flex-col items-center">
                <p>Contato</p>
                <p>(92) 99487-5356</p>
            </div>
        </div>
    )
}