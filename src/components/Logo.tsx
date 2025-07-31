export default function Logo(){
    return(
        <section className="flex mx-auto nav-bg-dark-blue justify-center">
            <a href="/" className="items-center align-middle">
                <img className=" mx-auto max-w-full h-auto" src={`/images/logo_karate.png`} loading="lazy" width={120}/>
                <h1 className="text-lg md:text-xl nav-text-white-no-hover font-bold">Klub Karate Goju-ryu Księżyno</h1>
            </a>
        </section>
    )
}