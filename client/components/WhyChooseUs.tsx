import {
  Lightbulb,
  BookOpen,
  Users,
  CheckCircle,
  Users as GroupIcon,
  Puzzle,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Lightbulb,
    title: "Focus on Cognitive development",
    description:
      "We don't just teach subjects—we develop minds. Every session is designed to strengthen memory, attention, logical reasoning, critical thinking, and problem-solving skills.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: BookOpen,
    title: "Advanced Curriculum that inspires",
    description:
      "We go beyond standard classroom instruction. Our Math and ELA programs teach concepts that are one to two grade levels ahead of public school curriculum.",
    color: "from-blue-400 to-purple-500",
  },
  {
    icon: Puzzle,
    title: "Smart Fun That Sticks",
    description:
      "By combining academic advancement with cognitive training and creativity, our students learn more, retain more, and enjoy the process every step of the way.",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: CheckCircle,
    title: "Designed for Real Results",
    description:
      "Parents see improved problem-solving skills, vocabulary, reading comprehension, and math confidence within weeks.",
    color: "from-pink-400 to-red-500",
  },
  {
    icon: GroupIcon,
    title: "Experienced, Caring Educators",
    description:
      "Our teachers are passionate about making a difference and use gentle, encouraging methods to help every child succeed.",
    color: "from-purple-400 to-indigo-500",
  },
  {
    icon: Users,
    title: "Personalized Small Group Classes",
    description:
      "We keep our class sizes small to give every child the attention they deserve and create meaningful learning connections.",
    color: "from-emerald-400 to-cyan-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-br from-icreative-pink-light via-purple-50/50 to-blue-50/30 py-20 lg:py-28 px-6 lg:px-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-icreative-green/5 to-icreative-magenta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-icreative-purple/5 to-icreative-pink/5 rounded-full blur-3xl" />

      {/* Floating Elements */}
      <div
        className="absolute top-20 right-20 w-8 h-8 border-2 border-icreative-purple/20 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      />
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-icreative-green/20 rounded-full animate-bounce" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-icreative-purple/20 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-icreative-magenta rounded-full animate-pulse" />
            <span className="text-icreative-purple font-inter text-sm font-medium">
              Why Choose iCreative Learning
            </span>
          </div>

          <h2 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-icreative-magenta to-icreative-purple bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <p className="text-icreative-grey font-inter text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Our innovative approach to education combines personalized learning
            paths with engaging curriculum, ensuring every child reaches their
            full potential.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 border border-white/50 hover:border-icreative-purple/20"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>

                {/* Floating Mini Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-icreative-green rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Title */}
                <h3 className="text-icreative-purple font-roboto text-lg lg:text-xl font-bold leading-tight group-hover:text-icreative-magenta transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-icreative-grey font-inter text-sm lg:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div
                className={`mt-6 h-1 bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50 max-w-4xl mx-auto">
            <h3 className="text-icreative-purple font-roboto text-2xl lg:text-3xl font-bold mb-4">
              Experience the iCreative Difference
            </h3>
            <p className="text-icreative-grey font-inter text-lg mb-8 max-w-2xl mx-auto">
              Join our community of learners and see how our research-backed
              methods can transform your child's educational journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://icreativelearning.com/registeration/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-icreative-green to-green-400 hover:from-icreative-magenta hover:to-purple-500 text-black hover:text-white px-8 py-4 rounded-2xl font-inter text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule a Free Trial
              </a>

              <a
                href="mailto:info@iCreativeLearning.com"
                className="group border-2 border-icreative-purple text-icreative-purple hover:bg-icreative-purple hover:text-white px-8 py-4 rounded-2xl font-inter text-lg font-bold transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
