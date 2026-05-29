import { Link, useSearchParams } from "react-router-dom";
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
        "Lúmens: 1.735lm | 3.470lm",
      ],
      imagem: Industriais,
      filtro: "industriais",
      modelo: "Modelo PZ-IND",
      especificacoes: [
        { label: "Potência", value: "15W a 30W" },
        { label: "Lúmens", value: "1.735lm a 3.470lm" },
        { label: "Frequência", value: "50/60Hz" },
        { label: "Temperatura de Cor", value: "5.000K" },
        { label: "Garantia", value: "2 Anos" },
        { label: "Ângulo de abertura do facho", value: "100º" },
        { label: "Grau de Proteção", value: "IP69K" },
        { label: "Grau de Resistência", value: "IK10" },
      ],
      potencias: ["15W", "30W"],
      garantia: "2 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-IND-1.pdf",
      descricao: `As luminárias Industriais LED da Potenze são projetadas para suportar ambientes agressivos,
        garantindo alta performance e durabilidade. Com estrutura robusta, materiais resistentes a
        corrosão e proteção IP69K, são à prova d’água e poeira, ideais para locais que exigem iluminação
        confiável. Seja em máquinas de usinagens, tornos, fresas ou outros ambientes hostis, as
        luminárias Potenze oferecem eficiência, resistência e baixo índice de manutenção.`,
    },
    {
      nome: "Refletor Ultra",
      detalhes: [
        "Potência: de 50W ate 900W",
        "Grau de Proteção: IP67",
        "Lúmens: de 8.873lm ate 168.689lm",
      ],
      especificacoes: [
        { label: "Potência", value: "50W a 900W" },
        { label: "Lúmens", value: "8.873lm a 168.689lm" },
        { label: "Frequência", value: "47 - 63Hz" },
        { label: "Temperatura de Cor", value: "5.000K" },
        { label: "Garantia", value: "5 Anos" },
        { label: "Ângulo de abertura do facho", value: "-" },
        { label: "Grau de Proteção", value: "IP67" },
        { label: "Grau de Resistência", value: "IK08" },
      ],
      imagem: Refletor,
      filtro: "refletores",
      modelo: "Modelo PZ-ULTRA",
      potencias: [
        "50W",
        "100W",
        "150W",
        "200W",
        "300W",
        "400W",
        "600W",
        "900W",
      ],
      garantia: "5 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-REFLETOR-MODULAR-1.pdf",
      descricao: `Os refletores ULTRA LED são projetados para oferecer uma iluminação potente e uniforme
        em grandes áreas. Com carcaça robusta, acabamento em pintura epóxi e lente de
        policarbonato, nossos refletores proporcionam segurança resistência e durabilidade.
        Possuem uma vida útil de 102.000 horas sendo eficientes em termos de energia,
        extremamente duráveis e de fácil instalação.`,
    },
    {
      nome: "Luminária High Bay",
      detalhes: [
        "Potência: 100W | 150W | 200W",
        "Grau de Proteção: IP67",
        "Lúmens: 15.042lm | 24.529lm | 31.757lm",
      ],
      especificacoes: [
        { label: "Potência", value: "100W a 200W" },
        { label: "Lúmens", value: "15.042lm a 31.757lm" },
        { label: "Frequência", value: "47 - 63Hz" },
        { label: "Temperatura de Cor", value: "5.000K" },
        { label: "Garantia", value: "5 Anos" },
        { label: "Ângulo de abertura do facho", value: "60º, 90º-(Padrão)" },
        { label: "Grau de Proteção", value: "IP67" },
        { label: "Grau de Resistência", value: "IK08" },
      ],
      imagem: HighBay,
      filtro: "highbay",
      modelo: "Modelo PZ-HIGH",
      potencias: ["100W", "150W", "200W"],
      garantia: "5 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-HIGH.pdf",
      descricao: `As luminárias High Bay garantem alta performance e eficiência em ambientes industriais,
        com uma vida útil de 102.000 horas. Seu design é leve e eficiente, substituindo luminárias
        tradicionais. Proporcionam excelente uniformidade luminosa, sendo uma escolha durável e
        gerando economia e melhor iluminação para armazéns, hangares e instalações em grandes
        alturas.`,
    },
    {
      nome: "High Bay Modular",
      detalhes: [
        "Potência: de 50W até 300W",
        "Grau de Proteção: IP67",
        "Lúmens: de 8.873lm até 168.689lm",
      ],
      especificacoes: [
        { label: "Potência", value: "50W a 300W" },
        { label: "Lúmens", value: "8.873lm a 168.689lm" },
        { label: "Frequência", value: "47 - 63Hz" },
        { label: "Temperatura de Cor", value: "5.000K" },
        { label: "Garantia", value: "5 Anos" },
        {
          label: "Ângulo de abertura do facho",
          value: "30º, 60º, 90º(Padrão) ou 120º",
        },
        { label: "Grau de Proteção", value: "IP67" },
        { label: "Grau de Resistência", value: "IK08" },
      ],
      imagem: highBayModular,
      filtro: "highbay",
      modelo: "Modelo PZ-ULTRA HB",
      potencias: ["50W", "100W", "150W", "200W", "300W"],
      garantia: "5 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-HIGH-MODULAR-1.pdf",
      descricao: `As luminárias High Bay Modulares garantem alta performance e eficiência em ambientes
        industriais, com vida útil de até 102.000 horas. Seu design leve e eficiente permite substituir
        luminárias tradicionais com mais economia e desempenho. Um dos grandes diferenciais é a
        versatilidade da linha modular, que oferece diferentes potências mantendo o mesmo design,
        permitindo padronização estética e flexibilidade para atender diversas necessidades de
        iluminação dentro de um mesmo projeto. Com excelente uniformidade luminosa e alto
        rendimento, proporcionam ambientes mais seguros e bem iluminados, sendo uma solução
        vesátil para armazéns, hangares, indústrias e instalações em grandes alturas.`,
    },
    {
      nome: "Linear IP66",
      detalhes: [
        "Potência: de 20W até 60W",
        "Grau de Proteção: IP66",
        "Lúmens: de 3.000lm até 9.000lm",
      ],
      especificacoes: [
        { label: "Potência", value: "20W a 60W" },
        { label: "Lúmens", value: "3.000lm a 9.000lm" },
        { label: "Frequência", value: "50/60Hz" },
        { label: "Temperatura de Cor", value: "6.500K, Yellow, Purple, Blue" },
        { label: "Garantia", value: "3 Anos" },
        { label: "Ângulo de abertura do facho", value: "120º" },
        { label: "Grau de Proteção", value: "IP66" },
        { label: "Grau de Resistência", value: "IK08" },
      ],
      imagem: linearIp66,
      filtro: "lineares",
      modelo: "Modelo PZ-HE",
      potencias: ["20W", "40W", "50W", "60W"],
      garantia: "3 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-Hermetica-IP66-1.pdf",
      descricao: `A luminária hermética LED IP66 foi desenvolvida para oferecer alta eficiência e resistência em ambientes que exigem
        proteção contra umidade e poeira. Com corpo robusto, tecnologia LED e driver integrado, garante iluminação uniforme,
        baixo consumo de energia e longa vida útil. É a solução ideal para aplicações industriais, comerciais e áreas que precisam
        de durabilidade, confiabilidade, desempenho e uniformidade da iluminação. Além da sua função principal na iluminação
        convencional, essa linha também dispõe de LED's com espectros de cores especiais para aplicações específicas:
        espectro de luz purple para horticultura, blue para setores de pendura em frigoríficos e yellow para áreas livres de insetos
        em indústrias alimentícias`,
    },
    {
      nome: "Linear IP69K",
      detalhes: [
        "Potência: de 20W até 60W",
        "Grau de Proteção: IP69K",
        "Lúmens: de 3.000lm até 9.000lm",
      ],
      especificacoes: [
        { label: "Potência", value: "20W a 60W" },
        { label: "Lúmens", value: "3.000lm a 9.000lm" },
        { label: "Frequência", value: "50/60Hz" },
        { label: "Temperatura de Cor", value: "6.500K" },
        { label: "Garantia", value: "3 Anos" },
        { label: "Ângulo de abertura do facho", value: "120º" },
        { label: "Grau de Proteção", value: "IP69K" },
        { label: "Grau de Resistência", value: "IK08" },
      ],
      imagem: Lineares,
      filtro: "lineares",
      modelo: "Modelo PZ-HE IP",
      potencias: ["20W", "40W", "50W", "60W"],
      garantia: "3 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-Hermetica-IP69K-1.pdf",
      descricao: `A luminária hermética LED IP69K foi desenvolvida para resistir a ambientes úmidos ou que
        necessitam de limpeza constante. Com engenharia robusta, garante iluminação uniforme e a
        resistência necessária para seu ambiente de aplicação. É a solução ideal para ambientes
        incomuns e áreas que precisam de durabilidade e confiabilidade na iluminação.`,
    },
    {
      nome: "Luminária Deco",
      detalhes: [
        "Potência: 50W | 70W | 100W",
        "Grau de Proteção: IP66",
        "Lúmens: 8.775lm | 13.560lm | 17.946lm",
      ],
      especificacoes: [
        { label: "Potência", value: "50W a 100W" },
        { label: "Lúmens", value: "8.775lm a 17.946lm" },
        { label: "Frequência", value: "47 - 63Hz" },
        { label: "Temperatura de Cor", value: "5.000K" },
        { label: "Garantia", value: "5 Anos" },
        {
          label: "Ângulo de abertura do facho",
          value: "60°, 90° - (Padrão), 120°, Street TIPO II Média - 154° x 83°",
        },
        { label: "Grau de Proteção", value: "IP66" },
        { label: "Grau de Resistência", value: "IK08" },
      ],
      imagem: luminariaDeco,
      filtro: "iluminacao-publica",
      modelo: "Modelo PZ-DECOR",
      potencias: ["50W", "70W", "100W"],
      garantia: "5 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-DECOR-1.pdf",
      descricao: `As luminárias decorativas LED da Potenze oferecem uma combinação de estética e
        eficiência, com uma vida útil de 102.000 horas. Com um design moderno e robusto, nossas
        luminárias garantem ótima iluminação e durabilidade, enquanto o acabamento elegante
        complementa qualquer ambiente. Preparadas para relé fotoelétrico e telegestão, são
        perfeitas para parques, praças, jardins, condomínios e estacionamentos, agregando beleza
        e excelente iluminação aos ambientes externos.`,
    },
    {
      nome: "Luminária Ex",
      detalhes: [
        "Potência: 15W | 30W",
        "Grau de Proteção: IP69K",
        "Lúmens: 1.735lm | 3.470lm",
      ],
      imagem: EX,
      filtro: "ex",
      modelo: "Modelo PZ-EX",
      especificacoes: [
        { label: "Potência", value: "15W a 30W" },
        { label: "Lúmens", value: "1.735lm a 3.470lm" },
        { label: "Frequência", value: "50/60Hz" },
        { label: "Temperatura de Cor", value: "5.000K" },
        { label: "Garantia", value: "2 Anos" },
        { label: "Ângulo de abertura do facho", value: "100º" },
        { label: "Grau de Proteção", value: "IP69K" },
        { label: "Grau de Resistência", value: "IK10" },
      ],
      potencias: ["15W", "30W"],
      garantia: "2 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-EX.pdf",
      descricao: `As luminárias Industriais EX da Potenze são projetadas para suportar ambientes extremos e
        perigosos, garantindo segurança, alta performance e durabilidade. Com estrutura compacta e
        robusta em alumínio, proteção IP69K contra água e poeira e certificação EX, elas são ideais para
        espaços confinados, túneis de transporte de grãos, offshore em navios e plataformas, centros de
        armazenagem e abastecimento de combustíveis, indústria químicas e demais áreas classificadas
        EX. As luminárias EX da Potenze oferecem eficácia, resistência e confiabilidade em locais
        potencialmente explosivos, onde a segurança é prioridade.`,
    },
    {
      nome: "Luminária Frigorífico",
      detalhes: [
        "Potência: 15W | 30W",
        "Grau de Proteção: IP69K",
        "Lúmens: 1.735lm | 3.470lm",
      ],
      imagem: luminariaFrigorifico,
      filtro: "industriais",
      modelo: "Modelo PZ-FRIG",
      especificacoes: [
        { label: "Potência", value: "15W a 30W" },
        { label: "Lúmens", value: "1.735lm a 3.470lm" },
        { label: "Frequência", value: "50/60Hz" },
        { label: "Temperatura de Cor", value: "5.000K" },
        { label: "Garantia", value: "5 Anos" },
        { label: "Ângulo de abertura do facho", value: "100º" },
        { label: "Grau de Proteção", value: "IP69K" },
        { label: "Grau de Resistência", value: "IK10" },
      ],
      potencias: ["15W", "30W"],
      garantia: "5 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-FRIG-1.pdf",
      descricao: `As luminárias Industriais para Frigoríficos da Potenze foram desenvolvidas para ambientes
        úmidos e com temperaturas extremamente baixas, garantindo alta performance e resistência.
        Com materiais resistentes a corrosão e proteção IP69K,elas suportam jatos potentes de água
        quente de até 10 bar, comuns durante o processo de higienização em indústrias, sendo ideais para
        áreas de depenagem, evisceração, áreas de processamento de alimentos e áreas de
        armazenamento como câmaras frigoríficas. Com iluminação forte e durável, as luminárias para
        frigorífico proporcionam segurança e eficiência onde a durabilidade é essencial com baixo índice
        de manutenção.`,
    },
    {
      nome: "Luminária Pública",
      detalhes: [
        "Potência: de 55W até 200W",
        "Grau de Proteção: IP66",
        "Lúmens: de 10.019lm até 34.987lm",
      ],
      especificacoes: [
        { label: "Potência", value: "55W a 200W" },
        { label: "Lúmens", value: "10.019lm a 34.987lm" },
        { label: "Frequência", value: "47 - 63Hz" },
        { label: "Temperatura de Cor", value: "5.000K" },
        { label: "Garantia", value: "5 Anos" },
        {
          label: "Ângulo de abertura do facho",
          value:
            "Street TIPO II Média - Limitado (Cut off) 154° x 83° Conforme NBR 5101",
        },
        { label: "Grau de Proteção", value: "IP66" },
        { label: "Grau de Resistência", value: "IK08" },
      ],
      imagem: IlumPubli,
      filtro: "iluminacao-publica",
      modelo: "Modelo PZ-PUBLIC",
      potencias: ["55W", "75W", "100W", "150W", "200W"],
      garantia: "5 Anos de Garantia",
      link: "https://potenze.com.br/wp-content/uploads/2026/03/FOLDER-PZ-PUBLIC-1.pdf",
      descricao: `As luminárias públicas LED da Potenze são projetadas para oferecer desempenho
        luminoso superior e distribuição uniforme de luz, com uma vida útil de 102.000 horas.
        Fabricadas com carcaça de alumínio e acabamento em pintura epóxi, possuem lente de
        vidro temperado e travas de aço inox, garantindo durabilidade. Equipadas com base para
        relé fotoelétrico e prontas para telegestão, são ideais para rodovias, vias públicas e
        privadas, praças, parques e estacionamentos.`,
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const categoria = searchParams.get("categoria");

  const botoes = [
    { img: HighBay, label: "High Bay", slug: "highbay" },
    { img: Refletor, label: "Refletores", slug: "refletores" },
    { img: EX, label: "EX", slug: "ex" },
    { img: Industriais, label: "Industriais", slug: "industriais" },
    { img: IlumPubli, label: "Iluminação Pública", slug: "iluminacao-publica" },
    { img: Lineares, label: "Lineares", slug: "lineares" },
  ];

  const handleCategoryClick = (slug) => {
    if (categoria === slug) {
      setSearchParams({}); // reset parameter to show all products
    } else {
      setSearchParams({ categoria: slug });
    }
  };

  const parceiros = Object.entries(parceirosRaw)
    .sort(([pathA], [pathB]) =>
      pathA.localeCompare(pathB, undefined, { numeric: true }),
    )
    .map(([_, imagem], idx) => ({
      nome: `Empresa parceira ${idx + 1}`,
      imagem,
    }));

  const parceirosDesktop = chunkArray(parceiros, 9);
  const activeIndex = botoes.findIndex(
  (botao) => botao.slug === categoria
);

const activeFilter = activeIndex !== -1 ? botoes[activeIndex].label : null;
  const filteredOfertas = categoria
    ? ofertas.filter((oferta) => oferta.filtro === categoria)
    : ofertas;

  return (
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900 mt-30 dark:bg-[#303030] dark:text-[#fffafa]">
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-2xl font-bold mb-10 mt-20 dark:text-[#fffafa]">
          Categorias
        </h2>

        <section className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 justify-items-center mb-16 dark:text-[#fffafa]">
          {botoes.map((botao, index) => {
            const isButtonActive = categoria === botao.slug;
            return (
              <button
                key={index}
                onClick={() => handleCategoryClick(botao.slug)}
                className="cursor-pointer w-full max-w-[180px] flex flex-col items-center"
              >
                <div
                  className={`inline-block border-[#d9d9d9] border-3 rounded-[20px] overflow-hidden p-3 transition-colors ${
                    isButtonActive
                      ? "bg-[#8f1a22]"
                      : "bg-transparent"
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
            );
          })}
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
              <ul className="mt-3 min-h-[5.25rem] space-y-1.5 text-[1.05rem] leading-snug text-zinc-600 dark:text-zinc-300">
                {oferta.detalhes.map((detalhe) => (
                  <li key={detalhe}>{detalhe}</li>
                ))}
              </ul>
              <Link
                to={`/avalia-produto/${index}`}
                state={{ product: oferta }}
                className="mt-auto inline-flex rounded-full border border-red-700 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-700 hover:text-white text-center"
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
