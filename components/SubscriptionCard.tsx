import React from "react";
import { Link } from "@/i18n/routing";

interface Feature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  title: string;
  price: number;
  billingPeriod: string;
  features: Feature[];
  buttonText: string;
  href: string;
}

const SubscriptionPlan: React.FC<PricingPlanProps> = ({
  title,
  price,
  billingPeriod,
  features,
  buttonText,
  href,
}) => {
  return (
    <div className="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h5 className="mb-4 text-xl font-medium text-gray-500">{title}</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="text-3xl font-semibold">$</span>
        <span className="ml-1 text-xl font-normal text-gray-500">
          {billingPeriod}
        </span>
      </div>
      <ul className="my-6 space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center ${
              feature.included ? "" : "line-through decoration-gray-400"
            }`}
          >
            <svg
              className={`w-5 h-5 ${
                feature.included ? "text-orange-400 " : "text-gray-400"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="ml-3 text-base font-normal text-gray-700">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <Link href={href}>
        <button className="w-full px-5 py-2.5 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-200">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default SubscriptionPlan;
