import backgroundHero from '../assets/Background.svg';

function Footer(){
    return (
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
    )
};

export default Footer;