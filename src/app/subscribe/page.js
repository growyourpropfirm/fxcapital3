"use client";

import Subscribe from "@/components/SubscribeInner";
import AlreadySubscribed from "@/components/AlreadySubscribedInner";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SubscribePageContent() {
  const searchParams = useSearchParams();
  const alreadySubscribed = searchParams.get("already") === "true";

  if (alreadySubscribed) {
    return <AlreadySubscribed />;
  }

  return <Subscribe />;
}

export default function SubscribePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#05070F]" />}>
      <SubscribePageContent />
    </Suspense>
  );
}



