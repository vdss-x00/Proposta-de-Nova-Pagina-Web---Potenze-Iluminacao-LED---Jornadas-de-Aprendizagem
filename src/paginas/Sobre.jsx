```jsx
import Potence1 from '../assets/sobre/Potence1.png'
import Potence2 from '../assets/sobre/Potence2.png'

function Sobre() {

    return (

        <main className="bg-[#efefef] min-h-screen py-20 px-6">

            <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                <div>
                    <img
                        src={Potence1}
                        alt="Potenze"
                        className="rounded-xl shadow-xl"
                    />
                </div>

                <div>

                    <h1 className="text-5xl font-bold mb-8">
                        Sobre a Potenze
                    </h1>

                    <p className="text-lg underline mb-6">
                        Nós entregamos soluções de iluminação industrial
                        que atendem as situações mais desafiadoras e exigentes.
                    </p>

                    <p className="text-xl leading-relaxed">
                        Com foco em tecnologia e durabilidade, oferecemos
                        produtos com eficiência energética, alta resistência
                        e baixo custo de manutenção.
                    </p>

                </div>

            </section>

            <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mt-32">

                <div>

                    <h2 className="text-5xl font-bold mb-8">
                        Qualidade e Tradição
                    </h2>

                    <p className="text-xl leading-relaxed">
                        A Potenze foi fundada em 2014 na capital paranaense,
                        Curitiba. Hoje somos líderes do segmento de luminárias
                        industriais de alta performance.
                    </p>

                </div>

                <div>

                    <img
                        src={Potence2}
                        alt="Fábrica Potenze"
                        className="rounded-xl shadow-xl"
                    />

                </div>

            </section>

        </main>

    );
}

export default Sobre
```
