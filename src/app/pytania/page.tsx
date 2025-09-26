import Accordion from "@/components/Accordion";

export default function FAQ(){
    return(
        <div className="text-black text-center p-5">
            <h1 className="text-3xl font-semibold header-text-blue p-5">Często zadawane pytania</h1>

            <div className="my-5">
                <Accordion title="Gdzie i kiedy odbywają się treningi?">
                    Treningi odbywają się w Szkole Podstawowej w Juchnowcu Górnym, ul. Szkolna 5.<br/>W każdy wtorek i czwartek o godzinie 18:30-19:15 w małej sali gimnastycznej.
                </Accordion>

                <Accordion title="Co muszę zabrać na pierwszy trening?">
                    Na pierwszy trening wystarczy strój sportowy i woda. Potem, jeśli zajęcia się spodobają, dobrze będzie mieć karate-gi oraz biały pas. Oczywiście, jeśli wymienione rzeczy już posiadasz, to nic nie stoi na przeszkodzie by je zabrać na pierwszy trening.
                </Accordion>

                <Accordion title="Czy nie jestem za stary by zaczynać karate?">
                    Nie. Najlepszą porą by zadbać o swoje zdrowie i sprawność jest chwila obecna. Nie ma górnej granicy wiekowej. Każdy na treningu robi tyle, ile może.
                </Accordion>
                
                <Accordion title="Jaka jest cena uczestnictwa?">
                    Cena za miesiąc treningów to <b>140zł</b>. W cenie zawarta jest opłata za członkostwo w organizacji TOGKF Polska (100zł rocznie) - co uprawnia do brania udziału w seminariach i zawodach sportowych.
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