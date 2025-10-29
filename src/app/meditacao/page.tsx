"use client"
import Card from "@/components/Card";
import { useState } from "react";

export default function Meditacao() {

    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const categories = [
        "Todos",
        "Familiar",
        "Nova Teens",
        "Nova Baby",
        "Nova Infantil",
        "Nova Kids",
    ];

    const cards = [
        { id: 1, category: "Familiar", title: "Titulo Especial" },
        { id: 1, category: "Nova Teens", title: "Titulo Especial" },
        { id: 1, category: "Nova Baby", title: "Titulo Especial" },
        { id: 1, category: "Nova Infantil", title: "Titulo Especial" },
        { id: 1, category: "Nova Kids", title: "Titulo Especial" },
        { id: 1, category: "Familiar", title: "Titulo Especial" },
        { id: 1, category: "Nova Teens", title: "Titulo Especial" },
        { id: 1, category: "Nova Baby", title: "Titulo Especial" },
        { id: 1, category: "Nova Infantil", title: "Titulo Especial" },
        { id: 1, category: "Nova Kids", title: "Titulo Especial" },
        { id: 1, category: "Familiar", title: "Titulo Especial" },
        { id: 1, category: "Nova Teens", title: "Titulo Especial" },
        { id: 1, category: "Nova Baby", title: "Titulo Especial" },
        { id: 1, category: "Nova Infantil", title: "Titulo Especial" },
        { id: 1, category: "Nova Kids", title: "Titulo Especial" }
    ];

    const filteredCards =
        selectedCategory === "Todos" ? cards : cards.filter((card) => card.category === selectedCategory);

    return(
        <main className="flex p-10 flex-col">
            <div className="flex flex-row justify-center gap-10 font-bold uppercase text-[21px]">
                {categories.map((cat) => (
                    <div
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`flex py-2 px-5 rounded-xs cursor-pointer transition-all duration-200 ${selectedCategory === cat ? "bg-blue-700 text-white" : "hover:bg-blue-700 hover:text-white"}`}

                    >
                        <p>{cat}</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {filteredCards.map((card) => (
                    <Card key={card.id} category={card.category} title={card.title}/>
                ))}
            </div>
        </main>
    )
}