import { FaPlayCircle } from "react-icons/fa";

export default function Button({ text } : {text: string}) {
    return(
        <div className="flex w-fit text-white items-center text-2xl uppercase font-bold gap-4 border-4 rounded-lg py-2 px-3 bg-[#D9D9D9]/30 cursor-pointer hover:scale-105 transition-all duration-300">
            <FaPlayCircle size={30}/>
            <p>{text}</p>
        </div>
    )
}