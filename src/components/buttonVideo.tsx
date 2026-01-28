import { FaPlayCircle } from "react-icons/fa";

export const ButtonVideo = () => {
    return (
        <div className="flex py-3 px-5 border-4 border-white gap-5 rounded-xl text-white uppercase font-black text-2xl bg-[#D9D9D9]/10 items-center w-fit cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,2500)">
            <FaPlayCircle size={30}/>
            <p>Nossa Igreja</p>
        </div>
    )
}