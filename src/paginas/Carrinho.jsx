import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = useState(() => {
    const armazenado = localStorage.getItem("potenze_carrinho");
    return armazenado ? JSON.parse(armazenado) : [];
  });

  const carregarCarrinho = () => {
    const armazenado = JSON.parse(
      localStorage.getItem("potenze_carrinho") || "[]",
    );
    setItensCarrinho(armazenado);
  };

  useEffect(() => {
    const atualizarCarrinho = () => carregarCarrinho();
    window.addEventListener("cartUpdated", atualizarCarrinho);

    return () => window.removeEventListener("cartUpdated", atualizarCarrinho);
  }, []);

  const removerItem = (id) => {
    const atualizado = itensCarrinho.filter((item) => item.id !== id);
    localStorage.setItem("potenze_carrinho", JSON.stringify(atualizado));
    setItensCarrinho(atualizado);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  if (itensCarrinho.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa]">
        <div className="min-h-screen w-full flex flex-col mx-auto max-w-6xl py-12 px-6 text-center justify-center items-center">
          <h1 className="text-5xl font-bold">Seu carrinho está vazio</h1>
          <h3 className="text-2xl mt-4 text-zinc-600 dark:text-zinc-400">
            Navegue pela nossa seção de produtos e adicione um item ao seu
            carrinho.
          </h3>
          <Link
            to="/produtos"
            className="mt-6 rounded-lg bg-[#9f1523] px-6 py-3 text-white hover:bg-[#7a1019] transition-colors"
          >
            Ver Produtos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-10 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa]">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Itens do carrinho</h1>

        <div className="mt-6 w-full rounded-2xl border-2 border-[#8f1a22] p-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {itensCarrinho.map((item) => (
              <div
                key={item.id}
                className="relative min-h-[220px] w-full rounded-2xl border-2 border-dashed border-[#8f1a22] bg-transparent p-4"
              >
                <button
                  onClick={() => removerItem(item.id)}
                  className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded bg-[#8f1a22] text-sm font-bold text-white cursor-pointer hover:bg-[#7a1019] transition-colors"
                  aria-label="Remover item"
                >
                  X
                </button>

                <div className="flex h-full flex-col justify-between text-{currentColor}">
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="mx-auto h-24 w-full object-contain"
                  />
                  <div className="mt-3">
                    <p className="text-lg font-bold text-zinc-900 dark:text-[#fffafa]">
                      {item.nome}
                    </p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {item.modelo}
                    </p>
                    {item.potencia && (
                      <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Potência:{" "}
                        <span className="text-[#8f1a22] font-semibold dark:text-red-400">
                          {item.potencia}
                        </span>
                      </p>
                    )}
                    <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-[#fffafa]">
                      Quantidade: {item.quantidade}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/produtos"
              className="flex min-h-[220px] w-full flex-col items-center justify-center rounded-2xl border-2 border-[#ADA5A5] border-dashed bg-transparent px-4 py-6 text-center cursor-pointer"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ADA5A5] text-2xl font-bold text-[#ADA5A5]">
                +
              </div>
              <p className="mt-4 text-base font-semibold text-[#ADA5A5]">
                Adicionar mais um item
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/orcamento">
            <button className="rounded-lg bg-[#9f1523] px-6 py-3 text-white hover:bg-[#7a1019] transition-colors">
              Prosseguir para o Orçamento
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Carrinho;
