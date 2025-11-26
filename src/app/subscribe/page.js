"use client";

import Subscribe from "@/components/SubscribeInner";
import { Suspense } from "react";


export default function SubscribePage() {
  return (
    <Suspense fallback={null}>
      <Subscribe />
    </Suspense>
  );
}
