import Home_Art from "@/articles/home";


export default function Home() {
  return (
    <div className="text-center p-5">
<div className="flex justify-center px-4 pb-10">
  <div className="max-w-4xl">
    <h1 className="header-text-blue font-bold text-3xl text-center">
      Trening próbny!
    </h1>
    <p className="font-semibold text-xl text-justify">
      Trening próbny - <span className="text-red-500">23.09.2025 w Szkole Podstawowej w Turośni Kościelnej!</span><br/>
      <span className="text-red-500">Godzina 18:00 - mała sala gimnastyczna.</span><br/>
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
