import { ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between gap-4 lg:gap-8 px-4 lg:px-16 py-2 lg:py-3">
        {/* Logo */}
        <div className="flex items-center justify-center flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7621311a621a20c665d06ce8300f81281f4b57f6?width=539"
            alt="iCreative Learning Logo"
            className="h-12 lg:h-16 w-auto"
          />
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link
            to="/"
            className={`px-3 py-2 font-inter text-lg transition-colors ${
              location.pathname === "/"
                ? "text-icreative-purple"
                : "text-black hover:text-icreative-purple"
            }`}
          >
            Home
          </Link>
          <Link
            to="/programs"
            className={`px-3 py-2 font-inter text-lg transition-colors ${
              location.pathname === "/programs"
                ? "text-icreative-purple"
                : "text-black hover:text-icreative-purple"
            }`}
          >
            Programs
          </Link>
          <Link
            to="/about"
            className={`px-3 py-2 font-inter text-lg transition-colors ${
              location.pathname === "/about"
                ? "text-icreative-purple"
                : "text-black hover:text-icreative-purple"
            }`}
          >
            About
          </Link>
          <Link
            to="/cart"
            className={`flex items-center gap-2 px-3 py-2 font-inter text-lg transition-colors ${
              location.pathname === "/cart"
                ? "text-icreative-purple"
                : "text-black hover:text-icreative-purple"
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2 lg:gap-3">
          <a
            href="https://icreativelearning.com/shop/"
            rel="noopener noreferrer"
            className="bg-icreative-green text-black px-3 lg:px-4 py-2 rounded-lg font-inter text-sm lg:text-base hover:bg-green-400 transition-colors whitespace-nowrap"
          >
            Pay Fees
          </a>
          <a
            href="https://icreativelearning.com/registeration/"
            rel="noopener noreferrer"
            className="bg-icreative-magenta text-white px-3 lg:px-4 py-2 rounded-lg font-inter text-sm lg:text-base hover:bg-icreative-magenta-dark transition-colors whitespace-nowrap"
          >
            Schedule Assessment
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          ref={buttonRef}
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-black hover:text-icreative-purple transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/20 px-4 py-4 bg-white/95 backdrop-blur-md">
          {/* Mobile Navigation Links */}
          <nav className="space-y-3 mb-4">
            <Link
              to="/"
              className={`block px-3 py-2 font-inter text-base font-medium hover:bg-icreative-purple/10 rounded-lg transition-colors ${
                location.pathname === "/"
                  ? "text-icreative-purple"
                  : "text-black hover:text-icreative-purple"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/programs"
              className={`block px-3 py-2 font-inter text-base hover:bg-icreative-purple/10 rounded-lg transition-colors ${
                location.pathname === "/programs"
                  ? "text-icreative-purple font-medium"
                  : "text-black hover:text-icreative-purple"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 font-inter text-base hover:bg-icreative-purple/10 rounded-lg transition-colors ${
                location.pathname === "/about"
                  ? "text-icreative-purple font-medium"
                  : "text-black hover:text-icreative-purple"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/cart"
              className={`flex items-center gap-2 px-3 py-2 font-inter text-base hover:bg-icreative-purple/10 rounded-lg transition-colors ${
                location.pathname === "/cart"
                  ? "text-icreative-purple font-medium"
                  : "text-black hover:text-icreative-purple"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </Link>
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="space-y-2 pt-2 border-t border-white/20">
            <a
              href="https://icreativelearning.com/shop/"
              rel="noopener noreferrer"
              className="w-full bg-icreative-green text-black px-4 py-3 rounded-lg font-inter text-sm font-medium hover:bg-green-400 transition-colors block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pay Fees
            </a>
            <a
              href="https://icreativelearning.com/registeration/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-icreative-magenta text-white px-4 py-3 rounded-lg font-inter text-sm font-medium hover:bg-icreative-magenta-dark transition-colors block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule Assessment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
