import Header from "./components/Header";
import Button from "./components/Button";
import { FaPlayCircle } from "react-icons/fa";
import Image from "next/image";
import NextSchedule from "./components/NextSchedule";
import TextEffect from "./components/TextEffect";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    // main screen
    <main>
      <Header/>
      <div className="bg-[url('/image/others/photo2.jpg')] h-200 w-[100%] flex justify-between items-center px-20 bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col">
          <p className="text-8xl font-bold uppercase text-white">Seja</p>
          <p className="stroke-text text-8xl font-bold uppercase mb-10">Bem Vindo</p>
          <Button text="Nossa Igreja" variant="primary" icon={<FaPlayCircle size={30}/>}/>
        </div>
        <div className="flex flex-col items-center gap-5 text-5xl text-white uppercase font-bold">
          <p>Título do Vídeo</p>
          <div className="border-10 rounded-2xl">
            <iframe width="645" height="400" allowFullScreen src="https://www.youtube.com/embed/lDH7qc__b1c?si=-uY4hRp4cUdEwBfp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
      <TextEffect/>
      <div className="flex py-15 justify-around items-center">
        <div className="flex">
          <span className="flex w-[500px] h-[500px] bg-[#1F0F82] shadow-xl/30 rounded-xs"></span>
          <Image src="/image/bg02.png" width={500} height={500} alt="Image" className="absolute m-8 shadow-xl/30"/>
        </div>        
        <span className="flex w-2 h-[600px] bg-black absolute"></span>
        <div className="flex flex-col uppercase gap-10 items-center font-bold">
          <p className="relative font-extrabold text-5xl text-[#292B4B] inline-block">
            <span className="relative z-10">Quem Somos</span>
            <span className="absolute left-[-9] bottom-[-6] w-[360] h-1/2 bg-[#77CAF8] shadow-xl/30"></span>
          </p>
          <div className="flex flex-col gap-5 text-2xl items-center">
            <p>Há mais de 10 anos, a Nova Igreja Batista Grande <br></br> Circular vem construindo uma história na <br></br>
              cidade de Manaus.
            </p>
            <p>Uma igreja diferenciada, alicerçada na <br></br> palavra de Deus e no amor, que através de suas <br></br>programações
              dinâmicas, tem alcançado <br></br> inúmeras vidas.
            </p>
            <p>A NIBGC está de braços abertos para você! Venha <br></br> nos conhecer e fazer parte desta grande <br></br>
              e linda família.
            </p>
            <div className="flex w-full justify-between my-10">
              <Button text="Seja Bem Vindo" variant="secondary" />
              <Button text="Novo Aqui?" variant="secondary" />
            </div>
          </div>

        </div>
      </div>

      <div>
        <NextSchedule/>
      </div>

      <div className="flex items-center justify-around py-10">
        <div className="text-black uppercase font-bold text-5xl">
          <p className="text-7xl">Conheça</p>
          <p className="text-7xl">Nossas</p>
          <p>Programações</p>
        </div>
        <div>
          <Carousel/>
        </div>
      </div>

      <div className="bg-[url('/image/others/bg-app.png')] flex items-center justify-around p-10">
        <div>
          <p>Fotos do Aplicativo</p>
        </div>
        <div className="flex text-white flex-col gap-5">
          <p className="text-5xl font-bold uppercase">Baixe o App</p>
          <p className="text-4xl font-bold uppercase bg-[#FDC301] py-1 px-2">Nib Grande Circular</p>
          <p>Texto Texto Texto Texto Texto Texto Texto</p>
        </div>
      </div>
    </main>
  );
}
