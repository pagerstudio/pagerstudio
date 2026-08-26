"use client";

import { useEffect, useRef } from "react";

export default function PreferredSourceButton() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;
    const observer = new MutationObserver(() => {
      if (ref.current && !ref.current.querySelector("[google-add-preferred-source-btn]")) {
        const btn = document.createElement("div");
        btn.setAttribute("google-add-preferred-source-btn", "");
        btn.setAttribute("data-theme", "light");
        ref.current.appendChild(btn);
      }
    });
    observer.observe(document.head, { childList: true, subtree: true });
    if (document.querySelector('script[src*="news.google.com/swg"]')) {
      const btn = document.createElement("div");
      btn.setAttribute("google-add-preferred-source-btn", "");
      btn.setAttribute("data-theme", "light");
      ref.current.appendChild(btn);
    }
    return () => observer.disconnect();
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
