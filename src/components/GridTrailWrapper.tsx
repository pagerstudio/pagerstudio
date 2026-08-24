"use client";

import dynamic from "next/dynamic";

const GridTrail = dynamic(() => import("@/components/GridTrail"), {
  ssr: false,
});

export default function GridTrailWrapper() {
  return <GridTrail />;
}
