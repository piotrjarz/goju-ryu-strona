type SocialMedia = {
    media : string,
    url : string
}

interface IContactInfo{
    phone       :   string | string[],
    email?      :   string,
    nip?        :   string,
    krs?        :   string,
    address     :   string,
    message?    :   string,
    company?    :   string,
    social_media? : SocialMedia[]

}

const contact_info : IContactInfo = {
    phone           :       "+48 693 593 545 / +48 504 898 001",
    address         :       "ul. Alberta 11a, 16-001 Księżyno",
    message         :       "W razie wszelkich pytań prosimy o kontakt - z chęcią odpowiemy na państwa pytania!",
    email           :       "firma.hasu@gmail.com",
    company         :       "Hasu Sp. z o.o.",
    social_media    : [
        { media: "Facebook", url: "https://www.facebook.com/profile.php?id=61579070199544" }
    ]
}

export default contact_info;