"use client";

import dynamic from "next/dynamic";

export const LazyHeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => null,
});
