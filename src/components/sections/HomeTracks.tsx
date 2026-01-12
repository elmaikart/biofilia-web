import FeatureCard from "@/components/cards/FeatureCard";
import { Leaf, Store, Wrench } from "lucide-react";

export default function HomeTracks() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10">
      <div className="grid gap-6 md:grid-cols-3">
        <FeatureCard
          tag="Hogar"
          title="Para tu casa"
          description="Huerta vertical estética, limpia y fácil."
          image="/images/hogar.png"
        />

        <FeatureCard
          tag="Negocios"
          title="Para negocios"
          description="Impacto visual + venta fresca desde la pared."
          image="/images/negocios.png"
        />

        <FeatureCard
          tag="Servicio"
          title="Para Establecimientos"
          description="Instalación, mantenimiento y reposición."
          image="/images/servicio-completo.png"
        />
      </div>
    </section>
  );
}
