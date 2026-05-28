function Orcamento() {
  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-10 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa]">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[10px] bg-[#8f1a22] p-6 text-white">
          <h1 className="text-4xl font-bold">Solicite seu orçamento</h1>
          <p className="mt-2 text-sm text-white/80">
            Preencha os dados abaixo para receber uma cotação personalizada.
          </p>

          <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
            />
            <input
              type="text"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
            />
            <input
              type="text"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
            />
            <input
              type="text"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
            />
            <input
              type="text"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
            />
            <input
              type="text"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
            />
            <input
              type="text"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
            />
            <input
              type="text"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
            />
            <input
              type="text"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
            />
            <input
              type="text"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
            />

            <select className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none">
              <option value="">Selecione</option>
            </select>

            <select className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none">
              <option value="">Selecione</option>
            </select>

            <textarea className="min-h-32 rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none md:col-span-2" />

            <label className="flex items-start gap-3 text-sm text-white md:col-span-2">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-white bg-white"
              />
              <span>Aceito os termos de uso e políticas privadas do site</span>
            </label>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#8f1a22]"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Orcamento;
