import Accordion from "@/components/Accordion";

export default function FAQ(){
    return(
        <div className="text-black text-center p-5">
            <h1 className="text-3xl font-semibold header-text-blue p-5">Często zadawane pytania</h1>

            <div className="my-5">
                <Accordion title="Gdzie i kiedy odbywają się treningi?">
                    Na razie jeszcze tego nie ustaliliśmy. Prosimy o cierpliwość :)
                </Accordion>

                <Accordion title="Co muszę zabrać na pierwszy trening?">
                    Na pierwszy trening wystarczy strój sportowy i woda. Potem, jeśli zajęcia się spodobają, dobrze będzie mieć karate-gi oraz biały pas. Oczywiście, jeśli wymienione rzeczy już posiadasz, to nic nie stoi na przeszkodzie by je zabrać na pierwszy trening.
                </Accordion>

                <Accordion title="Czy nie jestem za stary by zaczynać karate?">
                    Nie. Najlepszą porą by zadbać o swoje zdrowie i sprawność jest chwila obecna. Nie ma górnej granicy wiekowej. Każdy na treningu robi tyle, ile może.
                </Accordion>
                
                <Accordion title="Jaka jest cena uczestnictwa?">
                    Na razie jeszcze tego nie ustaliliśmy. Prosimy o cierpliwość :)
                </Accordion>

                <Accordion title="Czy jeśli miałem gdzieś indziej jakiś stopień to mi go uznacie?">
                    Każdy przypadek rozpatrujemy indywidualnie. Po więcej informacji zgłoś się do trenera.
                </Accordion>

                <Accordion title="Dlaczego wybrać goju-ryu?">
                    Goju-ryu jest kompletnym stylem karate. Zawiera rzuty, obalenia, dźwignie, uderzenia i kopnięcia. Ponadto w organizacji <b>TOGKF Polska</b> dla każdego coś się znajdzie - zawody w kata, kumite, sandangi, renzoku bunkai itp. Oferujemy także seminaria z mistrzami zza granicy (w tym z Japonii).
                </Accordion>
            </div>
        </div>
    )
}