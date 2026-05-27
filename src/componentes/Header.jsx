import { Link } from 'react-router-dom'
import ThemeDropdown from './Tema.jsx'

function Header(){
    return (
        <header className="bg-zinc-200 dark:bg-[#292828]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 md:px-6">
          <img
            src="/LOGO-SF.png"
            alt="Potenze Iluminacao LED"
            className="h-10 w-auto lg:h-12"
          />

          <nav className="hidden items-center gap-8 text-lg font-medium md:flex">
            <div className="relative inline-block group z-50">
              <Link to="/produtos" className="flex items-center gap-1" className="mr-[10px] no-underline text-[#303030] inline-block relative link-produtos dark:text-[#fffafa]">
                Produtos
                <span className="mt-1 inline-block h-0 w-0 border-l-[7px] border-r-[7px] border-t-8 border-l-transparent border-r-transparent border-t-red-800" />
              </Link>
                <div class="flex flex-col w-50 anim-hov">
                  <a href="#" class="bg-[#d9d9d9] border-t-[#8f1a22]  hover:bg-[#320d0a] hover:text-white">High Bay</a>
                  <a href="#" class="bg-[#d9d9d9] hover:bg-[#320d0a] hover:text-white">Refletores</a>
                  <a href="#" class="bg-[#d9d9d9] hover:bg-[#320d0a] hover:text-white">EX</a>
                  <a href="#" class="bg-[#d9d9d9] hover:bg-[#320d0a] hover:text-white">Industriais</a>
                  <a href="#" class="bg-[#d9d9d9] hover:bg-[#320d0a] hover:text-white">Iluminação Pública</a>
                  <a href="#" class="bg-[#d9d9d9] border-b-[#8f1a22] border-b-2 hover:bg-[#320d0a] hover:text-white">Lineares</a>
                </div>
            </div>
            <Link to="/sobre" className="flex items-center gap-1" className="mr-[10px] no-underline text-[#303030] inline-block relative link-anim dark:text-[#fffafa]">Sobre</Link>
            <Link to="/orcamento" className="flex items-center gap-1" className="mr-[10px] no-underline text-[#303030] inline-block relative link-anim dark:text-[#fffafa]">Orçamento</Link>
            <Link to="/contato" className="flex items-center gap-1" className="mr-[10px] no-underline text-[#303030] inline-block relative link-anim dark:text-[#fffafa]">Contato</Link>
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <Link to="/carrinho">
              <button className="relative text-zinc-900 cursor-pointer dark:text-[#fffafa]" aria-label="Carrinho">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="9" cy="20" r="1.6" />
                  <circle cx="18" cy="20" r="1.6" />
                  <path d="M2 3h3l2.2 10h11l2-7.2H6.1" />
                </svg>
                <span className="absolute -right-1 -top-1 text-sm font-semibold text-red-700">o</span>
              </button>
            </Link>

            
          <ThemeDropdown />
          </div>
        </div>
      </header>
    )
}

export default Header