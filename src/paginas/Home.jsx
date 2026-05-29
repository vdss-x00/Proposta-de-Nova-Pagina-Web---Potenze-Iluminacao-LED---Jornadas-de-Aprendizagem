import { Link } from "react-router-dom";
import HighBay from "../assets/high_bay.png";
import highBayModular from "../assets/high_bay_modular.png";
import linearIp66 from "../assets/linear_ip66.png";
import Lineares from "../assets/linear_ip69k.png";
import luminariaDeco from "../assets/luminaria_deco.png";
import EX from "../assets/luminaria_ex.png";
import luminariaFrigorifico from "../assets/luminaria_frigorifico.png";
import Industriais from "../assets/luminaria_industrial.png";
import IlumPubli from "../assets/luminaria_publica.png";
import Refletor from "../assets/refletor_ultra.png";
import potenze_1 from "../assets/potenze_1.png";
import potenze_2 from "../assets/potenze_2.png";
import potenze_3 from "../assets/potenze_3.png";
import potenze_4 from "../assets/potenze_4.png";
import potenze_5 from "../assets/potenze_5.png";

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

function Home() {
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
      imagem: linearIp66,
      filtro: "Lineares",
      modelo: "Modelo PZ-HE",
    },
    {
      nome: "Linear IP69K",
      detalhes: [
        "Potência: de 20W até 60W",
        "Grau de Proteção: IP69K",
        "Lúmens: de 3.000lm até 9.000lm",
      ],
      imagem: Lineares,
      filtro: "Lineares",
      modelo: "Modelo PZ-HE IP",
    },
    {
      nome: "Luminária Deco",
      detalhes: [
        "Potência: 50W | 70W | 100W",
        "Grau de Proteção: IP66",
        "Lúmens: 8.775lm | 13.560lm | 17.946lm",
      ],
      imagem: luminariaDeco,
      filtro: "Iluminação Pública",
      modelo: "Modelo PZ-DECOR",
    },
    {
      nome: "Luminária Ex",
      detalhes: [
        "Potência: 15W | 30W",
        "Grau de Proteção: IP69K",
        "Lúmens: 1.735lm | 3.470lm",
      ],
      imagem: EX,
      filtro: "EX",
      modelo: "Modelo PZ-EX",
    },
    {
      nome: "Luminária Frigorífico",
      detalhes: [
        "Potência: 15W | 30W",
        "Grau de Proteção: IP69K",
        "Lúmens: 1.735lm | 3.470lm",
      ],
      imagem: luminariaFrigorifico,
      filtro: "Industriais",
      modelo: "Modelo PZ-FRIG",
    },
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

  return (
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa]">
      <main>
        <section className="relative overflow-hidden w-full bg-black max-w-[1400px] mx-auto h-[70vh] md:h-[85vh] rounded-2xl">
          <div className="flex w-[600%] h-full animate-slide relative">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <div className="w-1/6 h-full flex-shrink-0">
              <img
                src={potenze_1}
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-[4000ms]"
                alt="Potenze 1"
              />
            </div>

            <div className="w-1/6 h-full flex-shrink-0">
              <img
                src={potenze_2}
                className="w-full h-full object-cover"
                alt="Potenze 2"
              />
            </div>

            <div className="w-1/6 h-full flex-shrink-0">
              <img
                src={potenze_3}
                className="w-full h-full object-cover"
                alt="Potenze 3"
              />
            </div>

            <div className="w-1/6 h-full flex-shrink-0">
              <img
                src={potenze_4}
                className="w-full h-full object-cover"
                alt="Potenze 4"
              />
            </div>

            <div className="w-1/6 h-full flex-shrink-0">
              <img
                src={potenze_5}
                class="w-full h-full object-cover"
                alt="Potenze 5"
              />
            </div>

            <div className="w-1/6 h-full flex-shrink-0">
              <img
                src={potenze_1}
                className="w-full h-full object-cover"
                alt="Potenze 1 Loop"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[5px] bg-[#9f1523] animate-progress"></div>
        </section>

        <section className="bg-zinc-200 dark:bg-black/50 text-zinc-900 dark:text-white py-24 px-6">
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">Líderes do Segmento</h2>

              <p className="text-zinc-600 dark:text-white text-lg leading-relaxed">
                A Potenze atua no mercado de iluminação LED oferecendo soluções
                modernas, eficientes e sofisticadas para ambientes residenciais,
                comerciais e corporativos.
              </p>

              <p className="text-zinc-400 mt-6 leading-relaxed">
                Com foco em inovação e qualidade, buscamos transformar espaços
                através da tecnologia e do design.
              </p>
            </div>

            <div>
              <img
                src={highBayModular}
                alt="Potenze LED"
                className="rounded-3xl shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <section
          id="produtos"
          className="mx-auto w-full max-w-7xl px-5 py-12 md:px-6"
        >
          <h2 className="mb-8 text-4xl font-semibold md:text-5xl dark:text-[#fffafa]">
            Confira algumas de nossas ofertas:
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ofertas.slice(0, 3).map((oferta) => (
              <article
                key={oferta.nome}
                className="flex h-full min-h-[36rem] flex-col rounded-2xl border border-red-700 bg-{currentColor} text-{currentColor} p-5 shadow-sm"
              >
                <div className="mb-4 flex h-52 items-center justify-center rounded-xl text-{currentColor}">
                  <img
                    src={oferta.imagem}
                    alt={oferta.nome}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <h3 className="min-h-[6.5rem] text-[2.5rem] font-bold leading-tight">
                  {oferta.nome}
                </h3>
                <ul className="mt-3 min-h-[5.25rem] space-y-1.5 text-[1.05rem] leading-snug text-zinc-500 dark:text-zinc-300">
                  {oferta.detalhes.map((detalhe) => (
                    <li key={detalhe}>{detalhe}</li>
                  ))}
                </ul>
                <Link
                  to={`/avalia-produto/${oferta.nome.toLowerCase().replace(/\s+/g, "-")}`}
                  state={{ product: oferta }}
                  className="mt-auto"
                >
                  <button className="w-fit rounded-2xl bg-red-800 px-8 py-2 text-[2rem] leading-none text-white cursor-pointer hover:bg-red-700">
                    Ver Oferta
                  </button>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/produtos">
              <button className="rounded-2xl bg-red-800 px-10 py-4 text-4xl text-white md:text-[2.2rem] cursor-pointer hover:bg-red-700">
                Ver todas as ofertas
              </button>
            </Link>
          </div>
        </section>

        <section
          id="sobre"
          className="mx-auto w-full max-w-7xl px-5 pb-14 md:px-6"
        >
          <h2 className="text-5xl font-semibold md:text-5xl dark:text-[#fffafa]">
            Empresas Parceiras
          </h2>
          <p className="mt-2 text-lg text-zinc-600 dark:text-[#d9d9d9]">
            Marcas que confiam nas soluções da Potenze.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:hidden">
            {parceiros.map((parceiro) => (
              <div
                key={parceiro.nome}
                className="flex h-16 items-center justify-center rounded-lg border border-zinc-200 bg-white p-2"
              >
                <img
                  src={parceiro.imagem}
                  alt={parceiro.nome}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="relative mt-8 hidden space-y-3 sm:block">
            {parceirosDesktop.map((linha, idx) => (
              <div key={`linha-${idx}`} className="overflow-hidden">
                <ul
                  className={`flex min-w-max gap-3 ${
                    idx % 2 === 0
                      ? "animate-marquee"
                      : "animate-marquee-reverse"
                  }`}
                >
                  {[...linha, ...linha].map((parceiro, itemIdx) => (
                    <li
                      key={`${parceiro.nome}-${itemIdx}`}
                      className="flex h-16 w-52 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white p-2"
                    >
                      <img
                        src={parceiro.imagem}
                        alt={parceiro.nome}
                        className="h-full w-full object-contain"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
