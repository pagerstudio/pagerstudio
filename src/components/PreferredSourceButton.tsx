"use client";

import { useEffect, useRef } from "react";

export default function PreferredSourceButton() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && !ref.current.hasChildNodes()) {
      const btn = document.createElement("div");
      btn.setAttribute("google-add-preferred-source-btn", "");
      btn.setAttribute("data-theme", "light");
      ref.current.appendChild(btn);
    }
  }, []);

  return (
    <div className="w-full rounded-2xl border border-border-subtle p-6 md:p-8 text-center">
      <p className="text-subhead text-text-secondary">
        Want to keep seeing our content in Google&apos;s AI answers?
      </p>
      <div ref={ref} className="mt-4 flex justify-center" />
    </div>
  );
}
