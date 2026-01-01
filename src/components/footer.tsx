import Image from "next/image"

export default function Footer(){
    return(
        <footer className="nav-bg-dark-blue p-4 ">
            <div className="flex justify-center align-middle items-center">
                <Image 
                alt="Logo organizacji TOGKF - Traditional Okinawan Goju-ryu Karate-do Federation" 
                className="mx-5" 
                src={`/images/logo_togkf.png`} 
                loading="lazy" 
                height={100}
                width={100}/>
                <h3 className="nav-text-white-no-hover text-2xl text-center mx-5">Jesteśmy stowarzyszeni w TOGKF Polska</h3>
            </div>
            <p className="text-center nav-text-white-no-hover">Made with &lt;3 by: <a href="https://github.com/piotrjarz" target="_blank" className="nav-text-white">Piotr Jarzęmbski</a></p>
        </footer>
    )
}