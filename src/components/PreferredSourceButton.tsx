"use client";

import Link from "next/link";

export default function PreferredSourceButton() {
  return (
    <div className="w-full rounded-2xl border border-border-subtle p-6 md:p-8 text-center">
      <p className="text-subhead text-text-secondary">
        Want to keep seeing our content in Google&apos;s AI answers?
      </p>
      <div className="mt-4 flex justify-center">
        <div
          dangerouslySetInnerHTML={{
            __html: '<div google-add-preferred-source-btn data-theme="light"></div>',
          }}
        />
      </div>
    </div>
  );
}
