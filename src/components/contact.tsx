import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "./ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

export const Contact = () => {
    return(
        <Dialog>
        <DialogTrigger asChild>
            <div className="bg-[#FDA402] px-8 py-2 rounded-lg cursor-pointer hover:bg-blue-800 duration-300">
                <p className="uppercase font-bold text-xl text-white">Contato</p>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Formas de Contato</DialogTitle>
            <DialogDescription>
                Olá, tudo bem? Para entrar em contato com a secretaria <br/>
                Telefone: (92) 99173-5298 <br/>
                Email: secretarianibgc@gmail.com <br/>
                Instagram: nibgrandecircular <br/>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}