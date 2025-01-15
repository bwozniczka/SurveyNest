import Navbar from "@/components/Navbar";
import { Link } from "@/i18n/routing";

export default function HowItWorks() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r">
        <div className="container mx-auto py-20 px-5 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
            Jak to działa
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Dowiedz się, jak nasza platforma działa i jak możesz w pełni
            wykorzystać jej możliwości.
          </p>

          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-12">
            <div className="flex flex-col items-center bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 mb-4 bg-orange-500 text-white rounded-full flex items-center justify-center">
                <span className="text-xl">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Załóż konto
              </h3>
              <p className="text-lg text-gray-600">
                Zarejestruj się na naszej platformie i zacznij odkrywać dostępne
                funkcje.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 mb-4 bg-orange-500 text-white rounded-full flex items-center justify-center">
                <span className="text-xl">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Dostosuj swój profil
              </h3>
              <p className="text-lg text-gray-600">
                Uzupełnij swoje dane i spersonalizuj profil, aby pasował do
                Twoich preferencji.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 mb-4 bg-orange-500 text-white rounded-full flex items-center justify-center">
                <span className="text-xl">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Rozpocznij korzystanie z platformy
              </h3>
              <p className="text-lg text-gray-600">
                Odkrywaj wszystkie funkcje i ciesz się płynnym doświadczeniem,
                jakie oferuje nasza platforma.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-xl text-gray-800 mb-4">
              Gotowy, aby rozpocząć? Zarejestruj się już teraz!
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
