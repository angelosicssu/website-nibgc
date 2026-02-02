export const RollingText = () => {
    return (
        <div className="w-full overflow-hidden bg-[#1E00FF] py-0.75">
            <div className="marquee text-white font-bold uppercase">
                {Array.from({ length: 30 }).map((_, i) => (
                    <span key={i}>NIBGC •</span>
                ))}
            </div>
        </div>
    )
}