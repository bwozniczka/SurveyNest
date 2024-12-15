import { pricingPlans } from "@/constants";
import SubscriptionPlan from "@/components/SubscriptionCard";
import Navbar from "@/components/Navbar";
import { auth } from "@/auth";

export default async function PricingPage() {
  const session = await auth();

  if (!session) {
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
              buttonText={"Sign in"}
              href={"/signin"}
            />
          ))}
        </div>
      </>
    );
  }
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
