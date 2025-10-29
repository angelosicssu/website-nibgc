interface CardProps {
    category: String,
    title: String
}

export default function Card({ category, title } : CardProps) {
    return (
        <div className="flex p-5 flex-col bg-[#EDEDED] shadow-xl/30 rounded-2xl w-[500px] h-[300px] font-[Roboto]">
            <p className="flex text-[#0429CD] underline decoration-[3px] underline-offset-8 font-bold text-2xl justify-center mb-1">{category}</p>
            <span className="flex h-[3px] w-full bg-[#CDCDCD] font-normal"/>
            <div className="flex flex-col gap-5 w-full h-[170px] justify-center items-center bg-white mt-5 rounded-[5px] border-1 border-[#ABABAB]">
                <p className="font-black ">{title}</p>
                <p className="text-xl">Período: dd/mm/yyyy - dd/mm/yyyy</p>
                <div className="hover:cursor-pointer bg-[#0429CD] px-5 py-2 rounded-sm">
                    <p className="text-white">Baixar Meditação</p>
                </div>
            </div>
        </div>
    )
}