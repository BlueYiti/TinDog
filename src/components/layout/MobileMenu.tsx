import { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";
import type { NavLink } from "../../types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden",
          // Keep overlay clickable only when open.
          // If it's accidentally clickable while closed, it can steal clicks from the drawer.
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className={cn(
          "fixed top-0 right-0 z-99999 h-full w-72 max-w-[80vw] bg-white shadow-2xl transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center p-4 border-b border-neutral-200">
          <span className="text-lg font-bold text-neutral-900">Menu</span>
        </div>

        <nav className="p-4" aria-label="Mobile navigation">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-3 text-lg font-medium text-neutral-700 rounded-lg hover:bg-brand-orange/10 hover:text-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-neutral-200">
            <a
              href="#download"
              onClick={(e) => handleLinkClick(e, "#download")}
              className="inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-primary shadow-lg hover:shadow-xl hover:opacity-90 active:opacity-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
            >
              Get the app
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

