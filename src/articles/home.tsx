import Button from "@/components/Button";
import Image from "next/image";

export default function Home_Art(){
    return(
        <>
        <div className="text-center px-4">
            <h1 className="header-text-blue font-bold text-3xl">Witaj w naszym dojo!</h1>
            <p className="font-semibold text-xl">
                Trenuj tradycyjne karate Goju-ryu prosto z Okinawy!
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-10 max-w-6xl mx-auto">
                <Image
                className="p-3 max-w-full h-auto rounded-4xl"
                src={`/images/karate_kid.jpg`}
                height={640}
                width={427}
                loading="lazy"
                alt="Dziewczyna w karate-gi z pomarańczowym pasem robiąca tornado kick w dojo karate"
                />
                <p className="p-3 text-lg text-center md:text-justify">
                Jesteśmy częścią organizacji Traditional Okinawan Goju-ryu Karate-do Federation (TOGKF), która kultywuje autentyczną wartość i techniki okinawskiego karate.
                <br />
                Ćwiczymy karate w Białymstoku i okolicach!
                <br />
                Niezależnie od wieku czy poziomu zaawansowania – znajdziesz tu miejsce dla siebie.
                </p>
            </div>

            <div className="m-5">
                <h1 className="text-3xl header-text-blue font-bold">
                Tradycja. Dyscyplina. Rozwój.
                </h1>

                <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 py-10 max-w-6xl mx-auto">
                    <Image
                        className="p-3 max-w-full h-auto rounded-4xl"
                        src={`/images/karate_practice.jpg`}
                        height={640}
                        width={427}
                        loading="lazy"
                        alt="Dwie dziewczyny w karate-gi jedna z niebieskim, a druga z czerwonym pasem. Jedna wykonuje blok ko age uke, a druga uderza oi tsuki jodan. Obie są w pozycji zenkutsu dachi."
                    />
                    <p className="p-3 text-lg text-center md:text-justify">
                        Karate to więcej niż sztuka walki. To droga, która uczy pokory, szacunku do innych, ale także pewności siebie.
                        <br />
                        W naszym klubie w Białymstoku trenujemy według oryginalnych zasad przekazywanych przez mistrzów z Okinawy.
                        <br />
                        Dołącz do społeczności, która ćwiczy nie tylko ciało, ale też i ducha.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-10 max-w-6xl mx-auto">
                    <Image
                        className="p-3 max-w-full h-auto rounded-4xl"
                        src={`/images/morio_higaonna.jpg`}
                        loading="lazy"
                        width={640}
                        height={427}
                        alt="Sensei Morio Higaonna, wykonujący morote ko uke z kata Sanseru. Ma na sobie białe karate-gi oraz czarny pas w karate goju-ryu."
                    />
                    <div>
                        <h1 className="text-3xl header-text-blue font-bold">
                            Dlaczego warto?
                        </h1>
                        <p className="p-3 text-lg text-center md:text-justify">
                            Tradycyjne karate goju-ryu można ćwiczyć w każdym wieku. Sensei Morio Higaonna (na zdjęciu) ma 86 lat i dalej jest sprawny. Pomagamy zadbać o zdrowie, sprawność oraz mobilność w każdym wieku bez względu na stopień zaawansowania.
                        </p>
                        <Button label="Dołącz do nas!" href="/kontakt"/>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}