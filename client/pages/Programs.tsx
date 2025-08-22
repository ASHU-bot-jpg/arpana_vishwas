import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const programs = [
  {
    id: "cognitive-math",
    title: "Cognitive Math",
    description:
      "Building mathematical thinking through hands-on exploration and real-world applications",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F9991320143bb4a38609b0acd205800f1fecd1c14",
    features: [
      "Hands-on Math Activities",
      "Applied math in everyday situations",
      "Logic puzzles & brainy games",
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "english-literature-arts",
    title: "English Language Arts (ELA)",
    description:
      "Developing language skills through creative expression and interactive learning",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F3af1a4c868f7209af62fd7087a32248d4b577f3b",
    features: [
      "Creative writing and storytelling",
      "Grammar games and Vocabulary building",
      "Reading comprehension with interactive exercises",
    ],
    color: "from-green-500 to-teal-600",
  },
  {
    id: "abacus",
    title: "Abacus",
    description:
      "Ancient tool for modern minds - master mental math with confidence",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fe529c8a3ea2bf89e529587b48791374c539f62ae",
    features: [
      "Mental Math Mastery",
      "Boosts Concentration and Memory",
      "Builds Confidence and Academic Readiness",
    ],
    color: "from-orange-500 to-red-600",
  },
  {
    id: "cogat",
    title: "CogAT",
    description:
      "Cognitive abilities test preparation for gifted and talented programs",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fd2648da984b74a3182e357486ae6e390",
    features: [
      "Sharpens Logical and Abstract Thinking",
      "Prepares for gifted and talented testing",
      "Encourages Cognitive Flexibility",
    ],
    color: "from-purple-500 to-pink-600",
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-icreative-purple to-icreative-magenta bg-clip-text text-transparent mb-4">
              <h1 className="font-roboto text-4xl lg:text-5xl xl:text-6xl font-bold">
                Our Core Offerings
              </h1>
            </div>
            <p className="text-icreative-grey font-inter text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive educational programs designed to unlock
              your child's potential and build a strong foundation for lifelong
              learning
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Link
                key={index}
                to={`/program/${program.id}`}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 overflow-hidden border border-gray-100 block"
              >
                {/* Program Image with Overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={program.image}
                    alt={`${program.title} program`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                  {/* Floating Title on Hover */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-center">
                    <h3 className="text-white font-roboto text-2xl lg:text-3xl font-bold mb-2 drop-shadow-lg">
                      {program.title}
                    </h3>
                    <p className="text-white/90 font-inter text-sm lg:text-base px-4 drop-shadow-lg">
                      View Program Details
                    </p>
                  </div>
                </div>

                {/* Program Content */}
                <div className="p-8 space-y-6">
                  {/* Title and Description */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-icreative-purple font-roboto text-xl lg:text-2xl font-bold group-hover:text-icreative-magenta transition-colors duration-300">
                        {program.title}
                      </h3>
                      <div className="w-8 h-1 bg-gradient-to-r from-icreative-green to-icreative-magenta rounded-full group-hover:w-12 transition-all duration-300" />
                    </div>
                    <p className="text-icreative-grey font-inter text-sm lg:text-base leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="text-icreative-purple font-inter text-sm font-semibold uppercase tracking-wider">
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 group/feature"
                        >
                          <div className="w-2 h-2 bg-icreative-green rounded-full group-hover/feature:bg-icreative-magenta transition-colors duration-300" />
                          <span className="text-icreative-grey font-inter text-sm lg:text-base group-hover/feature:text-icreative-purple transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-icreative-grey font-inter text-xs">
                          Ready to start?
                        </p>
                        <p className="text-icreative-purple font-inter text-sm font-semibold">
                          Join thousands of students
                        </p>
                      </div>
                      <span className="bg-gradient-to-r from-icreative-green to-green-400 group-hover:from-icreative-magenta group-hover:to-purple-500 text-black group-hover:text-white px-6 py-3 rounded-2xl font-inter text-sm lg:text-base font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                        Learn More
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-icreative-purple to-icreative-magenta rounded-3xl p-12 text-white">
            <h2 className="font-roboto text-2xl lg:text-3xl font-bold mb-4">
              Ready to Begin Your Child's Learning Journey?
            </h2>
            <p className="font-inter text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a free assessment today and discover which program is
              perfect for your child's unique learning style
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-icreative-purple px-8 py-4 rounded-2xl font-inter text-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Free Assessment
              </Link>
              <Link
                to="/"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-inter text-lg font-bold hover:bg-white hover:text-icreative-purple transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
