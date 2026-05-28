import { Link, useLocation } from "react-router-dom";

function AvaliaProduto() {
  const location = useLocation();
  const product = location.state?.product;

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
          <div>
            <h1 className="mt-2 text-4xl font-bold">{product.nome}</h1>
          </div>
          <Link
            to="/produtos"
            className="rounded-full border border-red-700 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-700 hover:text-white"
          >
            Voltar aos produtos
          </Link>
        </div>

        <section className="inline-block gap-6 rounded-3xl border border-red-700 bg-white p-6 shadow-sm md:grid-cols-[1.2fr_0.8fr] dark:bg-[#1f1f1f]">
          <div className="inline-block items-center justify-center rounded-2xl bg-zinc-100 p-6 dark:bg-[#303030]">
            <img
              src={product.imagem}
              alt={product.nome}
              className="max-h-[420px] w-full object-contain"
            />
          </div>

         
        </section>
        
      </div>
    </div>
  );
}

export default AvaliaProduto;
