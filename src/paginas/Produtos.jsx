import { useState } from "react";
import HighBay from "../assets/high_bay.png";
import Refletor from "../assets/refletor_ultra.png";
import EX from "../assets/luminaria_ex.png";
import Industriais from "../assets/luminaria_industrial.png";
import IlumPubli from "../assets/luminaria_publica.png";
import Lineares from "../assets/linear_ip69k.png";
import Header from "../componentes/Header";

function Produtos() {
  const [activeIndex, setActiveIndex] = useState(null);

  const botoes = [
    { img: HighBay, label: "High Bay" },
    { img: Refletor, label: "Refletores" },
    { img: EX, label: "EX" },
    { img: Industriais, label: "Industriais" },
    { img: IlumPubli, label: "Iluminação Pública" },
    { img: Lineares, label: "Lineares" },
  ];

  return (
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa]">
      <Header />

      <h2 className="text-2xl font-bold mb-10 mt-20 ml-10 dark:text-[#fffafa]">
        Categorias
      </h2>

      <section className="space-evenly flex flex-wrap gap-8 justify-center dark:text-[#fffafa]">
        {botoes.map((botao, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="cursor-pointer w-[180px] flex flex-col items-center"
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
    </div>
  );
}

export default Produtos;
