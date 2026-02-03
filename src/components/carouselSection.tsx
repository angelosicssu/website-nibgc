"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const cards = [
    {
        id: 1,
        img: "/images/culto.png",
        alt: "NIB Grande Circular",
        bg: "bg-gradient-to-r from-[#4A62FF] to-[#0900B2]",
    },
    {
        id: 2,
        img: "/images/novaJovens.png",
        alt: "NIB Nova Jovens",
        bg: "bg-gradient-to-r from-[#000000] to-[#676767]",
    },
    {
        id: 3,
        img: "/images/novaTeens.png",
        alt: "NIB Nova Teens",
        bg: "bg-gradient-to-r from-[#FF9501] to-[#FF9500]",
    },
]

export const CarouselSection = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })  
    );

    return(
        <div className="flex justify-around items-center py-10">
            <div className="flex flex-col font-bold uppercase">
                <p className="text-7xl">Conheça <br/> Nossas</p>
                <p className="text-5xl">Programações</p>
            </div>
            <div>
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-[28rem]"
                >
                    <CarouselContent>
                        {cards.map((card) => (
                            <CarouselItem key={card.id} className="flex justify-center">
                                <Card className={`${card.bg} w-[420px] h-[430px]`}>
                                <CardContent className={`flex h-full items-center justify-center`}>
                                        <Image src={card.img} alt={card.alt} width={300} height={80}/>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
             
                </Carousel>
            </div>
        </div>
    )
}