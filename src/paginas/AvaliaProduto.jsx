import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function AvaliaProduto() {
  const location = useLocation();
  const product = location.state?.product;
  const [quantidade, setQuantidade] = useState(1);

  const adicionarAoCarrinho = () => {
    const quantidadeSelecionada = Math.min(Math.max(Number(quantidade) || 1, 1), 100);
    const carrinhoAtual = JSON.parse(
      localStorage.getItem("potenze_carrinho") || "[]",
    );
    const itemExistente = carrinhoAtual.find(
      (item) => item.id === product.nome,
    );

    if (itemExistente) {
      const carrinhoAtualizado = carrinhoAtual.map((item) =>
        item.id === product.nome
          ? { ...item, quantidade: item.quantidade + quantidadeSelecionada }
          : item,
      );
      localStorage.setItem(
        "potenze_carrinho",
        JSON.stringify(carrinhoAtualizado),
      );
    } else {
      const novoItem = {
        id: product.nome,
        nome: product.nome,
        modelo: product.modelo,
        imagem: product.imagem,
        quantidade: quantidadeSelecionada,
      };
      localStorage.setItem(
        "potenze_carrinho",
        JSON.stringify([...carrinhoAtual, novoItem]),
      );
    }

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const especificacoes = product.especificacoes || [];
  const detalhes = product.detalhes || [];
  const destaques = product.destaques || [];

  if (!product) {
    return (
      <div className="min-h-screen bg-zinc-100 px-6 py-12 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa]">
        <div className="mx-auto max-w-4xl rounded-2xl border border-red-700 bg-white p-8 shadow-sm dark:bg-[#1f1f1f]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.95fr] items-start">
            <section className="rounded-[32px] border border-red-700 bg-white p-6 shadow-sm">
              <Link
                to="/produtos"
                className="mt-6 inline-flex rounded-full bg-[#9f1523] px-5 py-2 text-white"
              >
                Voltar aos produtos
              </Link>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-10 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.95fr] items-start">
          <section className="rounded-[32px] border border-red-700 bg-white p-6 shadow-sm">
            <div className="h-[320px] overflow-hidden rounded-[28px] bg-zinc-100 p-6">
              <img
                src={product.imagem}
                alt={product.nome}
                className="h-full w-full object-contain"
              />
            </div>
          </section>

          <section className="space-y-6 rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-[#1f1f1f]">
            <h1 className="text-4xl font-bold text-center">{product.nome}</h1>
            <h2 className="text-xl font-semibold text-center text-zinc-600">
              {product.modelo}
            </h2>

            {detalhes.length > 0 && (
              <div className="mx-auto flex w-full max-w-xl flex-wrap justify-center gap-2">
                {detalhes.map((detalhe) => (
                  <span
                    key={detalhe}
                    className="rounded-full border border-red-700 bg-red-50 px-4 py-2 text-sm font-medium text-red-900 shadow-sm dark:border-red-400/50 dark:bg-red-950/20 dark:text-red-200"
                  >
                    {detalhe}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-col items-center justify-center gap-[4px] sm:flex-row">
              <label className="flex w-full max-w-xs items-center justify-between rounded-full border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-[#1f1f1f]">
                <span>Quantidade:</span>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={quantidade}
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    setQuantidade(Number.isNaN(value) ? 1 : Math.min(Math.max(value, 1), 100));
                  }}
                  className="w-20 rounded-full border border-zinc-300 bg-white px-3 py-2 text-right text-sm text-zinc-900 outline-none focus:border-[#9f1523] focus:ring-2 focus:ring-[#9f1523]/20"
                />
              </label>
            </div>

            <div className="mx-auto flex w-full max-w-xl flex-wrap justify-center gap-2">
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
          </section>
          
        </div>

        <h1 className="mt-2 text-4xl font-bold mt-5">
          Especificações do Produto
        </h1>

        <div className="mt-8 grid overflow-hidden rounded-none border border-black">
          {especificacoes.map((item, index) => {
            const label = typeof item === "string" ? item : item.label;
            const value = typeof item === "string" ? "" : item.value;

            return (
              <div
                key={label}
                className={`grid grid-cols-2 border-b border-black last:border-b-0 ${
                  index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f6f6f6]"
                }`}
              >
                <div className="border-r border-black px-4 py-3 text-sm font-medium text-zinc-900">
                  {label}
                </div>
                <div className="px-4 py-3 text-sm text-zinc-600">{value}</div>
              </div>
            );
          })}
        </div>

        <h1 className="mt-2 text-4xl font-bold mt-5">
          Destaques
        </h1>
        
        {destaques.length > 0 && (
          <div className="mt-10 space-y-4">
            {destaques.map((item) => (
              <div key={item.texto} className="flex gap-4 rounded-3xl border border-zinc-200 bg-white p-4">
                {item.imagem && (
                  <img src={item.imagem} alt={item.texto} className="h-full w-full object-contain" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AvaliaProduto;
