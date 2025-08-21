import { ShoppingCart } from 'lucide-react';

export default function Header() {
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

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-2">
          <a href="/" className="px-3 py-2 text-icreative-purple font-inter text-lg hover:text-icreative-magenta transition-colors">
            Home
          </a>
          <a href="/programs" className="px-3 py-2 text-black font-inter text-lg hover:text-icreative-purple transition-colors">
            Programs
          </a>
          <a href="/about" className="px-3 py-2 text-black font-inter text-lg hover:text-icreative-purple transition-colors">
            About
          </a>
          <div className="flex items-center gap-2 px-3 py-2 text-black font-inter text-lg hover:text-icreative-purple transition-colors cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </div>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 lg:gap-3">
          <button className="bg-icreative-green text-black px-3 lg:px-4 py-2 rounded-lg font-inter text-sm lg:text-base hover:bg-green-400 transition-colors whitespace-nowrap">
            Pay Fees
          </button>
          <button className="bg-icreative-magenta text-white px-3 lg:px-4 py-2 rounded-lg font-inter text-sm lg:text-base hover:bg-icreative-magenta-dark transition-colors whitespace-nowrap">
            Schedule Assessment
          </button>
        </div>
      </div>

      {/* Mobile Navigation - TODO: Can be expanded later for mobile menu */}
      <div className="lg:hidden border-t border-gray-100 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 text-sm">
            <a href="/" className="text-icreative-purple font-medium">Home</a>
            <a href="/programs" className="text-black">Programs</a>
            <a href="/about" className="text-black">About</a>
          </div>
          <div className="flex items-center gap-1 text-black text-sm">
            <ShoppingCart className="w-4 h-4" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
}
