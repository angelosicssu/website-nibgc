"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"

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
                    className="w-full max-w-[10rem] sm:max-w-xs"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index+1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
             
                </Carousel>
            </div>
        </div>
    )
}