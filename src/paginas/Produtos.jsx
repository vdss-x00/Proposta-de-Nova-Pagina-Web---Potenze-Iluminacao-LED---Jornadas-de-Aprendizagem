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
import DestaqueLuminariaIndustrial from "../assets/image 61.png";

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
      detalhes: [
        "Potência: 15W | 30W", 
        "Grau de Proteção: IP69K",
        "Lúmens: 1.735lm | 3.470lm"
      ],
      imagem: Industriais,
      filtro: "Industriais",
      modelo: "Modelo PZ-IND",
      especificacoes: [
        {label: "Potência", value: "15W a 30W"},
        {label: "Lúmens", value: "1.735lm a 3.470lm"},
        {label: "Frequência", value: "50/60Hz"},
        {label: "Temperatura de Cor", value: "5.000K"},
        {label: "Garantia", value: "2 Anos"},
        {label: "Ângulo de abertura do facho", value: "100º"},
        {label: "Grau de Proteção", value: "IP69K"},
        {label: "Grau de Resistência", value: "IK10"},
      ],
      destaques: [
        {
          texto: "Produto EX certificado",
          imagem: DestaqueLuminariaIndustrial,
        },
      ],
      potencias: ["15W", "30W"],
      garantia: "2 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-IND-1.pdf"
    },
    {
      nome: "Refletor Ultra",
      detalhes: [
        "Potência: de 50W ate 900W", 
        "Grau de Proteção: IP67",
        "Lúmens: de 8.873lm ate 168.689lm"
      ],
      especificacoes: [
        {label: "Potência", value: "50W a 900W"},
        {label: "Lúmens", value: "8.873lm a 168.689lm"},
        {label: "Frequência", value: "47 - 63Hz"},
        {label: "Temperatura de Cor", value: "5.000K"},
        {label: "Garantia", value: "5 Anos"},
        {label: "Ângulo de abertura do facho", value: "-"},
        {label: "Grau de Proteção", value: "IP67"},
        {label: "Grau de Resistência", value: "IK08"},
      ],
      imagem: Refletor,
      filtro: "Refletores",
      modelo: "Modelo PZ-ULTRA",
      potencias: ["50W", "100W", "150W", "200W", "300W", "400W", "600W", "900W"],
      garantia: "5 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-REFLETOR-MODULAR-1.pdf"
    },
    {
      nome: "Luminária High Bay",
      detalhes: [
        "Potência: 100W | 150W | 200W",
        "Grau de Proteção: IP67",
        "Lúmens: 15.042lm | 24.529lm | 31.757lm"
      ],
      especificacoes: [
        {label: "Potência", value: "100W a 200W"},
        {label: "Lúmens", value: "15.042lm a 31.757lm"},
        {label: "Frequência", value: "47 - 63Hz"},
        {label: "Temperatura de Cor", value: "5.000K"},
        {label: "Garantia", value: "5 Anos"},
        {label: "Ângulo de abertura do facho", value: "60º, 90º-(Padrão)"},
        {label: "Grau de Proteção", value: "IP67"},
        {label: "Grau de Resistência", value: "IK08"},
      ],
      imagem: HighBay,
      filtro: "High Bay",
      modelo: "Modelo PZ-HIGH",
      potencias: ["100W", "150W", "200W"],
      garantia: "5 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-HIGH.pdf"
    },
    {
      nome: "High Bay Modular",
      detalhes: [
        "Potência: de 50W até 300W", 
        "Grau de Proteção: IP67",
        "Lúmens: de 8.873lm até 168.689lm"
      ],
      especificacoes: [
        {label: "Potência", value: "50W a 300W"},
        {label: "Lúmens", value: "8.873lm a 168.689lm"},
        {label: "Frequência", value: "47 - 63Hz"},
        {label: "Temperatura de Cor", value: "5.000K"},
        {label: "Garantia", value: "5 Anos"},
        {label: "Ângulo de abertura do facho", value: "30º, 60º, 90º(Padrão) ou 120º"},
        {label: "Grau de Proteção", value: "IP67"},
        {label: "Grau de Resistência", value: "IK08"},
      ],
      imagem: highBayModular,
      filtro: "High Bay",
      modelo: "Modelo PZ-ULTRA HB",
      potencias: ["50W", "100W", "150W", "200W", "300W"],
      garantia: "5 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-HIGH-MODULAR-1.pdf"
    },
    {
      nome: "Linear IP66",
      detalhes: [
        "Potência: de 20W até 60W", 
        "Grau de Proteção: IP66",
        "Lúmens: de 3.000lm até 9.000lm"
      ],
      especificacoes: [
        {label: "Potência", value: "20W a 60W"},
        {label: "Lúmens", value: "3.000lm a 9.000lm"},
        {label: "Frequência", value: "50/60Hz"},
        {label: "Temperatura de Cor", value: "6.500K, Yellow, Purple, Blue"},
        {label: "Garantia", value: "3 Anos"},
        {label: "Ângulo de abertura do facho", value: "120º"},
        {label: "Grau de Proteção", value: "IP66"},
        {label: "Grau de Resistência", value: "IK08"},
      ],
      imagem: linearIp66,
      filtro: "Lineares",
      modelo: "Modelo PZ-HE",
      potencias: ["20W", "40W", "50W", "60W"],
      garantia: "3 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-Hermetica-IP66-1.pdf"
    },
    {
      nome: "Linear IP69K",
      detalhes: [
        "Potência: de 20W até 60W", 
        "Grau de Proteção: IP69K",
        "Lúmens: de 3.000lm até 9.000lm"
      ],
      especificacoes: [
        {label: "Potência", value: "20W a 60W"},
        {label: "Lúmens", value: "3.000lm a 9.000lm"},
        {label: "Frequência", value: "50/60Hz"},
        {label: "Temperatura de Cor", value: "6.500K"},
        {label: "Garantia", value: "3 Anos"},
        {label: "Ângulo de abertura do facho", value: "120º"},
        {label: "Grau de Proteção", value: "IP69K"},
        {label: "Grau de Resistência", value: "IK08"},
      ],
      imagem: Lineares,
      filtro: "Lineares",
      modelo: "Modelo PZ-HE IP",
      potencias: ["20W", "40W", "50W", "60W"],
      garantia: "3 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-Hermetica-IP69K-1.pdf"
    },
    {
      nome: "Luminária Deco",
      detalhes: [
        "Potência: 50W | 70W | 100W", 
        "Grau de Proteção: IP66",
        "Lúmens: 8.775lm | 13.560lm | 17.946lm"
      ],
      especificacoes: [
        {label: "Potência", value: "50W a 100W"},
        {label: "Lúmens", value: "8.775lm a 17.946lm"},
        {label: "Frequência", value: "47 - 63Hz"},
        {label: "Temperatura de Cor", value: "5.000K"},
        {label: "Garantia", value: "5 Anos"},
        {label: "Ângulo de abertura do facho", value: "60°, 90° - (Padrão), 120°, Street TIPO II Média - 154° x 83°"},
        {label: "Grau de Proteção", value: "IP66"},
        {label: "Grau de Resistência", value: "IK08"},
      ],
      imagem: luminariaDeco,
      filtro: "Iluminação Pública",
      modelo: "Modelo PZ-DECOR",
      potencias: ["50W", "70W", "100W"],
      garantia: "5 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-DECOR-1.pdf"
    },
    {
      nome: "Luminária Ex",
      detalhes: [
        "Potência: 15W | 30W", 
        "Grau de Proteção: IP69K",
        "Lúmens: 1.735lm | 3.470lm"
      ],
      imagem: EX,
      filtro: "EX",
      modelo: "Modelo PZ-EX",
      especificacoes: [
        {label: "Potência", value: "15W a 30W"},
        {label: "Lúmens", value: "1.735lm a 3.470lm"},
        {label: "Frequência", value: "50/60Hz"},
        {label: "Temperatura de Cor", value: "5.000K"},
        {label: "Garantia", value: "2 Anos"},
        {label: "Ângulo de abertura do facho", value: "100º"},
        {label: "Grau de Proteção", value: "IP69K"},
        {label: "Grau de Resistência", value: "IK10"},
      ],
      potencias: ["15W", "30W"],
      garantia: "2 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-EX.pdf"
    },
    {
      nome: "Luminária Frigorífico",
      detalhes: [
        "Potência: 15W | 30W", 
        "Grau de Proteção: IP69K",
        "Lúmens: 1.735lm | 3.470lm"
      ],
      imagem: luminariaFrigorifico,
      filtro: "Industriais",
      modelo: "Modelo PZ-FRIG",
      especificacoes: [
        {label: "Potência", value: "15W a 30W"},
        {label: "Lúmens", value: "1.735lm a 3.470lm"},
        {label: "Frequência", value: "50/60Hz"},
        {label: "Temperatura de Cor", value: "5.000K"},
        {label: "Garantia", value: "5 Anos"},
        {label: "Ângulo de abertura do facho", value: "100º"},
        {label: "Grau de Proteção", value: "IP69K"},
        {label: "Grau de Resistência", value: "IK10"},
      ],
      potencias: ["15W", "30W"],
      garantia: "5 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-FRIG-1.pdf"
    },
    {
      nome: "Luminária Pública",
      detalhes: [
        "Potência: de 55W até 200W", 
        "Grau de Proteção: IP66",
        "Lúmens: de 10.019lm até 34.987lm"
      ],
      especificacoes: [
        {label: "Potência", value: "55W a 200W"},
        {label: "Lúmens", value: "10.019lm a 34.987lm"},
        {label: "Frequência", value: "47 - 63Hz"},
        {label: "Temperatura de Cor", value: "5.000K"},
        {label: "Garantia", value: "5 Anos"},
        {label: "Ângulo de abertura do facho", value: "Street TIPO II Média - Limitado (Cut off) 154° x 83° Conforme NBR 5101"},
        {label: "Grau de Proteção", value: "IP66"},
        {label: "Grau de Resistência", value: "IK08"},
      ],
      imagem: IlumPubli,
      filtro: "Iluminação Pública",
      modelo: "Modelo PZ-PUBLIC",
      potencias: ["55W", "75W", "100W", "150W", "200W"],
      garantia: "5 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-PUBLIC-1.pdf"
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
              className="flex h-[34rem] w-[360px] flex-col rounded-2xl border border-red-700 bg-transparent p-5 shadow-sm "
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
              <ul className="mt-3 min-h-[5.25rem] space-y-1.5 text-[1.05rem] leading-snug text-zinc-600">
                  {oferta.detalhes.map((detalhe) => (
                    <li key={detalhe}>{detalhe}</li>
                  ))}
                </ul>
              <Link
                to={`/avalia-produto/${index}`}
                state={{ product: oferta }}
                className="mt-6 self-start inline-flex rounded-full border border-red-700 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-700 hover:text-white"
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
