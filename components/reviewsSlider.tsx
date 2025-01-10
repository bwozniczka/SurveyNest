import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { reviews } from "@/constants/";

export function ReviewSlider() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
    </div>
  );
}
