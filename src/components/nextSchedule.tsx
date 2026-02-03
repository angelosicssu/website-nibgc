import Image from 'next/image';
import cultoFamiliar from '../../public/images/cultoFamiliar.svg';

export const NextSchedule = () => {
    return(
        <div className="flex bg-linear-to-r from-[#0435E7] to-[#466EFF] p-8 items-center justify-between">
            <div className="text-white font-black uppercase">
                <p className="text-5xl">Próxima <br/> Programação</p>
            </div>

            <div>
                <Image src={cultoFamiliar} width={250} height={20} alt='Logo Culto'/>
            </div>

            <div className="bg-white py-8 px-12 font-bold rounded-sm">
                <p className="text-5xl">1d 10h</p>
            </div>
        </div>
    )
}