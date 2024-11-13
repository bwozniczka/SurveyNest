import { pricingPlans } from "@/constants";
import SubscriptionPlan from "@/components/SubscriptionCard";
import Navbar from "@/components/Navbar";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center gap-6 min-h-screen">
        {pricingPlans.map((plan) => (
          <SubscriptionPlan
            key={plan.id}
            title={plan.title}
            price={plan.price}
            billingPeriod={plan.billingPeriod}
            features={plan.features}
            buttonText={plan.buttonText}
            href={plan.href}
          />
        ))}
      </div>
    </>
  );
}
