import Image from "next/image";

export default function NextSchedule() {
    return(
        <div className="bg-linear-to-r from-[#0435E7] to-[#466EFF] flex justify-between items-center py-5 px-7">
            <div className="text-white uppercase font-[Roboto] font-bold text-4xl">
                <p>Próxima</p>
                <p>Programação</p>
            </div>
            <div>
                <Image 
                src="/image/visualIdentity/cultoFamiliar.png"
                width={200}
                height={100}
                alt="Logo Culto Familiar"
                />
            </div>
            <div className="text-black text-5xl font-[Roboto] font-bold bg-white py-7 px-11 rounded-2xl">
                <p>1d 10h</p>
            </div>
        </div>
    )
}