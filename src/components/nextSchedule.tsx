"use client"

import Image from 'next/image';
import cultoFamiliar from '../../public/images/cultoFamiliar.svg';
import { useEffect, useState } from 'react';
import { getNextSchedule, getTimeRemaining } from '@/lib/schedule';
import type { Schedule } from "@/lib/schedule"

export const NextSchedule = () => {

    const [time, setTime] = useState({days: 0, hours: 0});
    const [schedule, setSchedule] = useState<Schedule | null>(null);

    useEffect(() => {
        const next = getNextSchedule();
        if (!next) return;
        setSchedule(next);

        const update = () => {
            const remaining = getTimeRemaining(next.day);
            setTime(remaining);
        }

        update();

        const interval = setInterval(update, 60000);

        return () => clearInterval(interval);
    }, []);

    if(!schedule) return null;

    return(
        <div className={`flex bg-linear-to-r ${schedule.bg} p-8 items-center justify-between`}>
            <div className="text-white font-black uppercase">
                <p className="text-5xl">Próxima <br/> Programação</p>
            </div>

            <div>
                <Image src={schedule.logo} width={250} height={20} alt='Logo Culto'/>
            </div>

            <div className="bg-white py-8 px-12 font-bold rounded-sm">
                <p className="text-5xl">{time.days}d {time.hours}h</p>
            </div>
        </div>
    )
}