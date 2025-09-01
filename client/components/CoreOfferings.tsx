import { ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    id: "cogat",
    title: "CogAT",
    subtitle: "Cognitive Abilities Test Prep",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ecc8a34818a06e93d4c8e0b6dafb60b7635c7eb8?width=545",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "cognitive-math",
    title: "Cognitive Math",
    subtitle: "Advanced Math Concepts",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/524c7d38c59612dcc131058ddfd229b02c7cbe1f?width=545",
    color: "from-green-500 to-teal-600",
  },
  {
    id: "english-literature-arts",
    title: "ELA",
    subtitle: "English Language Arts",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/11693bba33ed0a4d1a014c3849837105e2d30148?width=545",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "abacus",
    title: "Abacus",
    subtitle: "Mental Math Mastery",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/a05e4d70fe5d0f6a2529f37551feb54b6833df28?width=545",
    color: "from-purple-500 to-pink-600",
  },
];

export default function CoreOfferings() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-gradient-to-br from-icreative-green/10 to-icreative-magenta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-40 h-40 bg-gradient-to-br from-icreative-purple/10 to-icreative-pink/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-icreative-purple/10 to-icreative-magenta/10 border border-icreative-purple/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-icreative-magenta" />
            <span className="text-icreative-purple font-inter text-sm font-medium">
              Our Programs
            </span>
          </div>

          <h2 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Our Core Offerings
          </h2>

          <p className="text-icreative-grey font-inter text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our specialized programs designed to enhance cognitive
            abilities and academic excellence
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {programs.map((program, index) => (
            <Link
              key={index}
              to={`/program/${program.id}`}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 overflow-hidden border border-gray-100 block"
            >
              {/* Program Image with Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={`${program.title} program`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-center text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                    <p className="font-inter text-sm font-medium">Learn More</p>
                  </div>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-6 text-center space-y-4">
                {/* Program Title */}
                <div className="space-y-2">
                  <h3 className="text-icreative-purple font-roboto text-lg lg:text-xl font-bold group-hover:text-icreative-magenta transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-icreative-grey font-inter text-sm">
                    {program.subtitle}
                  </p>
                </div>

                {/* Program Badge */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-icreative-green to-green-400 group-hover:from-icreative-magenta group-hover:to-purple-500 px-6 py-2 rounded-2xl transition-all duration-300 transform group-hover:scale-105">
                    <span className="text-black group-hover:text-white font-inter text-sm font-bold transition-colors duration-300">
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-icreative-purple/5 to-icreative-magenta/5 rounded-3xl p-8 lg:p-12 border border-icreative-purple/10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-icreative-purple font-roboto text-2xl lg:text-3xl font-bold">
              Ready to Get Started?
            </h3>
            <p className="text-icreative-grey font-inter text-lg">
              Join thousands of students who have transformed their learning
              journey with our innovative programs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/register"
                className="group bg-gradient-to-r from-icreative-green to-green-400 hover:from-icreative-magenta hover:to-purple-500 text-black hover:text-white px-8 py-4 rounded-2xl font-inter text-base lg:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              >
                Register Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                to="/programs"
                className="group border-2 border-icreative-purple text-icreative-purple hover:bg-icreative-purple hover:text-white px-8 py-4 rounded-2xl font-inter text-base lg:text-lg font-bold transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                View All Programs
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
