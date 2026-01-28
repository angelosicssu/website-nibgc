import { AspectRatio } from "./ui/aspect-ratio"

export const VideoSection = () => {
    return (
        <AspectRatio ratio={16 / 9} className="w-full shrink-0">
            <iframe
                src="https://www.youtube.com/watch?v=u9SPZFzS1pg"
                title="Video"
                className="h-full w-full rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </AspectRatio>
    )
}