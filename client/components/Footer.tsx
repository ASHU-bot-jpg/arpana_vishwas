import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* Footer Links */}
      <section className="bg-white py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo */}
            <div className="space-y-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d39d1a44c601b6f86affe2855a69fde28f72777c?width=432"
                alt="iCreative Learning Logo"
                className="h-16 w-auto"
              />
            </div>

            {/* Programs */}
            <div className="space-y-4">
              <h3 className="text-black font-roboto text-base font-bold">
                Programs
              </h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-icreative-text-tertiary font-roboto text-sm hover:text-icreative-purple transition-colors"
                >
                  Creative Math
                </a>
                <a
                  href="#"
                  className="block text-icreative-text-tertiary font-roboto text-sm hover:text-icreative-purple transition-colors"
                >
                  Abacus
                </a>
                <a
                  href="#"
                  className="block text-icreative-text-tertiary font-roboto text-sm hover:text-icreative-purple transition-colors"
                >
                  Language Arts
                </a>
                <a
                  href="#"
                  className="block text-icreative-text-tertiary font-roboto text-sm hover:text-icreative-purple transition-colors"
                >
                  Summer Camps
                </a>
                <a
                  href="#"
                  className="block text-icreative-text-tertiary font-roboto text-sm hover:text-icreative-purple transition-colors"
                >
                  CogAT
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-black font-roboto text-base font-bold">
                Quick Links
              </h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-icreative-text-tertiary font-roboto text-sm hover:text-icreative-purple transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-icreative-text-tertiary font-roboto text-sm hover:text-icreative-purple transition-colors"
                >
                  Our Team
                </a>
                <a
                  href="#"
                  className="block text-icreative-text-tertiary font-roboto text-sm hover:text-icreative-purple transition-colors"
                >
                  Testimonials
                </a>
              </div>
            </div>

            {/* Contact Us */}
            <div className="space-y-4">
              <h3 className="text-black font-roboto text-base font-bold">
                Contact Us
              </h3>
              <div className="space-y-3">
                {/* Locations */}
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-icreative-text-tertiary font-roboto text-sm lg:text-base">
                    Princeton Junction, NJ
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-icreative-text-tertiary font-roboto text-sm lg:text-base">
                    Milpitas, CA
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-icreative-text-tertiary font-roboto text-sm lg:text-base">
                    +1 609-608-0245
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-icreative-text-tertiary font-roboto text-sm lg:text-base">
                    info@icreativelearning.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
