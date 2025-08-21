import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-6 lg:px-20 py-12 lg:py-20 pt-8 lg:pt-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-icreative-green/20 to-icreative-magenta/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-icreative-purple/20 to-icreative-pink/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto relative z-10">
        {/* Left Content */}
        <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-icreative-purple/10 to-icreative-magenta/10 border border-icreative-purple/20 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-icreative-magenta" />
            <span className="text-icreative-purple font-inter text-sm font-medium">
              Research-Based Learning Programs
            </span>
            <Award className="w-4 h-4 text-icreative-green" />
          </div>

          {/* Main Headline with Gradient */}
          <div className="space-y-4">
            <h1 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Empowering Elementary Students Through{" "}
              <span className="bg-gradient-to-r from-icreative-magenta to-icreative-purple bg-clip-text text-transparent">
                Creative, Fun, and Effective
              </span>{" "}
              Learning Programs.
            </h1>

            {/* Animated Underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-icreative-green to-icreative-magenta rounded-full animate-pulse" />
          </div>

          {/* Subheadline */}
          <p className="text-icreative-grey font-roboto text-lg lg:text-xl xl:text-2xl leading-relaxed">
            Backed by Research, Theories of Learning, and Cognitive Psychology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/register"
              className="group bg-gradient-to-r from-icreative-green to-green-400 hover:from-icreative-magenta hover:to-purple-500 text-black hover:text-white px-8 py-4 lg:px-10 lg:py-5 rounded-3xl font-inter text-base lg:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Book Your Free Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/programs"
              className="group border-2 border-icreative-purple text-icreative-purple hover:bg-icreative-purple hover:text-white px-8 py-4 lg:px-10 lg:py-5 rounded-3xl font-inter text-base lg:text-lg font-bold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-icreative-green via-icreative-magenta to-icreative-purple rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

            {/* Main Image */}
            <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7ec4d7891358269d942bd3ec0d7a90aeb0fec769?width=1021"
                alt="Smiley kids in the main plan"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-icreative-magenta to-icreative-purple text-white px-4 py-2 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <span className="font-inter text-sm font-bold">
                  ✨ Free Assessment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
