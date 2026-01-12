import Image from "next/image";

type CardProps = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

export default function FeatureCard({ tag, title, description, image }: CardProps) {
  console.log("FeatureCard image:", image);
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
      {/* Marco + Imagen */}
      <div className="p-4">
        <div className="relative h-40 w-full overflow-hidden rounded-xl bg-zinc-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="px-5 pb-5">
        <p className="text-emerald-700 text-xs font-medium uppercase">{tag}</p>

        <h3 className="mt-1 text-lg font-semibold">{title}</h3>

        <p className="mt-2 text-sm text-zinc-600">{description}</p>
      </div>
    </div>
  );
}
