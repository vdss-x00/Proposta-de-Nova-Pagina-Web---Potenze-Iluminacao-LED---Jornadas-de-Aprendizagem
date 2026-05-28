import highBay from '../assets/high_bay.png'
import highBayModular from '../assets/high_bay_modular.png'
import linearIp66 from '../assets/linear_ip66.png'
import linearIp69k from '../assets/linear_ip69k.png'
import luminariaDeco from '../assets/luminaria_deco.png'
import luminariaEx from '../assets/luminaria_ex.png'
import luminariaFrigorifico from '../assets/luminaria_frigorifico.png'
import luminariaIndustrial from '../assets/luminaria_industrial.png'
import luminariaPublica from '../assets/luminaria_publica.png'
import refletorUltra from '../assets/refletor_ultra.png'
import potenze_1 from '../assets/potenze_1.png'
import potenze_2 from '../assets/potenze_2.png'
import potenze_3 from '../assets/potenze_3.png'
import potenze_4 from '../assets/potenze_4.png'
import potenze_5 from '../assets/potenze_5.png'

const parceirosRaw = import.meta.glob('../assets/empresas/*.png', {
  eager: true,
  import: 'default',
})

function chunkArray(items, chunkSize) {
  const result = []
  for (let idx = 0; idx < items.length; idx += chunkSize) {
    result.push(items.slice(idx, idx + chunkSize))
  }
  return result
}

function Home() {
  const ofertas = [
    {
      nome: 'Luminária Industrial',
      detalhes: ['Potencia: 15W | 30W', 'Grau de Protecao: IP69K'],
      imagem: luminariaIndustrial,
    },
    {
      nome: 'Refletor Ultra',
      detalhes: ['Potencia: de 50W ate 900W', 'Grau de Protecao: IP67'],
      imagem: refletorUltra,
    },
    {
      nome: 'Luminária High Bay',
      detalhes: ['Potencia: 100W | 150W | 200W', 'Grau de Protecao: IP67'],
      imagem: highBay,
    },
    {
      nome: 'High Bay Modular',
      detalhes: ['Aplicacao: galpoes e centros logisticos', 'Consulte potencia e configuracoes'],
      imagem: highBayModular,
    },
    {
      nome: 'Linear IP66',
      detalhes: ['Aplicacao: areas industriais internas', 'Protecao reforcada contra poeira e agua'],
      imagem: linearIp66,
    },
    {
      nome: 'Linear IP69K',
      detalhes: ['Aplicacao: ambientes com higienizacao intensa', 'Alta resistencia para lavagem pressurizada'],
      imagem: linearIp69k,
    },
    {
      nome: 'Luminária Deco',
      detalhes: ['Aplicacao: projetos arquitetonicos e decorativos', 'Consulte modelos e temperaturas de cor'],
      imagem: luminariaDeco,
    },
    {
      nome: 'Luminária Ex',
      detalhes: ['Aplicacao: areas classificadas', 'Consulte certificacoes e configuracoes'],
      imagem: luminariaEx,
    },
    {
      nome: 'Luminária Frigorífico',
      detalhes: ['Aplicacao: camaras frias e frigorificos', 'Projetada para baixas temperaturas'],
      imagem: luminariaFrigorifico,
    },
    {
      nome: 'Luminária Pública',
      detalhes: ['Aplicacao: vias e areas externas', 'Consulte fotometria e opcoes de montagem'],
      imagem: luminariaPublica,
    },
  ]

  const parceiros = Object.entries(parceirosRaw)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
    .map(([_, imagem], idx) => ({
      nome: `Empresa parceira ${idx + 1}`,
      imagem,
    }))

  const parceirosDesktop = chunkArray(parceiros, 9)

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

        <section id="produtos" className="mx-auto w-full max-w-7xl px-5 py-12 md:px-6">
          <h2 className="mb-8 text-4xl font-semibold md:text-5xl dark:text-[#fffafa]">Confira algumas de nossas ofertas:</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ofertas.map((oferta) => (
              <article
                key={oferta.nome}
                className="flex h-full min-h-[36rem] flex-col rounded-2xl border border-red-700 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex h-52 items-center justify-center rounded-xl">
                  <img
                    src={oferta.imagem}
                    alt={oferta.nome}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <h3 className="min-h-[6.5rem] text-[2.5rem] font-bold leading-tight">{oferta.nome}</h3>
                <ul className="mt-3 min-h-[5.25rem] space-y-1.5 text-[1.05rem] leading-snug text-zinc-600">
                  {oferta.detalhes.map((detalhe) => (
                    <li key={detalhe}>{detalhe}</li>
                  ))}
                </ul>
                <button className="mt-auto w-fit rounded-2xl bg-red-800 px-8 py-2 text-[2rem] leading-none text-white">
                  Ver Oferta
                </button>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <button className="rounded-2xl bg-red-800 px-10 py-4 text-4xl text-white md:text-[2.2rem]">
              Ver todas as ofertas
            </button>
          </div>
        </section>

        <section id="sobre" className="mx-auto w-full max-w-7xl px-5 pb-14 md:px-6">
          <h2 className="text-5xl font-semibold md:text-5xl dark:text-[#fffafa]">Empresas Parceiras</h2>
          <p className="mt-2 text-lg text-zinc-600 dark:text-[#d9d9d9]">Marcas que confiam nas soluções da Potenze.</p>

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
                    idx % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'
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
  )
}

export default Home
