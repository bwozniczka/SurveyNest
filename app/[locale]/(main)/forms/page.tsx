import Navbar from "@/components/Navbar";
import PresentationCardForm from "@/components/presentationCardForms";

export default function Forms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex px-40 py-10">
        <div className="w-1/2 pr-10">
          <PresentationCardForm />
        </div>
        <div className="w-auto pl-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Stwórz spersonalizowany formularz w kilka minut
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Nasza strona pozwala na szybkie i łatwe tworzenie formularzy
            zgodnych z Twoimi potrzebami. Dzięki naszemu intuicyjnemu kreatorowi
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
              Intuicyjny interfejs
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
              Personalizacja w czasie rzeczywistym
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
              Profesjonalne wzory
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
              Możliwość zapisania karty w formacie PDF
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
              Możliwość udostępnienia karty w formie linku
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
