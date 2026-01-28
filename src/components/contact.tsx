import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "./ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

export const Contact = () => {
    return(
        <Dialog>
        <DialogTrigger asChild>
            <Button className="cursor-pointer" variant="forHeader">Contato</Button>
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