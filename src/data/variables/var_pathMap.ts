const pathMap = new Map<string, string>();

// Mapping the motto key with desired text displayed on Motto section (see: MottoImage)
pathMap.set("/", "Strona główna");
pathMap.set("/aktualnosci", "Aktualności");
pathMap.set("/goju-ryu", "O stylu");
pathMap.set("/goju-ryu/kata", "Kata");
pathMap.set("/goju-ryu/sandangi", "San dan gi");
pathMap.set("/kontakt", "Kontakt");
pathMap.set("/o-nas", "O nas");
pathMap.set("/do-pobrania", "Pliki do pobrania");
pathMap.set("/pytania", "Pytania i odpowiedzi");
pathMap.set("/regulamin", "Regulamin");
pathMap.set("/treningi", "Treningi");

export default pathMap;
