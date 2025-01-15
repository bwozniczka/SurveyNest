import Navbar from "@/components/Navbar";
import { Link } from "@/i18n/routing";

export default function VisionAndMission() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r py-20">
        <div className="container mx-auto text-center px-5">
          <div className="mb-16">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
              Nasza Wizja
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Naszą wizją jest stworzenie wiodącej platformy, która umożliwi
              każdemu łatwe tworzenie ankiet i formularzy w sposób szybki,
              intuicyjny i dostępny. Dążymy do tego, aby nasze narzędzia były
              dostępne dla każdego, niezależnie od poziomu doświadczenia,
              oferując niezrównaną elastyczność i wydajność w każdym aspekcie
              procesu tworzenia.
            </p>
          </div>
          <div className="mb-16">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
              Nasza Misja
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Misją naszej platformy jest umożliwienie firmom, organizacjom i
              indywidualnym użytkownikom tworzenie niestandardowych ankiet i
              formularzy, które są proste w obsłudze, ale jednocześnie potężne w
              funkcjonalności. Zależy nam na tym, aby proces zbierania danych
              stał się bardziej efektywny, przejrzysty i łatwy do zrozumienia,
              oferując przy tym solidne narzędzia analityczne.
            </p>
          </div>
          <div className="mb-16">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
              Nasze Wartości
            </h1>
            <ul className="text-lg text-gray-600 max-w-3xl mx-auto space-y-6">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-orange-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M2 10a8 8 0 1 1 16 0A8 8 0 0 1 2 10Zm8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                <span>
                  Innowacyjność – ciągłe dążenie do doskonałości i wdrażania
                  nowych rozwiązań.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-orange-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M2 10a8 8 0 1 1 16 0A8 8 0 0 1 2 10Zm8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                <span>
                  Przejrzystość – dostarczanie jasnych i łatwych do zrozumienia
                  narzędzi i wyników.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-orange-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M2 10a8 8 0 1 1 16 0A8 8 0 0 1 2 10Zm8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                <span>
                  Wsparcie – zapewnianie nieustającej pomocy i edukacji
                  użytkownikom na każdym etapie.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-orange-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M2 10a8 8 0 1 1 16 0A8 8 0 0 1 2 10Zm8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                <span>
                  Bezpieczeństwo – zapewnienie najwyższego poziomu ochrony
                  danych i prywatności.
                </span>
              </li>
            </ul>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-800 mb-4">
              Chcesz być częścią naszej misji? Zarejestruj się i twórz ankiety
              już teraz!
            </p>
            <Link href="/signin">
              <button className="px-4 py-2 rounded-xl bg-black text-white font-bold transition duration-200 hover:bg-orange-400 hover:text-black border-2 border-transparent hover:border-black">
                Zarejestruj sie teraz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
