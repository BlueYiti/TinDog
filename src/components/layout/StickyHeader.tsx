import { useCallback, useState } from "react";

import { cn } from "../../utils/cn";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { MobileMenu } from "./MobileMenu";
import { navigationLinks } from "../../data/navigation";
import tindogLogo from "../../assets/logos/tindog-logo.png";

export function StickyHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className="fixed top-2 left-0 right-0 z-40">
        <Container>
          <nav
            className="flex items-center justify-between h-20 bg-white shadow-sm rounded-full px-6 mx-auto max-w-7xl"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-lg"
              aria-label="TinDog - Go to top"
            >
              <img
                src={tindogLogo}
                alt="TinDog logo"
                className="h-10 w-10"
              />

              <span className="text-3xl font-semibold text-[#ff6254]">
                TinDog
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm font-medium text-[#ff6254] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff6254]/30 rounded-md px-2 py-1 hover:text-[#ff6254]/80"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <Button
                href="#download"
                variant="primary"
                size="sm"
              >
                Get the app
              </Button>
            </div>

            {/* Mobile Menu Button */}
              <button
                onClick={openMobileMenu}
                className={cn(
                  "p-2 rounded-lg transition-colors lg:hidden focus:outline-none focus:ring-2 focus:ring-[#ff6254]/30 text-[#ff6254]",
                  // Prevent the hamburger from overlapping/capturing clicks while the drawer is open.
                  mobileMenuOpen ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
                )}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              tabIndex={mobileMenuOpen ? -1 : 0}
              disabled={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        links={navigationLinks}
      />
    </>
  );
}