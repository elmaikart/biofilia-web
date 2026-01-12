import FeatureCard from "@/components/cards/FeatureCard";
import { hidroponiaSlides } from "@/data/slides.hidroponia";

export default function HomeFeatures() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10">
      <div className="grid gap-6 md:grid-cols-3">
        {hidroponiaSlides.map((slide) => (
          <FeatureCard
            key={slide.title}
            tag={slide.tag}
            title={slide.title}
            description={slide.desc}
            image={slide.image}
          />
        ))}
      </div>
    </section>
  );
}
