import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { VideoSection } from "@/components/videoSection";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header/>
      <section className="flex justify-between mx-auto max-w-6xl">
        <div className="flex w-50% bg-blue-500 flex-col">
          <p>Seja</p>
          <p>Bem Vindo</p>
          <Button variant='secondary'>Nossa Igreja</Button>
        </div>
        <div className="flex flex-col justify-center items-center bg-red-400 w-[50%]">
          <p>Título do Vídeo</p>
          <VideoSection/>
        </div>
      </section>
    </main>
  );
}
