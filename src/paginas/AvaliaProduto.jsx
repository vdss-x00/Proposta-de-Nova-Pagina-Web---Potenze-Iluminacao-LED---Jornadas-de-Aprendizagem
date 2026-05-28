import { Link, useLocation } from "react-router-dom";

function AvaliaProduto() {
  const location = useLocation();
  const product = location.state?.product;

  const adicionarAoCarrinho = () => {
    const carrinhoAtual = JSON.parse(
      localStorage.getItem("potenze_carrinho") || "[]",
    );
    const itemExistente = carrinhoAtual.find(
      (item) => item.id === product.nome,
    );

    if (itemExistente) {
      const carrinhoAtualizado = carrinhoAtual.map((item) =>
        item.id === product.nome
          ? { ...item, quantidade: item.quantidade + 1 }
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
        quantidade: 1,
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
    <div className="min-h-screen bg-zinc-100 px-6 py-10 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa] mt-30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div></div>
          <Link
            to="/produtos"
            className="rounded-full border border-red-700 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-700 hover:text-white"
          >
            Voltar aos produtos
          </Link>
        </div>

        <h1 className="mt-2 text-4xl font-bold text-center">{product.nome}</h1>
        <h2 className="text-xl font-semibold text-center text-zinc-600">
          {product.modelo}
        </h2>

        <section className="inline-block w-full max-w-2xl rounded-3xl border border-red-700 bg-white p-6 shadow-sm dark:bg-[#1f1f1f]">
          <div className="flex h-[320px] w-full items-center justify-center rounded-2xl bg-zinc-100 p-6 dark:bg-[#303030]">
            <img
              src={product.imagem}
              alt={product.nome}
              className="h-full w-full object-contain"
            />
          </div>
        </section>

        <h1 className="mt-2 text-4xl font-bold mt-5">
          Especificações do Produto
        </h1>

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

        <button
          onClick={adicionarAoCarrinho}
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-lg bg-[#9f1523] px-6 py-3 text-white transition-colors hover:bg-[#7a1019]"
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
  );
}

export default AvaliaProduto;
