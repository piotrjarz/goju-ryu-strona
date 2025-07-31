interface IContactInfo{
    phone       :   string | string[],
    email?      :   string,
    nip?        :   string,
    krs?        :   string,
    address     :   string,
    message?    :   string,
    company?    :   string,
}

const contact_info : IContactInfo = {
    phone       :       "+48 693 593 545 / +48 504 898 001",
    address     :       "ul. Alberta 11a, 16-001 Księżyno",
    message     :       "W razie wszelkich pytań prosimy o kontakt - z chęcią odpowiemy na państwa pytania!",
    email       :       "firma.hasu@gmail.com",
    company     :       "Hasu Sp. z o.o.",
}

export default contact_info;