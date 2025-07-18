import Button from "@/components/Button";

export default function Home_Art(){
    return(
        <>
        <div className="text-center px-4">
            <h1 className="header-text-blue font-bold text-3xl">Witaj w naszym dojo!</h1>
            <p className="font-semibold text-xl">
                Trenuj tradycyjne karate Goju-ryu prosto z Okinawy!
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-10 max-w-6xl mx-auto">
                <img
                className="p-3 max-w-full h-auto"
                src="https://placehold.co/600x400"
                loading="lazy"
                alt="Karate dojo"
                />
                <p className="p-3 text-lg text-center md:text-left">
                Jesteśmy częścią organizacji Traditional Okinawan Goju-ryu Karate-do Federation (TOGKF), która kultywuje autentyczną wartość i techniki okinawskiego karate.
                <br />
                Niezależnie od wieku czy poziomu zaawansowania – znajdziesz tu miejsce dla siebie.
                </p>
            </div>

            <div className="m-5">
                <h1 className="text-3xl header-text-blue font-bold">
                Tradycja. Dyscyplina. Rozwój.
                </h1>

                <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 py-10 max-w-6xl mx-auto">
                    <img
                        className="p-3 max-w-full h-auto"
                        src="https://placehold.co/600x400"
                        loading="lazy"
                        alt="Karate mistrz"
                    />
                    <p className="p-3 text-lg text-center md:text-right">
                        Karate to więcej niż sztuka walki. To droga, która uczy pokory, szacunku do innych, ale także pewności siebie.
                        <br />
                        W naszym klubie trenujemy według oryginalnych zasad przekazywanych przez mistrzów z Okinawy.
                        <br />
                        Dołącz do społeczności, która ćwiczy nie tylko ciało, ale też i ducha.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 py-10 max-w-6xl mx-auto">
                    <Button label="Dołącz do nas!" href="/kontakt"/>
                    <img
                        className="p-3 max-w-full h-auto"
                        src="https://placehold.co/600x400"
                        loading="lazy"
                        alt="Karatecy"
                    />
                </div>
            </div>
        </div>
        </>

    )
}