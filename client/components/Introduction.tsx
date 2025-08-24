import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-10 left-10 w-20 h-20 border-2 border-icreative-purple rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-10 right-10 w-16 h-16 border-2 border-icreative-magenta rounded-full animate-spin"
          style={{ animationDuration: "15s" }}
        />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-icreative-green rounded-full animate-pulse" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] relative z-10">
        {/* Text Section */}
        <div className="bg-gradient-to-br from-icreative-pink-light to-purple-50/50 flex items-center py-12 lg:py-20 order-2 lg:order-1 relative">
          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 opacity-20">
            <Sparkles className="w-8 h-8 text-icreative-magenta animate-pulse" />
          </div>
          <div className="absolute bottom-8 left-8 opacity-20">
            <div className="w-6 h-6 bg-icreative-green rounded-full animate-bounce" />
          </div>

          <div className="px-8 lg:px-16 xl:px-20 w-full max-w-2xl mx-auto lg:mx-0">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-icreative-purple/20 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-icreative-magenta rounded-full animate-pulse" />
              <span className="text-icreative-purple font-inter text-sm font-medium">
                Our Mission
              </span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h2 className="text-icreative-purple font-roboto text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                Blending Creativity with{" "}
                <span className="bg-gradient-to-r from-icreative-magenta to-icreative-purple bg-clip-text text-transparent">
                  Curriculum
                </span>
              </h2>

              <p className="text-icreative-grey font-roboto text-lg lg:text-xl xl:text-2xl leading-relaxed">
                At iCreative Learning, we blend creativity with curriculum to
                make Math and English Language Arts (ELA) exciting, enriching,
                and empowering for elementary school kids.
              </p>

              {/* Key Points */}
              <div className="space-y-3 mt-8">
                {[
                  "Research-backed teaching methods",
                  "Cognitive development focus",
                  "Fun and engaging activities",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-icreative-green rounded-full group-hover:bg-icreative-magenta transition-colors duration-300" />
                    <span className="text-icreative-grey font-inter text-base lg:text-lg group-hover:text-icreative-purple transition-colors duration-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-icreative-purple hover:text-icreative-magenta font-inter text-base lg:text-lg font-semibold transition-colors duration-300"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section with Enhanced Design */}
        <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-full order-1 lg:order-2 overflow-hidden">
          {/* Dynamic Gradient Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-icreative-magenta/80 via-purple-500/60 to-icreative-purple/80" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-icreative-green/30" />
          </div>

          {/* Floating Elements */}
          <div
            className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-20 right-12 w-12 h-12 bg-icreative-green/30 rounded-full backdrop-blur-sm animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-20 left-12 w-10 h-10 bg-icreative-pink/40 rounded-full backdrop-blur-sm animate-float"
            style={{ animationDelay: "2s" }}
          />

          {/* Innovation Elements Image */}
          <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-8">
            <div className="relative group">
              <div className="absolute -inset-2 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-500" />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F8aa4cf09caeb4e58bde5caf7b6aa17fa"
                alt="Flat lay composition with innovation elements"
                className="relative w-full h-full max-w-md lg:max-w-lg max-h-80 lg:max-h-96 object-cover rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
