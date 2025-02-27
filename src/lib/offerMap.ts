import { NavbarInfo } from "@/data/navbar"; 

const createOfferMap = () => { 
    return new Map(  // Zwracamy nową mapę (obiekt, który przechowuje pary klucz-wartość)
      NavbarInfo.flatMap((category) =>  // Dla każdej kategorii w `NavbarInfo` (które przechowują dane nawigacji)
        category.offer?.map((offer) => [  // Dla każdej oferty w tej kategorii:
          offer.url.replace("/oferta/", ""),  // Zmieniamy URL, usuwając część "/oferta/" z początku
          offer,  // Zwracamy całą ofertę jako wartość
        ]) || []  // Jeśli oferta nie istnieje, zwracamy pustą tablicę (co oznacza brak danych w tej kategorii)
      )
    );
};

export default createOfferMap; 
