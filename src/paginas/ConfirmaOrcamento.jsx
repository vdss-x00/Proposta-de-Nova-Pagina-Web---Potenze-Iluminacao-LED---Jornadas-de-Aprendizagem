import { Link } from "react-router-dom";

function Obrigado() {
  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-10 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa] flex items-center justify-center">
      <div className="mx-auto max-w-2xl text-center">
        
        <div className="rounded-[10px] bg-[#8f1a22] p-10 text-white shadow-lg">
          
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
            {/* Ícone de check */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-10 w-10 text-white"
            >
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold">
            Solicitação enviada com sucesso!
          </h1>

          <p className="mt-4 text-white/80 text-lg">
            Recebemos suas informações e nossa equipe já está analisando seu pedido de orçamento.
          </p>

          <p className="mt-3 text-white/70 text-sm">
            Em breve entraremos em contato com você pelo e-mail ou telefone informado.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#8f1a22] transition hover:opacity-90"
            >
              Voltar para a página inicial
            </Link>

            <Link
              to="/produtos"
              className="rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver produtos
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Obrigado;