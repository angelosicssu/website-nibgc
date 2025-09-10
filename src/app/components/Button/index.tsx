import { ReactNode } from "react";

// inteface serve para definir o formato que os props do component devem seguir
interface ButtonProps {
    text: string;
    icon?: ReactNode; //ReactNode -> pode utilizar qualquer componente React
    variant?: "primary" | "secondary" | "third" | "fourth";
    onClick?: () => void;
    className?: string;
}

// aqui é feito a desestruturação
export default function Button({
    text,
    icon = null,
    variant = "primary",
    onClick,
    className = ""
}: ButtonProps) {
    const base = "flex uppercase cursor-pointer"
    const variants: Record<string, string> = {
        primary: "w-fit text-white items-center text-2xl font-bold gap-4 border-4 rounded-lg py-4 px-4 bg-[#D9D9D9]/30 hover:scale-105 transition-all duration-300",
        secondary: "flex border-2 w-[300px] h-[60px] items-center justify-center font-semibold",
        third: "w-[400px] text-white items-center text-2xl font-bold gap-4 border-4 rounded-lg py-4 px-4 bg-[#D9D9D9]/30",
    };

    return(
        <div 
            className={`${base} ${variants[variant]} ${className}`} 
            onClick={onClick}
        >
            {icon}
            <p>{text}</p>
        </div>
    )
}