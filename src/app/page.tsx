import Home_Art from "@/articles/home";


export default function Home() {
  return (
    <div className="text-center p-5">
<div className="flex justify-center px-4 pb-10">
  <div className="max-w-4xl">
    <h1 className="header-text-blue font-bold text-3xl text-center">
      Treningi - czas start!
    </h1>
    <p className="font-semibold text-xl text-justify">
      Zaczynamy - <span className="text-red-500">we wrześniu 2026 - ul. Szkolna 7, Szkoła Podstawowa w Księżynie</span><br/>
      Godzina <span className="text-red-500">17:00 do 18:00 - sala gimnastyczna.</span><br/>
      Cena podstawowa - <span className="text-red-500">140zł za miesiąc</span>.<br/>
      Możliwość zniżek dla rodzin.<br/>
      Zapraszamy wszystkich chętnych do spróbowania swoich sił w karate Goju-ryu!<br/>
      Wystarczy wygodny strój sportowy i dobry humor!<br/>
      Do zobaczenia na macie!
    </p>
  </div>
</div>

      <Home_Art/>
    </div>
  );
}
