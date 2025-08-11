export default function FilesToDownload(){
    return(
        <main className="p-5">
            <section>
                <article>
                    <h2 className="text-3xl text-center font-semibold header-text-blue">Pliki do pobrania</h2>
                    <div className="text-left w-4xl max-w-4xl">
                        <a className="flex flex-row py-2">Regulamin klubu</a>
                        <a className="flex flex-row text-left py-2">Deklaracja członkowska</a>
                        <a className="flex flex-row py-2">Deklaracja RODO</a>
                        <a className="flex flex-row py-2">Standardy ochrony małoletnich</a>
                    </div>
                </article>
            </section>
        </main>
    )
}