import contact_info from "@/data/articles/ArtData_Contact"

export default function Contact_Art(){
    return(
        <main className="p-4">
            <h1 className="text-2xl text-center">{contact_info.message}</h1>
            <div className="mx-auto max-w-6xl p-5 text-lg">
                <p className="text-left"><b>Telefon</b>: {contact_info.phone}</p>
                <p className="text-left"><b>Adres</b>: {contact_info.address}</p>
                <p className="text-left"><b>E-mail</b>: {contact_info.email}</p>
            </div>
        </main>
    )
}