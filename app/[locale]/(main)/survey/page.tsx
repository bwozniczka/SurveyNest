import Navbar from "@/components/Navbar";
import PresentationCardSurvey from "@/components/presentationCardSurvey";

export default function Survey() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex px-40 py-10">
        {/* Sekcja z formularzem po lewej stronie */}
        <div className="w-1/2 pr-10">
          <PresentationCardSurvey />
        </div>

        {/* Sekcja z opisem po prawej stronie */}
        <div className="w-1/2 pl-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Witaj w naszym kreatorze ankiet!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Wypełnij formularz, aby stworzyć i zarządzać swoimi ankietami.
            Możesz je łatwo dostosować, udostępniać oraz analizować wyniki.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 text-orange-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Łatwe tworzenie pytań
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 text-orange-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Personalizacja pytań
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 text-orange-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Łatwe udostępnianie wyników
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 text-orange-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Eksport wyników do PDF
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 text-orange-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Udostępnienie ankiety przez link
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
