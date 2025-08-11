import contact_info from "@/data/articles/ArtData_Contact"
import Image from "next/image"

export default function Contact_Art(){
    return(
        <main className="p-4">
            <h1 className="text-2xl text-center">{contact_info.message}</h1>
            <div className="mx-auto max-w-6xl p-5 text-lg">
                <p className="text-left"><b>{contact_info.company}</b></p>
                <p className="text-left"><b>Telefon</b>: {contact_info.phone}</p>
                <p className="text-left"><b>Adres</b>: {contact_info.address}</p>
                <p className="text-left"><b>E-mail</b>: <a className="header-text-blue" href={`mailto:${contact_info.email}`}>{contact_info.email}</a></p>
            </div>
            <div className="p-4">
                <h2 className="text-2xl text-center">Odwiedź nasze media społecznościowe!</h2>
                {contact_info.social_media?.map(sm => (
                    <a 
                    key={sm.media} 
                    target="_blank"
                    href={sm.url}
                    >
                        <div className="flex flex-row items-center header-text-blue">
                            <Image src='/images/facebook.svg' width={40} height={40} alt="Logo Facebooka" />
                            {sm.media}
                        </div>
                    </a>
                ))}
            </div>
        </main>
    )
}