import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeDropdown from "./Tema.jsx";

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const atualizarCarrinho = () => {
      const carrinho = JSON.parse(
        localStorage.getItem("potenze_carrinho") || "[]",
      );
      const total = carrinho.reduce(
        (acc, item) => acc + (item.quantidade || 1),
        0,
      );
      setCartCount(total);
    };

    atualizarCarrinho();

    window.addEventListener("cartUpdated", atualizarCarrinho);
    return () => window.removeEventListener("cartUpdated", atualizarCarrinho);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 flex items-center justify-between dark:bg-black/50">
  <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 md:px-6">

    {/* LOGO */}
    <Link to="/" className="cursor-pointer">
      <img
        src="/LOGO-SF.png"
        alt="Potenze Iluminacao LED"
        className="h-10 w-auto lg:h-12"
      />
    </Link>

    {/* NAV DESKTOP (INALTERADO) */}
    <nav className="flex items-center gap-8 text-lg font-medium max-[782px]:hidden">
      <div className="relative inline-block group z-50">
        <Link
          to="/produtos"
          className="flex items-center gap-1 mr-[10px] no-underline text-[#303030] inline-block relative link-produtos dark:text-[#fffafa]"
        >
          Produtos
          <span className="mt-1 inline-block h-0 w-0 border-l-[7px] border-r-[7px] border-t-8 border-l-transparent border-r-transparent border-t-red-800" />
        </Link>

        <div className="flex flex-col w-50 anim-hov">
          <Link to="/produtos?categoria=highbay" className="bg-[#d9d9d9] border-t-[#8f1a22] hover:bg-[#320d0a] hover:text-white">
            High Bay
          </Link>
          <Link to="/produtos?categoria=refletores" className="bg-[#d9d9d9] hover:bg-[#320d0a] hover:text-white">
            Refletores
          </Link>
          <Link to="/produtos?categoria=ex" className="bg-[#d9d9d9] hover:bg-[#320d0a] hover:text-white">
            EX
          </Link>
          <Link to="/produtos?categoria=industriais" className="bg-[#d9d9d9] hover:bg-[#320d0a] hover:text-white">
            Industriais
          </Link>
          <Link to="/produtos?categoria=iluminacao-publica" className="bg-[#d9d9d9] hover:bg-[#320d0a] hover:text-white">
            Iluminação Pública
          </Link>
          <Link to="/produtos?categoria=lineares" className="bg-[#d9d9d9] border-b-[#8f1a22] border-b-2 hover:bg-[#320d0a] hover:text-white">
            Lineares
          </Link>
        </div>
      </div>

      <Link to="/sobre" className="flex items-center gap-1 mr-[10px] no-underline text-[#303030] inline-block relative link-anim dark:text-[#fffafa]">
        Sobre
      </Link>
      <Link to="/orcamento" className="flex items-center gap-1 mr-[10px] no-underline text-[#303030] inline-block relative link-anim dark:text-[#fffafa]">
        Orçamento
      </Link>
      <Link to="/contato" className="flex items-center gap-1 mr-[10px] no-underline text-[#303030] inline-block relative link-anim dark:text-[#fffafa]">
        Contato
      </Link>
    </nav>

    {/* AÇÕES (AGORA SEM max-[782px]:hidden no carrinho) */}
    <div className="flex items-center gap-6">

      {/* CARRINHO (AGORA SEM OCULTAR NO MOBILE) */}
      <Link to="/carrinho">
        <button
          className="relative text-zinc-900 cursor-pointer dark:text-[#fffafa] hover:bg-[#8f1a22] hover:text-white rounded-[10px] p-1 transition-colors"
          aria-label="Carrinho"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="9" cy="20" r="1.6" />
            <circle cx="18" cy="20" r="1.6" />
            <path d="M2 3h3l2.2 10h11l2-7.2H6.1" />
          </svg>

          <span className="absolute -right-2 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9f1523] px-1 text-[10px] font-bold text-white">
            {cartCount}
          </span>
        </button>
      </Link>

      {/* THEME (DESKTOP) */}
      <ThemeDropdown  />

      {/* HAMBURGER (só mobile continua) */}
      <button
        className="hidden max-[782px]:block text-zinc-900 dark:text-[#fffafa]"
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="currentColor"
        >
          <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
        </svg>
      </button>

    </div>
  </div>
</header>

{/* SIDEBAR (INALTERADA, SÓ GARANTINDO THEME DENTRO) */}
{menuOpen && (
  <div className="fixed inset-0 z-[60] md:hidden">
    <div
      className="absolute inset-0 bg-black/60"
      onClick={() => setMenuOpen(false)}
    />

    <aside className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-xl dark:bg-[#303030]">

      <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-700">
        <img
          src="/LOGO-SF.png"
          alt="Potenze Iluminacao LED"
          className="h-9 w-auto"
        />

        <button
          onClick={() => setMenuOpen(false)}
          className="rounded-full p-1 text-zinc-900 dark:text-[#fffafa]"
          aria-label="Fechar menu"
        >
          ✕
        </button>
      </div>

      <nav className="mt-6 flex flex-col gap-3 text-base font-medium text-zinc-900 dark:text-[#fffafa]">
        <Link to="/produtos" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-[#8f1a22] hover:text-white">
          Produtos
        </Link>
        <Link to="/sobre" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-[#8f1a22] hover:text-white">
          Sobre
        </Link>
        <Link to="/orcamento" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-[#8f1a22] hover:text-white">
          Orçamento
        </Link>
        <Link to="/contato" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-[#8f1a22] hover:text-white">
          Contato
        </Link>
      </nav>

      {/* THEME DENTRO DA SIDEBAR (mantido) */}
      

    </aside>
  </div>
)}
    </>
  );
}

export default Header;
