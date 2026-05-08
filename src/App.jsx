function App() {
  const ofertas = [
    {
      nome: 'Luminaria Industrial',
      detalhes: ['Potencia: 15W | 30W', 'Grau de Protecao: IP69K'],
    },
    {
      nome: 'Refletor Ultra',
      detalhes: ['Potencia: de 50W ate 900W', 'Grau de Protecao: IP67'],
    },
    {
      nome: 'Luminaria High Bay',
      detalhes: ['Potencia: 100W | 150W | 200W', 'Grau de Protecao: IP67'],
    },
  ]

  const parceiros = [
    'Imcopa',
    'GE',
    'Bom Jesus',
    'ArcelorMittal',
    'Facchini',
    'Agco',
    'Jasmine',
    'JBS',
    'Bosch',
    'Irani',
  ]

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <p className="text-2xl font-bold tracking-tight text-red-800">Potenze</p>
        <nav className="hidden gap-8 text-lg md:flex">
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre</a>
          <a href="#orcamento">Orcamento</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="bg-red-800 px-6 py-20 text-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-5xl font-extrabold">Uma Ideia Brilhante</h1>
              <p className="mt-4 max-w-lg text-xl">
                Referencia no mercado de iluminacao industrial por mais de uma decada.
              </p>
            </div>
            <button className="rounded-2xl bg-white px-10 py-4 text-2xl font-medium text-red-800">
              Conheca mais
            </button>
          </div>
        </section>

        <section id="produtos" className="mx-auto w-full max-w-6xl px-6 py-14">
          <h2 className="mb-8 text-4xl font-semibold">Confira algumas de nossas ofertas:</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {ofertas.map((oferta) => (
              <article
                key={oferta.nome}
                className="rounded-2xl border border-red-700 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 aspect-[4/3] rounded-xl bg-zinc-200" />
                <h3 className="text-4xl font-bold">{oferta.nome}</h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                  {oferta.detalhes.map((detalhe) => (
                    <li key={detalhe}>{detalhe}</li>
                  ))}
                </ul>
                <button className="mt-6 rounded-2xl bg-red-800 px-8 py-2 text-4xl text-white">
                  Ver Oferta
                </button>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button className="rounded-2xl bg-red-800 px-10 py-4 text-3xl text-white">
              Ver todas as ofertas
            </button>
          </div>
        </section>

        <section id="sobre" className="mx-auto w-full max-w-6xl px-6 pb-16">
          <h2 className="mb-7 text-5xl font-semibold">Empresas Parceiras</h2>
          <div className="grid gap-4 rounded-xl bg-white p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {parceiros.map((parceiro) => (
              <div
                key={parceiro}
                className="flex h-20 items-center justify-center rounded-lg border border-zinc-200 text-xl font-medium"
              >
                {parceiro}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contato" className="bg-red-800 px-6 py-12 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-5xl font-bold">Contato</h3>
            <p className="text-4xl">(41) 3373-9799</p>
            <p className="text-4xl">(41) 3373-9799</p>
            <p className="text-4xl">vendas@potenze.com.br</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-5xl font-bold">Onde nos encontrar</h3>
            <p className="text-4xl">Instagram | LinkedIn</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
