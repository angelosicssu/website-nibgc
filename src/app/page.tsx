import { ButtonVideo } from "@/components/buttonVideo";
import { Header } from "@/components/header";
import { VideoSection } from "@/components/videoSection";

export default function Home() {
  return (
    <div>

      <section className="flex justify-around h-[700px] items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/video.jpg')"}}>
        <div className="flex w-50% flex-col text-white font-black uppercase gap-5">
          <div>
            <p className="text-8xl">Seja</p>
            <p className="text-8xl text-transparent" style={{ WebkitTextStroke: "3px #FFF" }}>Bem Vindo</p>
          </div>
          <ButtonVideo/>
        </div>
        <div className="flex flex-col justify-center items-center w-[40%] gap-3">
          <p className="text-white uppercase font-bold text-5xl">Título do Vídeo</p>
          <VideoSection/>
        </div>
      </section>
    </div>
  );
}
