export type Training = {
    day : 'Poniedziałek' | 'Wtorek' | 'Środa' | 'Czwartek' | 'Piątek' | 'Sobota' | 'Niedziela',
    group? : 'Wszyscy' | 'Zaawansowana' | 'Początkująca' | 'Przedszkole'
    startHour : string,
    endHour : string,
    location? : 'SP Markowszczyzna'
}
