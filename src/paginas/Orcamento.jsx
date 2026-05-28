import { useState } from "react";

function Orcamento() {
  const [aceitoTermos, setAceitoTermos] = useState(false);

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
              placeholder="Nome*"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
              required
            />
            <input
              type="text"
              placeholder="Sobrenome*"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Telefone*"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
              required
            />
            <div className="grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-3">
              <input
                type="text"
                placeholder="Empresa*"
                className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
                required
              />
              <input
                type="text"
                placeholder="CNPJ*"
                className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
                required
              />
              <input
                type="text"
                placeholder="Cargo*"
                className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
                required
              />
            </div>

            <select
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
              aria-label="UF"
              required
            >
              <option value="">UF*</option>
            </select>

            <input
              type="text"
              placeholder="Cidade*"
              className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
              required
            />

            <div className="grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-2">
              <select
                className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
                aria-label="Tipo de Negociação"
                required
              >
                <option value="">Tipo de Negociação*</option>
              </select>

              <select
                className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
                aria-label="Segmento"
                required
              >
                <option value="">Segmento*</option>
              </select>
            </div>

            <textarea
              className="min-h-32 rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none md:col-span-2"
              placeholder="insira detalhes de seu orçamento aqui*"
              required
            />

            <div className="md:col-span-2">
              <p className="mb-2 text-sm font-medium text-white">
                Como você ouviu falar da Potenze?
              </p>
              <select
                className="w-full rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
                aria-label="Como você ouviu falar da Potenze"
                required
              >
                <option value="">Selecione</option>
              </select>
            </div>

            <label className="flex items-start gap-3 text-sm text-white md:col-span-2">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-white bg-white"
                checked={aceitoTermos}
                onChange={(e) => setAceitoTermos(e.target.checked)}
                required
              />
              <span>Aceito os termos de uso e políticas privadas do site</span>
            </label>

            <div className="flex justify-center md:col-span-2">
              <button
                type="submit"
                disabled={!aceitoTermos}
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#8f1a22] transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
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
