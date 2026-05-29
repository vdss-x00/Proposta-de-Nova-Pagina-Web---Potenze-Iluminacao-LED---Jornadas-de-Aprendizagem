import backgroundHero from "../assets/Background.svg";

function Footer() {
  return (
    <footer
      id="contato"
      className="px-5 py-12 text-white md:px-6"
      style={{
        backgroundColor: "#9f1523",
        backgroundImage: `linear-gradient(rgba(159, 21, 35, 0.62), rgba(159, 21, 35, 0.62)), url(${backgroundHero})`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: "210px auto",
      }}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3">

         <div className="space-y-3">
          <p className="text-xl leading-relaxed mt-10 mb-10">
            Potenze Industria e Comercio de Iluminação LTDA
          </p>

          <p className="text-xl mt-10 mb-10">
            <strong>CNPJ:</strong> 34.355.011/0001-06
          </p>

          <p className="text-xl mb-10">
            Rua Victor Modesto de Oliveira, 165 A – Curitiba, PR
          </p>

          <p className="text-xl">
            <strong>CEP:</strong> 81.870-210
          </p>
        </div>

        <div className="space-y-3">
          <p className="mt-4 text-2xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
              className="h-8 w-8 shrink-0"
            >
              <path
                d="M24 0C37.2547 0 48 10.7453 48 24C48 37.2547 37.2547 48 24 48C19.82 48 15.8904 46.9314 12.4678 45.0527L0 48L3.19629 35.9736C1.16368 32.4497 0 28.3606 0 24C6.76533e-07 10.7453 10.7453 6.76489e-07 24 0ZM24 4.29785C13.1194 4.29785 4.299 13.1185 4.29883 23.999C4.29883 28.1943 5.6104 32.083 7.8457 35.2783L5.7793 42.3193L13.1455 40.4434C16.2581 42.5026 19.9887 43.7012 24 43.7012V43.7002C34.8807 43.7002 43.7012 34.8797 43.7012 23.999C43.701 13.1185 34.8806 4.29785 24 4.29785ZM17.4043 12.1562C17.6982 12.1324 17.9685 12.3028 18.0938 12.5693L20.8311 18.376C20.9604 18.6506 20.9041 18.9777 20.6895 19.1924L18.6484 21.2324C18.2072 21.6737 18.0781 22.361 18.3818 22.9062C19.1265 24.2415 20.1281 25.5276 21.2881 26.7109C22.4714 27.8709 23.7574 28.8732 25.0928 29.6172C25.6381 29.9212 26.3246 29.7919 26.7666 29.3506L28.8076 27.3096C29.0222 27.0953 29.3486 27.0382 29.623 27.168L35.4297 29.9053C35.6964 30.0306 35.8677 30.3014 35.8438 30.5947C35.7811 31.3587 35.4741 32.8901 34.1016 34.2627C30.227 38.1372 23.2692 33.7536 22.9854 33.584C21.2741 32.6647 19.6483 31.4347 18.1064 29.8936C16.5651 28.3522 15.3344 26.725 14.415 25.0137C14.2445 24.7301 9.86133 17.7735 13.7363 13.8984C15.109 12.5258 16.6403 12.2189 17.4043 12.1562Z"
                fill="white"
              />
            </svg>
            3373-9799
          </p>
          <p className="text-2xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
              className="h-8 w-8 shrink-0"
            >
              <path
                d="M6.8001 32.8L2.2001 28.3C1.8001 27.9 1.6001 27.4333 1.6001 26.9C1.6001 26.3667 1.8001 25.9 2.2001 25.5C5.13343 22.3333 8.51676 19.9583 12.3501 18.375C16.1834 16.7917 20.0668 16 24.0001 16C27.9334 16 31.8084 16.7917 35.6251 18.375C39.4418 19.9583 42.8334 22.3333 45.8001 25.5C46.2001 25.9 46.4001 26.3667 46.4001 26.9C46.4001 27.4333 46.2001 27.9 45.8001 28.3L41.2001 32.8C40.8334 33.1667 40.4084 33.3667 39.9251 33.4C39.4418 33.4333 39.0001 33.3 38.6001 33L32.8001 28.6C32.5334 28.4 32.3334 28.1667 32.2001 27.9C32.0668 27.6333 32.0001 27.3333 32.0001 27V21.3C30.7334 20.9 29.4334 20.5833 28.1001 20.35C26.7668 20.1167 25.4001 20 24.0001 20C22.6001 20 21.2334 20.1167 19.9001 20.35C18.5668 20.5833 17.2668 20.9 16.0001 21.3V27C16.0001 27.3333 15.9334 27.6333 15.8001 27.9C15.6668 28.1667 15.4668 28.4 15.2001 28.6L9.4001 33C9.0001 33.3 8.55843 33.4333 8.0751 33.4C7.59176 33.3667 7.16676 33.1667 6.8001 32.8ZM12.0001 22.9C11.0334 23.4 10.1001 23.975 9.2001 24.625C8.3001 25.275 7.36676 26 6.4001 26.8L8.4001 28.8L12.0001 26V22.9ZM36.0001 23V26L39.6001 28.8L41.6001 26.9C40.6334 26.0333 39.7001 25.2833 38.8001 24.65C37.9001 24.0167 36.9668 23.4667 36.0001 23Z"
                fill="white"
              />
            </svg>
            (41) 3373-9799
          </p>
          <p className="text-2xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
              className="h-8 w-8 shrink-0"
            >
              <path
                d="M44 12C44 9.8 42.2 8 40 8H8C5.8 8 4 9.8 4 12M44 12V36C44 38.2 42.2 40 40 40H8C5.8 40 4 38.2 4 36V12M44 12L24 26L4 12"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            vendas@potenze.com.br
          </p>

          <div className="mt-8">
            <h4 className="text-xl font-semibold">
              Cadastre-se na nossa newsletter!
            </h4>

            <form className="mt-4 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Nome"
                className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-white placeholder:text-white/70 outline-none transition focus:border-white"
              />

              <input
                type="email"
                placeholder="Email"
                className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-white placeholder:text-white/70 outline-none transition focus:border-white"
              />

              <button
                type="submit"
                className="rounded-full bg-white px-5 py-3 font-semibold text-[#9f1523] transition hover:bg-zinc-200"
              >
                Quero receber novidades
              </button>
            </form>
          </div>
        </div>

       
        <div className="space-y-3 flex items-center flex-col">
          <h3 className="text-4xl font-bold">Onde nos encontrar</h3>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/potenzeiluminacao/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Potenze"
              className="rounded-md p-1 transition hover:bg-white/10"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/potenze-iluminacao-led/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn da Potenze"
              className="rounded-md p-1 transition hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
                <path d="M6.6 8.7H3.3V20h3.3V8.7ZM5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm15.7 10.2c0-3.4-1.8-5-4.3-5-2 0-2.8 1.1-3.3 1.9V8.7h-3.3V20h3.3v-6c0-1.6.3-3.2 2.2-3.2 1.9 0 1.9 1.8 1.9 3.3V20h3.4v-6.8Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/potenzeiluminacaoled"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook da Potenze"
              className="rounded-md p-1 transition hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="h-9 w-9"
              >
                <g clip-path="url(#clip0_17_61)">
                  <path
                    d="M24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24C48 10.7453 37.2547 0 24 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_61">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-700 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.4241456841437!2d-49.29385072533892!3d-25.5242449366259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfc9b22787c33%3A0x49c7cb55b7ff628f!2sRua%20Victor%20Modesto%20de%20Oliveira%2C%20165%20-%20Pinheirinho%2C%20Curitiba%20-%20PR%2C%2081870-310!5e0!3m2!1spt-PT!2sbr!4v1780077638224!5m2!1spt-PT!2sbr"
              className="w-full h-[250px]"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
