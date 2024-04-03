import Link from "next/link";

interface NavBarProps{
    active: "dashboard" | "movimentacoes" | "categorias"
}

export default function NavBar(props: NavBarProps){

    const { active } = props
    const classActive = "border-b-4 border-pink-500 pb-2" 

    return(
        <nav className="flex justify-between items-center bg-slate-900 w-full px-5 py-3">
            <h1 className="text-3xl font-bold">Cash Flow Pro</h1>
            <ul className="flex gap-20">
            <li className={active == "dashboard" ? classActive: ""}><Link href="/">dashboard</Link></li>
            <li className={active == "movimentacoes" ? classActive: ""}><Link href="/movimentacoes">movimentações</Link></li>
            <li className={active == "categorias" ? classActive: ""}><Link href="/categorias">categorias</Link></li>
            </ul>
            <div className="w-14 rounded-full overflow-hidden">
            <img src="https://conteudo.imguol.com.br/c/esporte/de/2023/12/30/cristiano-ronaldo-comemora-apos-vitoria-do-al-nassr-contra-o-al-taawoun-pelo-sauditao-1703981349096_v2_3x4.jpg" alt="avatar do usuário" />
            </div>
      </nav>
    )
}