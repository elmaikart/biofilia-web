"use client";

import Image from "next/image";
import type { Slide } from "@/data/slides.biofilia";

export default function BasicSlider({ slides }: { slides: Slide[] }) {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 py-2">
        {slides.map((s, i) => (
          <div
            key={i}
            className="min-w-[260px] max-w-[260px] flex-shrink-0 rounded-3xl border border-black/10 bg-white p-5 shadow-sm"
          >
            {/* ✅ usar s.image en vez de s.img */}
            {s.image ? (
              <div className="relative w-full h-[160px] sm:h-[180px] mb-3 overflow-hidden rounded-2xl">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 260px, 260px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="mb-3 h-[180px] bg-zinc-100 rounded-2xl" />
            )}

            {s.tag && (
              <p className="text-xs font-medium text-emerald-700">{s.tag}</p>
            )}
            <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-zinc-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
