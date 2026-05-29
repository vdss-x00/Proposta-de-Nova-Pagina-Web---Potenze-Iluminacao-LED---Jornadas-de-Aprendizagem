import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function AvaliaProduto() {
  const location = useLocation();
  const product = location.state?.product;
  const [potenciaSelecionada, setPotenciaSelecionada] = useState(
    product?.potencias?.[0] || "",
  );
  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(1);

  const adicionarAoCarrinho = () => {
    const carrinhoAtual = JSON.parse(
      localStorage.getItem("potenze_carrinho") || "[]",
    );
    const itemId = `${product.nome}-${potenciaSelecionada}`;
    const itemExistente = carrinhoAtual.find((item) => item.id === itemId);

    if (itemExistente) {
      const carrinhoAtualizado = carrinhoAtual.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantidade: item.quantidade + quantidadeSelecionada,
            }
          : item,
      );
      localStorage.setItem(
        "potenze_carrinho",
        JSON.stringify(carrinhoAtualizado),
      );
    } else {
      const novoItem = {
        id: `${product.nome}-${potenciaSelecionada}`,
        nome: product.nome,
        modelo: product.modelo,
        imagem: product.imagem,
        potencia: potenciaSelecionada,
        quantidade: quantidadeSelecionada,
      };
      localStorage.setItem(
        "potenze_carrinho",
        JSON.stringify([...carrinhoAtual, novoItem]),
      );
    }

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const especificacoes = [
    "Potência",
    "Lúmens",
    "Frequência",
    "Temperatura de Cor",
    "Garantia",
    "Ângulo de abertura do facho",
    "Grau de Proteção",
    "Grau de Resistência",
  ];

  if (!product) {
    return (
      <div className="min-h-screen bg-zinc-100 px-6 py-12 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa]">
        <div className="mx-auto max-w-4xl rounded-2xl border border-red-700 bg-white p-8 shadow-sm dark:bg-[#1f1f1f]">
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Produto não encontrado.
          </p>
          <Link
            to="/produtos"
            className="mt-6 inline-flex rounded-full bg-[#9f1523] px-5 py-2 text-white"
          >
            Voltar aos produtos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-10 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa]">
      <div className="mx-auto max-w-6xl">
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-3xl border border-red-700 bg-white p-6 shadow-sm dark:bg-[#1f1f1f]">
            <div className="flex h-full min-h-[360px] w-full items-center justify-center rounded-2xl bg-zinc-100 p-6 dark:bg-[#303030]">
              <img
                src={product.imagem}
                alt={product.nome}
                className="h-full w-full object-contain"
              />
            </div>
          </section>

          <section className="rounded-3xl border border-red-700 bg-white p-6 shadow-sm dark:bg-[#1f1f1f]">
            <div className="flex h-full flex-col justify-between gap-6 text-center">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-[#fffafa]">
                  {product.nome}
                </h1>
                <h2 className="text-xl font-semibold text-zinc-600 dark:text-zinc-300">
                  {product.modelo}
                </h2>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <div className=" inline-block p-1 bg-zinc-100 dark:bg-[#303030]">
                    <p>{product.garantia}</p>
                  </div>

                  <div className=" inline-block p-1 bg-zinc-100 dark:bg-[#303030]">
                    <p>Proteção IP69K</p>
                  </div>
                </div>
              </div>

              <div className="w-full rounded-2xl bg-zinc-100 p-4 text-left dark:bg-[#303030]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-{currentColor}">
                  Potências
                </p>
                <div className="mt-3 grid w-full grid-cols-3 gap-2">
                  {product.potencias?.map((potencia) => (
                    <button
                      key={potencia}
                      type="button"
                      onClick={() => setPotenciaSelecionada(potencia)}
                      className={`rounded-full border border-[#8f1a22] px-3 py-1 text-sm font-medium transition-colors ${
                        potenciaSelecionada === potencia
                          ? "bg-[#8f1a22] text-white"
                          : "bg-transparent text-[#8f1a22]"
                      }`}
                    >
                      {potencia}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-2 flex w-full flex-col items-start gap-4">
                <p className="text-sm italic text-zinc-600 dark:text-zinc-300">
                  Em estoque
                </p>

                <div className="flex w-full flex-wrap items-center justify-between gap-4">
                  {/* 1. Label de Quantidade (Lado Esquerdo) */}
                  <label className="flex w-full max-w-xs items-center justify-between rounded-full border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-[#1f1f1f]">
                    <span className="text-zinc-700 dark:text-zinc-300">
                      Quantidade:
                    </span>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={quantidadeSelecionada}
                      onChange={(event) => {
                        const value = Number(event.target.value);
                        setQuantidadeSelecionada(
                          Number.isNaN(value)
                            ? 1
                            : Math.min(Math.max(value, 1), 100),
                        );
                      }}
                      className="w-20 rounded-full border border-zinc-300 bg-white px-3 py-2 text-right text-sm text-zinc-900 outline-none focus:border-[#9f1523] focus:ring-2 focus:ring-[#9f1523]/20"
                    />
                  </label>

                  {/* 2. Botão Ficha Técnica (Lado Direito) */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#8f1a22] px-4 py-2 text-sm font-medium text-white hover:bg-[#7a1019]"
                  >
                    <span>Ficha Técnica</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="currentColor"
                    >
                      <path d="M560-570.67v-54.66q33-14 67.5-21t72.5-7q26 0 51 4t49 10v50.66q-24-9-48.5-13.5t-51.5-4.5q-38 0-73 9.5t-67 26.5Zm0 220V-406q33-13.67 67.5-20.5t72.5-6.83q26 0 51 4t49 10v50.66q-24-9-48.5-13.5t-51.5-4.5q-38 0-73 9t-67 27Zm0-110v-54.66q33-14 67.5-21t72.5-7q26 0 51 4t49 10v50.66q-24-9-48.5-13.5t-51.5-4.5q-38 0-73 9.5t-67 26.5Zm-308 154q51.38 0 100.02 11.84Q400.67-283 448-259.33v-416q-43.67-28-94.08-43t-101.92-15q-37.33 0-73.5 8.66Q142.33-716 106.67-702v421.33Q139-294 176.83-300.33q37.84-6.34 75.17-6.34Zm262.67 47.34q48-23.67 94.83-35.5 46.83-11.84 98.5-11.84 37.33 0 75.83 6t69.5 16.67v-418q-33.66-16-70.71-23.67-37.05-7.66-74.62-7.66-51.67 0-100.67 15t-92.66 43v416ZM481.33-160q-50-38-108.66-58.67Q314-239.33 252-239.33q-38.36 0-75.35 9.66-36.98 9.67-72.65 25-22.4 11-43.2-2.33Q40-220.33 40-245.33v-469.34q0-13.66 6.5-25.33Q53-751.67 66-758q43.33-21.33 90.26-31.67Q203.19-800 252-800q61.33 0 119.5 16.33 58.17 16.34 109.83 49.67 51-33.33 108.5-49.67Q647.33-800 708-800q48.58 0 95.29 10.33Q850-779.33 893.33-758q13 6.33 19.84 18 6.83 11.67 6.83 25.33v469.34q0 26.26-21.5 39.96t-43.17.7q-35-16-71.98-25.33-36.99-9.33-75.35-9.33-62 0-119.33 21-57.34 21-107.34 58.33Zm-204-330.67Z" />
                    </svg>
                  </a>
                </div>

                {/* 3. Botões de Ação Inferiores */}
                <div className="mx-auto mt-2 flex w-full max-w-xl flex-wrap justify-center gap-2">
                  <Link
                    to="/produtos"
                    className="rounded-full border border-red-700 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-700 hover:text-white"
                  >
                    Voltar aos produtos
                  </Link>

                  <button
                    onClick={adicionarAoCarrinho}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-red-700 bg-[#9f1523] px-4 py-2 text-sm font-semibold text-white hover:bg-[#7a1019]"
                  >
                    Adicionar ao Carrinho
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <circle cx="9" cy="20" r="1.6" />
                      <circle cx="18" cy="20" r="1.6" />
                      <path d="M2 3h3l2.2 10h11l2-7.2H6.1" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 self-start rounded-lg bg-[#8f1a22] px-4 py-2 text-sm font-medium text-white hover:bg-[#7a1019]"
          >
            <span>Ficha Técnica</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="currentColor"
            >
              <path d="M560-570.67v-54.66q33-14 67.5-21t72.5-7q26 0 51 4t49 10v50.66q-24-9-48.5-13.5t-51.5-4.5q-38 0-73 9.5t-67 26.5Zm0 220V-406q33-13.67 67.5-20.5t72.5-6.83q26 0 51 4t49 10v50.66q-24-9-48.5-13.5t-51.5-4.5q-38 0-73 9t-67 27Zm0-110v-54.66q33-14 67.5-21t72.5-7q26 0 51 4t49 10v50.66q-24-9-48.5-13.5t-51.5-4.5q-38 0-73 9.5t-67 26.5Zm-308 154q51.38 0 100.02 11.84Q400.67-283 448-259.33v-416q-43.67-28-94.08-43t-101.92-15q-37.33 0-73.5 8.66Q142.33-716 106.67-702v421.33Q139-294 176.83-300.33q37.84-6.34 75.17-6.34Zm262.67 47.34q48-23.67 94.83-35.5 46.83-11.84 98.5-11.84 37.33 0 75.83 6t69.5 16.67v-418q-33.66-16-70.71-23.67-37.05-7.66-74.62-7.66-51.67 0-100.67 15t-92.66 43v416ZM481.33-160q-50-38-108.66-58.67Q314-239.33 252-239.33q-38.36 0-75.35 9.66-36.98 9.67-72.65 25-22.4 11-43.2-2.33Q40-220.33 40-245.33v-469.34q0-13.66 6.5-25.33Q53-751.67 66-758q43.33-21.33 90.26-31.67Q203.19-800 252-800q61.33 0 119.5 16.33 58.17 16.34 109.83 49.67 51-33.33 108.5-49.67Q647.33-800 708-800q48.58 0 95.29 10.33Q850-779.33 893.33-758q13 6.33 19.84 18 6.83 11.67 6.83 25.33v469.34q0 26.26-21.5 39.96t-43.17.7q-35-16-71.98-25.33-36.99-9.33-75.35-9.33-62 0-119.33 21-57.34 21-107.34 58.33Zm-204-330.67Z" />
            </svg>
          </a>
        </div>

        <h1 className="mt-8 text-4xl font-bold">Especificações do Produto</h1>

        <div className="mt-8 grid overflow-hidden rounded-none border border-black">
          {especificacoes.map((item, index) => (
            <div
              key={item}
              className={`grid grid-cols-2 border-b border-black last:border-b-0 ${
                index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f6f6f6]"
              }`}
            >
              <div className="border-r border-black px-4 py-3 text-sm font-medium text-zinc-900">
                {item}
              </div>
              <div className="px-4 py-3 text-sm text-zinc-600"></div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex w-full max-w-4xl items-center justify-between gap-6">
            <Link
              to="/produtos"
              className="inline-flex rounded-full border border-red-700 px-5 py-2.5 text-sm font-semibold text-{currentColor} hover:bg-red-700 hover:text-white"
            >
              Voltar aos produtos
            </Link>

            <button
              onClick={adicionarAoCarrinho}
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#9f1523] px-6 py-3 text-white transition-colors hover:bg-[#7a1019]"
            >
              Adicionar ao Carrinho
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="9" cy="20" r="1.6" />
                <circle cx="18" cy="20" r="1.6" />
                <path d="M2 3h3l2.2 10h11l2-7.2H6.1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvaliaProduto;
