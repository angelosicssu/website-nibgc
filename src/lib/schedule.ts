export type Schedule = {
  name: string
  day: number
  logo: string
  bg: string
}

export const schedules: Schedule[] = [
    {
        name: "Teens",
        day: 5,
        logo: "/images/novaTeens.png",
        bg: "from-[#FF9501] to-[#FF9500]"
    },
    {
        name: "Nova Jovens",
        day: 6,
        logo: "/images/novaJovens.png",
        bg: "from-[#000000] to-[#676767]"
    },
    {
        name: "Culto Familiar",
        day: 0,
        logo: "/images/cultoFamiliar.svg",
        bg: "from-[#0435E7] to-[#466EFF]"
    },
]

export const getNextSchedule = (): Schedule | null => {
    const now = new Date();
    const today = now.getDay();

    let closest: Schedule | null = null;
    let minDiff = Infinity;

    schedules.forEach((schedule) => {
        let diff = schedule.day - today;

        if(diff < 0) {
            diff += 7;
        }

        if (diff < minDiff) {
            minDiff = diff;
            closest = schedule;
        }
    });

    return closest;
}

export const getTimeRemaining = (targetDay:number) => {
    const now = new Date();
    const next = new Date();
    const diff = targetDay - now.getDay();

    if(diff <= 0) {
        next.setDate(now.getDate() + (diff + 7));
    } else {
        next.setDate(now.getDate() + diff);
    }

    next.setHours(19,0,0,0);

    const ms = next.getTime() - now.getTime();

    const hours = Math.floor(ms / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    return {
        days,
        hours: hours % 24
    }
}