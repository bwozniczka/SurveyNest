import { Link } from "@/i18n/routing";
import { footerLinks } from "@/constants";

export function Footer() {
  return (
    <footer className="flex flex-col text-black border-t border-gray-400 mt-auto bg-orange-400">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-16 px-6 py-6 justify-end">
        {footerLinks.map((link) => (
          <div key={link.title}>
            <h3 className="font-bold text-lg">{link.title}</h3>
            <ul className="space-y-2">
              {link.links.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className="text-white hover:text-gray-800"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* <div className="flex flex-col justify-start items-start gap-2">
        <p className="text-base text-dark">
          SurveyNest 2024 <br />
          All rights reserved &copy;
        </p>
      </div> */}
    </footer>
  );
}
