"use client";

import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    // Third-party Cal.com embed script
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (function (C: any, A: string, L: string) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
        C.Cal =
          C.Cal ||
          function () {
          const cal = C.Cal;
          // eslint-disable-next-line prefer-rest-params
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              // eslint-disable-next-line prefer-rest-params
              p(api, arguments);
            } as any; // eslint-disable-line @typescript-eslint/no-explicit-any
            const namespace = ar[1] as string;
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(
      window,
      "https://app.cal.com/embed/embed.js",
      "init"
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Cal("init", "30min", { origin: "https://app.cal.com" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Cal.config = (window as any).Cal.config || {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Cal.config.forwardQueryParams = true;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "light",
      },
      calLink: "pagerstudio/30min",
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Cal.ns["30min"]("ui", {
      hideEventTypeDetails: true,
      layout: "month_view",
    });
  }, []);

  return (
      <div
        id="my-cal-inline-30min"
        className="w-full h-[700px] max-md:h-[800px] overflow-scroll pb-5"
      />
  );
}
