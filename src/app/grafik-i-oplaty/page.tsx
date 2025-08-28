export default function Prices(){
    return (
        <main className="p-5">
            <section>
                <article>
                    <h2 className="text-3xl text-center font-semibold header-text-blue">Grafik i opłaty</h2>
                    <section className="w-full overflow-x-auto mx-auto my-5">
                        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-xl shadow-md my-5">
                            <h1 className="font-semibold text-xl">SP Turośń Kościelna</h1>
                            <p><b>Poniedziałki</b> i <b>Środy</b> od 18:00 do 19:00</p>
                            <p>120zł miesięcznie</p>
                        </article>
                        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-xl shadow-md my-5">
                            <h1 className="font-semibold text-xl">Świetlica Wiejska w Niewodnicy Koryckiej</h1>
                            <p><b>Piątki</b> od 19:00 do 20:30</p>
                            <p>60zł miesięcznie</p>
                        </article>
                    </section>
                </article>
            </section>
        </main>
    )
}