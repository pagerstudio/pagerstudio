"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Healthcare AEO", href: "/healthcare-aeo" },
  { label: "Services", href: "/services" },
  { label: "AEO Audit", href: "/healthcare-aeo-audit" },
  { label: "About", href: "/about" },
  { label: "Pricing & Process", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Book a Call", href: "/book" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/pagerstudio" },
  { label: "X", href: "https://x.com/pagerstudio" },
  { label: "LinkedIn", href: "https://linkedin.com/company/pagerstudio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLElement | null)[]>([]);
  const pathname = usePathname();

  const handleClose = useCallback(() => {
    setClosing(true);
    timerRef.current = setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 350);
  }, []);

  const handleToggle = useCallback(() => {
    if (open) {
      handleClose();
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      setOpen(true);
      setClosing(false);
    }
  }, [open, handleClose]);

  useEffect(() => {
    if (!open || closing) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
        return;
      }

      const items = menuItemsRef.current.filter(Boolean) as HTMLElement[];
      if (items.length === 0) return;

      const currentIndex = items.indexOf(document.activeElement as HTMLElement);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        items[next]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        items[prev]?.focus();
      } else if (e.key === "Tab") {
        e.preventDefault();
        if (e.shiftKey) {
          const prev = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          items[prev]?.focus();
        } else {
          const next = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          items[next]?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, closing, handleClose]);

  useEffect(() => {
    if (open && !closing) {
      const firstItem = menuItemsRef.current[0];
      setTimeout(() => firstItem?.focus(), 100);
    }
  }, [open, closing]);

  const isVisible = open || closing;

  return (
    <>
      <header className="w-full flex items-center justify-center gap-4 md:gap-6 px-3 pt-6 md:pt-10 pb-3">
        <Link href="/" aria-label="Pager Studio — Home" className="shrink-0 flex items-center gap-3">
          <Image
            src="/logo-dark.png"
            alt="Pager Studio logo"
            width={48}
            height={48}
            priority
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />
          <span className="text-title-1 font-semibold tracking-tight text-black">
            Pager Studio
          </span>
        </Link>
      </header>

      <div className="fixed bottom-10 right-10 max-md:bottom-4 max-md:right-4 z-[100]">
        <button
          onClick={handleToggle}
          aria-expanded={open}
          aria-controls="nav-menu"
          className="group relative px-6 py-3 rounded-full border border-border-default text-footnote text-black bg-white hover:bg-white transition-all duration-300 shadow-lg overflow-hidden after:absolute after:inset-0 after:pointer-events-none after:bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(0,0,0,0.15)_4px,rgba(0,0,0,0.15)_5px)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 min-h-[44px] min-w-[44px]"
        >
          <span className="relative z-10">{"// "}{open || closing ? "Close" : "Menu"}{" //"}</span>
        </button>

        {isVisible && (
          <div
            id="nav-menu"
            ref={menuRef}
            role="menu"
            aria-label="Main navigation"
            className={`absolute bottom-full right-0 mb-3 w-[min(320px,calc(100vw-2rem))] bg-black text-white rounded-2xl px-8 py-10 flex flex-col gap-8 shadow-xl transition-all duration-300 origin-bottom-right z-[101] ${
              closing
                ? "opacity-0 scale-95 translate-y-2 pointer-events-none"
                : "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.5, 0, 1, 0.5)" }}
          >
            <div>
              <p className="text-micro text-text-inverse-secondary mb-3">Pages</p>
              <nav className="flex flex-col gap-2">
                {pageLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    ref={(el) => { menuItemsRef.current[i] = el; }}
                    onClick={handleClose}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`text-body font-medium text-white hover:text-text-inverse-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded ${
                      closing ? "menu-item-out" : "menu-item-in"
                    }`}
                    style={{ animationDelay: closing ? `${i * 40}ms` : `${i * 80}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-micro text-text-inverse-secondary mb-3">Follow us on</p>
              <nav className="flex flex-col gap-2">
                {socialLinks.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    ref={(el) => { menuItemsRef.current[pageLinks.length + i] = el; }}
                    aria-label={`${link.label} (opens in new tab)`}
                    className={`text-body font-medium text-white hover:text-text-inverse-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded ${
                      closing ? "menu-item-out" : "menu-item-in"
                    }`}
                    style={{ animationDelay: closing ? `${(pageLinks.length + i) * 40}ms` : `${(pageLinks.length + i) * 80}ms` }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-micro text-text-inverse-secondary mb-3">Contact</p>
              <a
                href="mailto:hello@pagerstudio.space"
                role="menuitem"
                ref={(el) => { menuItemsRef.current[pageLinks.length + socialLinks.length] = el; }}
                className={`text-body font-medium text-white hover:text-text-inverse-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded ${
                  closing ? "menu-item-out" : "menu-item-in"
                }`}
                style={{ animationDelay: closing ? `${(pageLinks.length + socialLinks.length) * 40}ms` : `${(pageLinks.length + socialLinks.length) * 80}ms` }}
              >
                hello@pagerstudio.space
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
