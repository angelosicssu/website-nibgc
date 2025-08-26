"use client"; // rode somente no navegador, não no servidor
import Image from "next/image";
import { useEffect, useState } from "react";

const cards = [
    {
        id: 1,
        bg: "bg-linear-to-b from-[#4A62FF] to-[#0900B2]",
        image: "/image/visualIdentity/cultoFamiliar.png",
        alt: "Logo Culto Familiar"
    },
    {
        id: 2,
        bg: "bg-linear-to-b from-[#000000] to-[#676767]",
        image: "/image/visualIdentity/novaJovens.png",
        alt: "Logo Nova Jovens"
    },
    {
        id: 3,
        bg: "bg-linear-to-b from-[#FF9501] to-[#FF9500]",
        image: "/image/visualIdentity/novaTeens.png",
        alt: "Logo Nova Teens"
    }
];

export default function Card() {

    const [order, setOrder] = useState(cards);

    useEffect(() => {
        const interval = setInterval(() => {
            setOrder((prev) => {
                const [first, ...rest] = prev;
                return [...rest, first];
            })
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div className="flex items-center justify-center">
            <div className="flex gap-[50px] relative">
                {order.map((card, index) => (
                    <div
                    key={card.id}
                    className={`
                        w-[400] h-[400] flex items-center justify-center rounded-2xl shadow-xl trasition-all duration-75
                        ${card.bg}
                        ${index === 0 ? "z-30 scale-100" : ""}
                        ${index === 1 ? "z-20 -ml-50 scale-90" : ""}
                        ${index === 2 ? "z-10 -ml-50 scale-80" : ""}
                        `}
                    >
                        <Image
                        src={card.image}
                        alt={card.alt}
                        width={350}
                        height={350}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}