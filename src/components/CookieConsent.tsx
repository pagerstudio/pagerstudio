"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "pager_cookie_consent";
const CONSENT_VERSION = "1.0";

type ConsentState = {
  necessary: true;
  analytics: boolean;
  timestamp: string;
  version: string;
};

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function storeConsent(state: ConsentState) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
}

function hasGPC(): boolean {
  if (typeof navigator === "undefined") return false;
  return (navigator as unknown as Record<string, unknown>).globalPrivacyControl === true;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = getStoredConsent();
    if (stored) return false;
    if (hasGPC()) {
      const state: ConsentState = {
        necessary: true,
        analytics: false,
        timestamp: new Date().toISOString(),
        version: CONSENT_VERSION,
      };
      storeConsent(state);
      return false;
    }
    return true;
  });
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      window.dispatchEvent(
        new CustomEvent("cookie-consent", { detail: stored })
      );
      return;
    }

    if (hasGPC()) {
      const state: ConsentState = {
        necessary: true,
        analytics: false,
        timestamp: new Date().toISOString(),
        version: CONSENT_VERSION,
      };
      storeConsent(state);
      window.dispatchEvent(
        new CustomEvent("cookie-consent", { detail: state })
      );
      return;
    }
  }, []);

  function accept() {
    const state: ConsentState = {
      necessary: true,
      analytics: true,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    storeConsent(state);
    window.dispatchEvent(
      new CustomEvent("cookie-consent", { detail: state })
    );
    setVisible(false);
  }

  function reject() {
    const state: ConsentState = {
      necessary: true,
      analytics: false,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    storeConsent(state);
    window.dispatchEvent(
      new CustomEvent("cookie-consent", { detail: state })
    );
    setVisible(false);
  }

  function savePreferences() {
    const state: ConsentState = {
      necessary: true,
      analytics: analyticsConsent,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    storeConsent(state);
    window.dispatchEvent(
      new CustomEvent("cookie-consent", { detail: state })
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 z-[200] p-0 md:p-0"
    >
      <div className="w-[min(360px,calc(100vw-2rem))] bg-white border border-border-subtle rounded-2xl shadow-2xl p-6">
        <h2 className="text-lg font-semibold text-black">
          We respect your privacy
        </h2>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          Pager Studio uses only essential cookies required for basic
          functionality. We do not use advertising cookies or retargeting
          pixels. Optional analytics help us improve our website.
        </p>

        <div className="mt-4 space-y-2">
          <label className="flex items-center gap-3 text-sm text-text-secondary">
            <input
              type="checkbox"
              checked
              disabled
              className="h-4 w-4 rounded border-border-subtle"
            />
            <span>
              <strong className="font-semibold text-black">Necessary</strong> —
              Required for the website to function
            </span>
          </label>
          <label className="flex items-center gap-3 text-sm text-text-secondary cursor-pointer">
            <input
              type="checkbox"
              checked={analyticsConsent}
              onChange={(e) => setAnalyticsConsent(e.target.checked)}
              className="h-4 w-4 rounded border-border-subtle"
            />
            <span>
              <strong className="font-semibold text-black">Analytics</strong> —
              Help us understand how visitors use our site
            </span>
          </label>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <button
            onClick={accept}
            className="flex-1 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-fill-active transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            Accept All
          </button>
          <button
            onClick={reject}
            className="flex-1 inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-text-primary text-black text-sm font-semibold hover:bg-fill-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            Reject All
          </button>
          <button
            onClick={savePreferences}
            className="flex-1 inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-border-subtle text-text-secondary text-sm font-semibold hover:bg-fill-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            Save Preferences
          </button>
        </div>

        <p className="mt-4 text-xs text-text-tertiary">
          Read our{" "}
          <Link
            href="/cookies"
            className="underline hover:text-text-secondary transition-colors"
          >
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline hover:text-text-secondary transition-colors"
          >
            Privacy Policy
          </Link>{" "}
          for more details.
        </p>
      </div>
    </div>
  );
}
