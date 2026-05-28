import { useState } from "react";
import { Link } from "react-router-dom";
import HighBay from "../assets/high_bay.png";
import Refletor from "../assets/refletor_ultra.png";
import EX from "../assets/luminaria_ex.png";
import Industriais from "../assets/luminaria_industrial.png";
import IlumPubli from "../assets/luminaria_publica.png";
import Lineares from "../assets/linear_ip69k.png";
import highBayModular from "../assets/high_bay_modular.png";
import linearIp66 from "../assets/linear_ip66.png";
import luminariaDeco from "../assets/luminaria_deco.png";
import luminariaFrigorifico from "../assets/luminaria_frigorifico.png";

const parceirosRaw = import.meta.glob("../assets/empresas/*.png", {
  eager: true,
  import: "default",
});

function chunkArray(items, chunkSize) {
  const result = [];
  for (let idx = 0; idx < items.length; idx += chunkSize) {
    result.push(items.slice(idx, idx + chunkSize));
  }
  return result;
}

function Produtos() {
  const ofertas = [
    {
      nome: "Luminária Industrial",
      detalhes: ["Potencia: 15W | 30W", "Grau de Protecao: IP69K"],
      imagem: Industriais,
      filtro: "Industriais",
    },
    {
      nome: "Refletor Ultra",
      detalhes: ["Potencia: de 50W ate 900W", "Grau de Protecao: IP67"],
      imagem: Refletor,
      filtro: "Refletores",
    },
    {
      nome: "Luminária High Bay",
      detalhes: ["Potencia: 100W | 150W | 200W", "Grau de Protecao: IP67"],
      imagem: HighBay,
      filtro: "High Bay",
    },
    {
      nome: "High Bay Modular",
      detalhes: [
        "Aplicacao: galpoes e centros logisticos",
        "Consulte potencia e configuracoes",
      ],
      imagem: highBayModular,
      filtro: "High Bay",
    },
    {
      nome: "Linear IP66",
      detalhes: [
        "Aplicacao: areas industriais internas",
        "Protecao reforcada contra poeira e agua",
      ],
      imagem: linearIp66,
      filtro: "Lineares",
    },
    {
      nome: "Linear IP69K",
      detalhes: [
        "Aplicacao: ambientes com higienizacao intensa",
        "Alta resistencia para lavagem pressurizada",
      ],
      imagem: Lineares,
      filtro: "Lineares",
    },
    {
      nome: "Luminária Deco",
      detalhes: [
        "Aplicacao: projetos arquitetonicos e decorativos",
        "Consulte modelos e temperaturas de cor",
      ],
      imagem: luminariaDeco,
      filtro: "Iluminação Pública",
    },
    {
      nome: "Luminária Ex",
      detalhes: [
        "Aplicacao: areas classificadas",
        "Consulte certificacoes e configuracoes",
      ],
      imagem: EX,
      filtro: "EX",
    },
    {
      nome: "Luminária Frigorífico",
      detalhes: [
        "Aplicacao: camaras frias e frigorificos",
        "Projetada para baixas temperaturas",
      ],
      imagem: luminariaFrigorifico,
      filtro: "Industriais",
    },
    {
      nome: "Luminária Pública",
      detalhes: [
        "Aplicacao: vias e areas externas",
        "Consulte fotometria e opcoes de montagem",
      ],
      imagem: IlumPubli,
      filtro: "Iluminação Pública",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const botoes = [
    { img: HighBay, label: "High Bay" },
    { img: Refletor, label: "Refletores" },
    { img: EX, label: "EX" },
    { img: Industriais, label: "Industriais" },
    { img: IlumPubli, label: "Iluminação Pública" },
    { img: Lineares, label: "Lineares" },
  ];

  const parceiros = Object.entries(parceirosRaw)
    .sort(([pathA], [pathB]) =>
      pathA.localeCompare(pathB, undefined, { numeric: true }),
    )
    .map(([_, imagem], idx) => ({
      nome: `Empresa parceira ${idx + 1}`,
      imagem,
    }));

  const parceirosDesktop = chunkArray(parceiros, 9);
  const activeFilter = activeIndex !== null ? botoes[activeIndex].label : null;
  const filteredOfertas = activeFilter
    ? ofertas.filter((oferta) => oferta.filtro === activeFilter)
    : ofertas;

  return (
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900 mt-30 dark:bg-[#303030] dark:text-[#fffafa]">
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-2xl font-bold mb-10 mt-20 dark:text-[#fffafa]">
          Categorias
        </h2>

        <section className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 justify-items-center mb-16 dark:text-[#fffafa]">
          {botoes.map((botao, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer w-full max-w-[180px] flex flex-col items-center"
            >
              <div
                className={`inline-block border-[#d9d9d9] border-3 rounded-[20px] overflow-hidden p-3 transition-colors ${
                  activeIndex === index ? "bg-[#8f1a22]" : "bg-transparent"
                }`}
              >
                <img
                  src={botao.img}
                  alt={botao.label}
                  className="w-[140px] h-[140px] object-contain"
                />
              </div>
              <p className="font-thin mt-2 text-[20px] text-center">
                {botao.label}
              </p>
            </button>
          ))}
        </section>

        <div className="grid gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
          {filteredOfertas.map((oferta, index) => (
            <article
              key={oferta.nome}
              className="flex h-[34rem] w-[360px] flex-col rounded-2xl border border-red-700 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex h-44 items-center justify-center rounded-xl">
                <img
                  src={oferta.imagem}
                  alt={oferta.nome}
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h3 className="min-h-[5.5rem] text-[2rem] font-bold leading-tight">
                {oferta.nome}
              </h3>
              <ul className="mt-3 min-h-[4.5rem] space-y-1.5 text-[1rem] leading-snug text-zinc-600">
                {oferta.detalhes.map((detalhe) => (
                  <li key={detalhe}>{detalhe}</li>
                ))}
              </ul>
              <Link
                to={`/avalia-produto/${index}`}
                state={{ product: oferta }}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-red-700 px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-700 hover:text-white transition-all duration-300"
              >
                Ver Oferta
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Produtos;
