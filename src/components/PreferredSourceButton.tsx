"use client";

import Link from "next/link";

export default function PreferredSourceButton() {
  return (
    <div className="w-full rounded-2xl border border-border-subtle p-6 md:p-8 text-center">
      <p className="text-subhead text-text-secondary">
        Want to keep seeing our content in Google&apos;s AI answers?
      </p>
      <Link
        href="https://www.google.com/preferences/source?q=pagerstudio.space"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-default text-sm font-medium text-black hover:bg-fill-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      >
        <span>★</span>
        Add as Preferred Source on Google
      </Link>
    </div>
  );
}
