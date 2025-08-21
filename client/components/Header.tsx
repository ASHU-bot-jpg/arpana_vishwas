import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-center gap-6 lg:gap-20 px-4 lg:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/7621311a621a20c665d06ce8300f81281f4b57f6?width=539" 
            alt="iCreative Learning Logo" 
            className="h-16 lg:h-20 w-auto"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-4">
          <a href="/" className="px-3 py-2 text-icreative-purple font-inter text-lg lg:text-xl hover:text-icreative-magenta transition-colors">
            Home
          </a>
          <a href="/programs" className="px-3 py-2 text-black font-inter text-lg lg:text-xl hover:text-icreative-purple transition-colors">
            Programs
          </a>
          <a href="/about" className="px-3 py-2 text-black font-inter text-lg lg:text-xl hover:text-icreative-purple transition-colors">
            About
          </a>
          <div className="flex items-center gap-2 px-3 py-2 text-black font-inter text-lg lg:text-xl hover:text-icreative-purple transition-colors cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </div>
        </nav>

        {/* CTA Button */}
        <button className="bg-icreative-magenta text-white px-4 py-2 rounded-lg font-inter text-sm lg:text-base hover:bg-icreative-magenta-dark transition-colors whitespace-nowrap">
          Schedule a Free Assessment
        </button>
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
