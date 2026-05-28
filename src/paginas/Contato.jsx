function Contato() {
  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-10 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa]">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[10px] bg-[#8f1a22] text-white shadow-xl">
          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
            <div className="flex flex-col justify-center">
              
              <h1 className="text-4xl font-bold md:text-5xl">
                Fale com quem entrega iluminação de alto desempenho.
              </h1>
              <p className="mt-4 max-w-xl text-sm text-white/80 md:text-base">
                Temos solução para projetos industriais, públicos e comerciais.
                Entre em contato para orçamento, suporte técnico ou atendimento
                personalizado.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    Telefone
                  </p>
                  <p className="mt-2 text-lg font-semibold">(41) 3373-9799</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    Email
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    vendas@potenze.com.br
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] bg-white p-6 text-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                <div>
                  <h2 className="mt-1 text-2xl font-bold">
                    Envie uma mensagem
                  </h2>
                </div>
            
              </div>

              <form className="mt-5 grid gap-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Nome*"
                    className="rounded-xl border border-zinc-200 px-4 py-3 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="rounded-xl border border-zinc-200 px-4 py-3 outline-none"
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Empresa"
                    className="rounded-xl border border-zinc-200 px-4 py-3 outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="rounded-xl border border-zinc-200 px-4 py-3 outline-none"
                  />
                </div>
                <textarea
                  placeholder="Conte sobre seu projeto ou necessidade*"
                  className="min-h-32 rounded-xl border border-zinc-200 px-4 py-3 outline-none"
                />
                <label className="flex items-start gap-3 text-sm text-zinc-700">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-zinc-300"
                  />
                  <span>
                    Aceito receber contato da Potenze sobre este projeto.
                  </span>
                </label>
                <button
                  type="submit"
                  className="rounded-xl bg-[#8f1a22] px-5 py-3 text-sm font-semibold text-white"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-[10px] bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f1a22]">
              Endereço
            </p>
            <p className="mt-3 text-base font-medium text-zinc-900">
              Curitiba, PR
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              Rua Victor Modesto de Oliveira, 165 A
            </p>
          </div>

          <div className="rounded-[10px] bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f1a22]">
              Horário comercial
            </p>
            <p className="mt-3 text-base font-medium text-zinc-900">
              Segunda a sexta
            </p>
            <p className="mt-1 text-sm text-zinc-600">08:00 às 18:00</p>
          </div>

          <div className="rounded-[10px] bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f1a22]">
              Soluções
            </p>
            <p className="mt-3 text-base font-medium text-zinc-900">
              Iluminação industrial
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              Projetos, orçamento e suporte técnico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
