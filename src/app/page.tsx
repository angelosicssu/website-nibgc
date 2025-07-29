import Header from "./components/Header";
import Button from "./components/Button";

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="bg-[url('/image/background.jpg')] h-200 w-[100%] flex justify-between items-center px-20 bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col">
          <p className="text-8xl font-bold uppercase text-white">Seja</p>
          <p className="stroke-text text-8xl font-bold uppercase mb-10">Bem Vindo</p>
          <Button text="Nossa Igreja"/>
        </div>
        <div className="flex flex-col items-center gap-5 text-5xl text-white uppercase font-bold">
          <p>Título do Vídeo</p>
          <div className="border-4 rounded-sm">
            <iframe width="645" height="400" allowFullScreen src="https://www.youtube.com/embed/Q3keV9UTZZE?si=lEJZpwnSTsE-f6b0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
