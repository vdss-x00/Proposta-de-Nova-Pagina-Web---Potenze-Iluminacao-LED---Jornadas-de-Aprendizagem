function Carrinho() {
    return (
        <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900 dark:bg-[#303030] dark:text-[#fffafa]">
            <div className="min-h-screen w-full flex flex-col mx-auto max-w-6xl py-12 px-6 text-center justify-center items-center">
                <h1 className="text-5xl font-bold">Seu carrinho está vazio</h1>
                <h3 className="text-2xl mt-4 text-zinc-600 dark:text-zinc-400">
                    Navegue pela nossa seção de produtos e adicione um item ao seu carrinho.
                </h3>
                <button className="mt-6 rounded-lg bg-[#9f1523] px-6 py-3 text-white hover:bg-[#7a1019] transition-colors">
                    Ver Produtos
                </button>
            </div>
        </div>
    );
}

export default Carrinho