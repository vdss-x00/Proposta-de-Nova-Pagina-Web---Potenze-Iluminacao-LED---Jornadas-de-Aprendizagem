import { Link } from 'react-router-dom'

function Header(){
    return (
        <header className="bg-zinc-100">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 md:px-6">
          <img
            src="/LOGO-SF.png"
            alt="Potenze Iluminacao LED"
            className="h-10 w-auto lg:h-12"
          />

          <nav className="hidden items-center gap-8 text-lg font-medium md:flex">
            <Link to="/produtos" className="flex items-center gap-1">
              Produtos
              <span className="mt-1 inline-block h-0 w-0 border-l-[7px] border-r-[7px] border-t-[8px] border-l-transparent border-r-transparent border-t-red-800" />
            </Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/orcamento">Orçamento</Link>
            <Link to="/contato">Contato</Link>
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <Link to="/carrinho">
              <button className="relative text-zinc-900 cursor-pointer" aria-label="Carrinho">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="9" cy="20" r="1.6" />
                  <circle cx="18" cy="20" r="1.6" />
                  <path d="M2 3h3l2.2 10h11l2-7.2H6.1" />
                </svg>
                <span className="absolute -right-1 -top-1 text-sm font-semibold text-red-700">o</span>
              </button>
            </Link>

            <div className="flex items-center gap-3 text-lg">
              <span>Tema:</span>
              <button
                className="rounded-xl border border-zinc-500 px-2.5 py-1.5 text-zinc-900"
                aria-label="Alternar tema"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2.3M12 19.7V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.3M19.7 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
                </svg>
              </button>
              <span className="mt-1 inline-block h-0 w-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-black" />
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header