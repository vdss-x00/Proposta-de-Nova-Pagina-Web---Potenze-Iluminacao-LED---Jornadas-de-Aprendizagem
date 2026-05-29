import Potence1 from "../assets/Potence1.png";
import Potence2 from "../assets/Potence2.png";

function Sobre() {
  return (
    <div className="min-h-screen py-20 px-6 bg-zinc-100 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa]">

      {/* HERO / INTRO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src={Potence1}
            alt="Potenze"
            className="rounded-xl shadow-xl"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold mb-8">Sobre a Potenze</h1>

          <p className="text-lg underline mb-6">
            Nós entregamos soluções de iluminação industrial que atendem as
            situações mais desafiadoras e exigentes.
          </p>

          <p className="text-xl leading-relaxed">
            Com foco em tecnologia e durabilidade, oferecemos produtos com
            eficiência energética, alta resistência e baixo custo de manutenção.
          </p>
        </div>
      </section>

      {/* MISSÃO / VISÃO / VALORES */}
      <section className="max-w-6xl mx-auto mt-28 grid md:grid-cols-3 gap-10">
        <div className="rounded-xl border border-zinc-300 dark:border-zinc-700 p-6">
          <h3 className="text-2xl font-bold mb-3">Missão</h3>
          <p className="text-lg leading-relaxed">
            Desenvolver soluções de iluminação eficientes, seguras e duráveis,
            contribuindo para a produtividade e segurança de ambientes industriais
            e comerciais.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-300 dark:border-zinc-700 p-6">
          <h3 className="text-2xl font-bold mb-3">Visão</h3>
          <p className="text-lg leading-relaxed">
            Ser referência nacional em iluminação LED industrial, reconhecida pela
            inovação, qualidade e confiabilidade dos produtos.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-300 dark:border-zinc-700 p-6">
          <h3 className="text-2xl font-bold mb-3">Valores</h3>
          <p className="text-lg leading-relaxed">
            Compromisso com qualidade, ética, inovação constante e foco total na
            satisfação do cliente e parceiros.
          </p>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="max-w-6xl mx-auto mt-28">
        <h2 className="text-4xl font-bold mb-6">Nossa história</h2>

        <p className="text-xl leading-relaxed mb-4">
          A Potenze nasceu em 2014 em Curitiba com o objetivo de suprir uma
          demanda crescente por iluminação industrial de alta performance no Brasil.
        </p>

        <p className="text-xl leading-relaxed mb-4">
          Desde então, evoluímos constantemente em tecnologia, processos e
          engenharia, acompanhando as necessidades de indústrias, centros de
          distribuição, grandes estruturas logísticas e projetos especiais.
        </p>

        <p className="text-xl leading-relaxed">
          Hoje, somos reconhecidos pela robustez, eficiência e confiabilidade das
          nossas soluções em LED.
        </p>
      </section>

      {/* DIFERENCIAIS */}
      <section className="max-w-6xl mx-auto mt-28 grid md:grid-cols-2 gap-10">
        <div className="rounded-xl border border-zinc-300 dark:border-zinc-700 p-6">
          <h3 className="text-2xl font-bold mb-3">Por que escolher a Potenze?</h3>

          <ul className="space-y-3 text-lg list-disc pl-5">
            <li>Alta durabilidade em ambientes industriais severos</li>
            <li>Eficiência energética e redução de custos operacionais</li>
            <li>Produtos com foco em performance e segurança</li>
            <li>Suporte técnico especializado</li>
            <li>Soluções para diversos segmentos industriais</li>
          </ul>
        </div>

        <div className="rounded-xl border border-zinc-300 dark:border-zinc-700 p-6">
          <h3 className="text-2xl font-bold mb-3">Segmentos atendidos</h3>

          <p className="text-lg leading-relaxed">
            Atuamos em diversos setores, como indústrias, logística, agroindústria,
            construção civil, centros de distribuição, iluminação pública e projetos
            personalizados de grande escala.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-6xl mx-auto mt-28 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Pronto para iluminar seu projeto?
        </h2>

        <p className="text-xl mb-8">
          Fale com nossa equipe e descubra a solução ideal para sua necessidade.
        </p>

        <a
          href="/orcamento"
          className="inline-block bg-[#8f1a22] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Solicitar orçamento
        </a>
      </section>

    </div>
  );
}

export default Sobre;