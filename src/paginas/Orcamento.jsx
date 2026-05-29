import { useState } from "react";
import { Link } from "react-router-dom";

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
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
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
                <option value="Consumo">Consumo</option>
                <option value="Revenda">Revenda</option>
                <option value="Industrialização">Industrialização</option>
              </select>

              <select
                className="rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none"
                aria-label="Segmento"
                required
              >
                <option value="">Segmento*</option>
                <option value="Aeroportos / Aviação">
                  Aeroportos / Aviação
                </option>
                <option value="Agroindústria">Agroindústria</option>
                <option value="Alimentícia">Alimentícia</option>
                <option value="Armazéns">Armazéns</option>
                <option value="Arquitetura">Arquitetura</option>
                <option value="Automação">Automação</option>
                <option value="Automobilística">Automobilística</option>
                <option value="Açúcar e Álcool">Açúcar e Álcool</option>
                <option value="Bancos">Bancos</option>
                <option value="Campos &amp; Quadra">Campos &amp; Quadra</option>
                <option value="Centros de Distribuição">
                  Centros de Distribuição
                </option>
                <option value="Cliente Final">Cliente Final</option>
                <option value="Clubes">Clubes</option>
                <option value="Concessionária">Concessionária</option>
                <option value="Condomínios">Condomínios</option>
                <option value="Construtora">Construtora</option>
                <option value="Distribuidor">Distribuidor</option>
                <option value="Eletrônicos">Eletrônicos</option>
                <option value="Embalagens">Embalagens</option>
                <option value="Energia">Energia</option>
                <option value="Energia Renovável">Energia Renovável</option>
                <option value="Engenharia">Engenharia</option>
                <option value="Ensino">Ensino</option>
                <option value="Entretenimento">Entretenimento</option>
                <option value="Farmacêutico">Farmacêutico</option>
                <option value="Fertilizantes">Fertilizantes</option>
                <option value="Hotelaria">Hotelaria</option>
                <option value="Iluminação Pública">Iluminação Pública</option>
                <option value="Imobiliário">Imobiliário</option>
                <option value="Instaladora">Instaladora</option>
                <option value="Logística">Logística</option>
                <option value="Manufatura">Manufatura</option>
                <option value="Maquinários">Maquinários</option>
                <option value="Metalurgia">Metalurgia</option>
                <option value="Mineração">Mineração</option>
                <option value="Outro">Outro</option>
                <option value="Papel / Celulose">Papel / Celulose</option>
                <option value="Portos">Portos</option>
                <option value="Posto de Combustível">
                  Posto de Combustível
                </option>
                <option value="Química">Química</option>
                <option value="Revenda">Revenda</option>
                <option value="Saneamento">Saneamento</option>
                <option value="Saúde">Saúde</option>
                <option value="Siderurgia">Siderurgia</option>
                <option value="Subestações">Subestações</option>
                <option value="Supermercados">Supermercados</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Telecomunicação">Telecomunicação</option>
                <option value="Transporte">Transporte</option>
                <option value="Transporte Ferroviário">
                  Transporte Ferroviário
                </option>
                <option value="Têxtil">Têxtil</option>
                <option value="Usinas">Usinas</option>
                <option value="Usinas Biocombustível">
                  Usinas Biocombustível
                </option>
                <option value="Usinas Termelétricas">
                  Usinas Termelétricas
                </option>
                <option value="Varejo">Varejo</option>
                <option value="Óleo &amp; Gás">Óleo &amp; Gás</option>
                <option value="Órgãos Públicos">Órgãos Públicos</option>
                <option value="Contratista">Contratista</option>
                <option value="Plásticos">Plásticos</option>{" "}
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
                <option value="Indicação">Indicação</option>
                <option value="Redes Sociais">Redes Sociais</option>
                <option value="Google">Google</option>
                <option value="Outros">Outros</option>
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
              <Link to="/ConfirmaOrcamento">
              <button
                type="submit"
                disabled={!aceitoTermos}
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#8f1a22] transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
              >
                Enviar
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Orcamento;
