import { ButtonVideo } from "@/components/buttonVideo";
import { Header } from "@/components/header";
import { RollingText } from "@/components/rollingText";
import { Button } from "@/components/ui/button";
import { VideoSection } from "@/components/videoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <section className="flex justify-around h-[700px] items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/video.jpg')"}}>
        <div className="flex w-50% flex-col text-white font-black uppercase gap-5">
          <div>
            <p className="text-8xl">Seja</p>
            <p className="text-8xl text-transparent" style={{ WebkitTextStroke: "3px #FFF" }}>Bem Vindo</p>
          </div>
          <ButtonVideo title="Nossa Igreja"/>
        </div>
        <div className="flex flex-col justify-center items-center w-[40%] gap-3">
          <p className="text-white uppercase font-bold text-5xl">Título do Vídeo</p>
          <VideoSection/>
        </div>
      </section>

      <RollingText/>

      <section className="flex justify-between py-10 px-15">
        <div className="relative">
          <div className="absolute inset-0 z-0 w-[500px] h-[480px] bg-[#1F0F82]"/>
          <div className="relative z-10 p-5">
            <Image
              src="/images/whoare.png"
              alt="Imagem Quem Somos"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="w-2 h-150 bg-black"/>
        <span className="w-2 h-full bg-black"/>
        <div className="flex flex-col items-center">
          <p className="text-5xl font-black text-[#292B4B] py-2 px-3 uppercase bg-[linear-gradient(transparent_50%,#77CAF8_50%)] drop-shadow-[6px_6px_8px_rgba(0,0,0,0.35)]">Quem Somos?</p>
          <div/>
          <div className="flex text-2xl uppercase gap-5 flex-col py-10">
            <p>Há mais de 10 anos, a nova igreja batista grande <br/>
            circular vem construindo uma história na cidade <br/> de manaus.
            </p>
            <p>
              Uma igreja diferenciada, alicerçada na palavra de <br/>  Deus e no amor,
              que através de suas programações dinâmicas, <br/> tem alcançado inúmeras vidas.
            </p>
            <p>
              A NIBGC está de braços abertos para você! Venha <br/>
              nos conhecer e fazer parte desta grande e linda <br/> família.
            </p>
          </div>
          <div className="flex gap-20">
            <Button variant="outline" className="flex text-xl  cursor-pointer py-7 px-10 font-semibold">SEJA BEM VINDO</Button>
            <Button variant="outline" className="flex text-xl  cursor-pointer py-7 px-10 font-semibold">NOVO AQUI?</Button>
          </div>
          
        </div>
      </section>
      
    </div>
  );
}
