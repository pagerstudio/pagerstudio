"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal: any;
  }
}

export default function CalEmbed() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            } as any;
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

    window.Cal("init", "30min", { origin: "https://app.cal.com" });
    window.Cal.config = window.Cal.config || {};
    window.Cal.config.forwardQueryParams = true;

    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "light",
      },
      calLink: "pagerstudio/30min",
    });

    window.Cal.ns["30min"]("ui", {
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
