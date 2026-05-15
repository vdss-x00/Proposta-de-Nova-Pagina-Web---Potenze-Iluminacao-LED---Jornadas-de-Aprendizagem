import highBay from './assets/high_bay.png'
import highBayModular from './assets/high_bay_modular.png'
import linearIp66 from './assets/linear_ip66.png'
import linearIp69k from './assets/linear_ip69k.png'
import luminariaDeco from './assets/luminaria_deco.png'
import luminariaEx from './assets/luminaria_ex.png'
import luminariaFrigorifico from './assets/luminaria_frigorifico.png'
import luminariaIndustrial from './assets/luminaria_industrial.png'
import luminariaPublica from './assets/luminaria_publica.png'
import refletorUltra from './assets/refletor_ultra.png'
import backgroundHero from './assets/Background.svg'
import lampadaHero from './assets/Desenho de lampada.svg'

const parceirosRaw = import.meta.glob('./assets/empresas/*.png', {
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

function App() {
  const ofertas = [
    {
      nome: 'Luminaria Industrial',
      detalhes: ['Potencia: 15W | 30W', 'Grau de Protecao: IP69K'],
      imagem: luminariaIndustrial,
    },
    {
      nome: 'Refletor Ultra',
      detalhes: ['Potencia: de 50W ate 900W', 'Grau de Protecao: IP67'],
      imagem: refletorUltra,
    },
    {
      nome: 'Luminaria High Bay',
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
      nome: 'Luminaria Deco',
      detalhes: ['Aplicacao: projetos arquitetonicos e decorativos', 'Consulte modelos e temperaturas de cor'],
      imagem: luminariaDeco,
    },
    {
      nome: 'Luminaria Ex',
      detalhes: ['Aplicacao: areas classificadas', 'Consulte certificacoes e configuracoes'],
      imagem: luminariaEx,
    },
    {
      nome: 'Luminaria Frigorifico',
      detalhes: ['Aplicacao: camaras frias e frigorificos', 'Projetada para baixas temperaturas'],
      imagem: luminariaFrigorifico,
    },
    {
      nome: 'Luminaria Publica',
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
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900">
      <header className="bg-zinc-100">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 md:px-6">
          <img
            src="/LOGO-SF.png"
            alt="Potenze Iluminacao LED"
            className="h-10 w-auto lg:h-12"
          />

          <nav className="hidden items-center gap-8 text-lg font-medium md:flex">
            <a href="#produtos" className="flex items-center gap-1">
              Produtos
              <span className="mt-1 inline-block h-0 w-0 border-l-[7px] border-r-[7px] border-t-[8px] border-l-transparent border-r-transparent border-t-red-800" />
            </a>
            <a href="#sobre">Sobre</a>
            <a href="#orcamento">Orcamento</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <button className="relative text-zinc-900" aria-label="Carrinho">
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="9" cy="20" r="1.6" />
                <circle cx="18" cy="20" r="1.6" />
                <path d="M2 3h3l2.2 10h11l2-7.2H6.1" />
              </svg>
              <span className="absolute -right-1 -top-1 text-sm font-semibold text-red-700">o</span>
            </button>

            <div className="flex items-center gap-3 text-lg">
              <span>Tema:</span>
              <button
                className="rounded-xl border border-zinc-500 px-2.5 py-1.5 text-zinc-900"
                aria-label="Alternar tema"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2.3M12 19.7V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.3M19.7 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
                </svg>
              </button>
              <span className="mt-1 inline-block h-0 w-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-black" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section
          className="overflow-hidden px-6 text-white"
          style={{
            backgroundColor: '#9f1523',
            backgroundImage: `linear-gradient(rgba(159, 21, 35, 0.62), rgba(159, 21, 35, 0.62)), url(${backgroundHero})`,
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'center',
            backgroundSize: '210px auto',
          }}
        >
          <div className="mx-auto grid min-h-[260px] w-full max-w-6xl items-center gap-6 py-8 md:grid-cols-[1fr_auto_1fr] md:py-10">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-extrabold leading-none md:text-6xl">Uma Ideia Brilhante</h1>
              <p className="mt-3 max-w-md text-3xl leading-tight md:text-4xl">
                Referencia no mercado de iluminacao industrial por mais de uma decada.
              </p>
            </div>

            <img
              src={lampadaHero}
              alt="Ilustracao de lampada"
              className="mx-auto h-36 w-auto md:h-44"
            />

            <div className="flex justify-center md:justify-end">
              <button className="rounded-2xl bg-white px-10 py-3 text-xl font-medium text-red-800 md:text-2xl">
                Conheca mais
              </button>
            </div>
          </div>
        </section>

        <section id="produtos" className="mx-auto w-full max-w-7xl px-5 py-12 md:px-6">
          <h2 className="mb-8 text-4xl font-semibold md:text-5xl">Confira algumas de nossas ofertas:</h2>
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
          <h2 className="text-5xl font-semibold md:text-5xl">Empresas Parceiras</h2>
          <p className="mt-2 text-lg text-zinc-600">Marcas que confiam nas solucoes da Potenze.</p>

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

      <footer
        id="contato"
        className="px-5 py-12 text-white md:px-6"
        style={{
          backgroundColor: '#9f1523',
          backgroundImage: `linear-gradient(rgba(159, 21, 35, 0.62), rgba(159, 21, 35, 0.62)), url(${backgroundHero})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
          backgroundSize: '210px auto',
        }}
      >
        <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-4xl font-bold">Contato</h3>
            <p className="text-3xl">(41) 3373-9799</p>
            <p className="text-3xl">(41) 3373-9799</p>
            <p className="text-3xl">vendas@potenze.com.br</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-4xl font-bold">Onde nos encontrar</h3>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/potenzeled/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Potenze"
                className="rounded-md p-1 transition hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/potenze-ilumina-o-led/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn da Potenze"
                className="rounded-md p-1 transition hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
                  <path d="M6.6 8.7H3.3V20h3.3V8.7ZM5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm15.7 10.2c0-3.4-1.8-5-4.3-5-2 0-2.8 1.1-3.3 1.9V8.7h-3.3V20h3.3v-6c0-1.6.3-3.2 2.2-3.2 1.9 0 1.9 1.8 1.9 3.3V20h3.4v-6.8Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
