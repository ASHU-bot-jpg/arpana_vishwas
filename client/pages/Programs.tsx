import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "Cognitive Math",
    image: "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F9991320143bb4a38609b0acd205800f1fecd1c14",
    features: [
      "Hands-on Math Activities",
      "Applied math in everyday situations",
      "Logic puzzles & brainy games"
    ]
  },
  {
    title: "English Language Arts (ELA)",
    image: "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F3af1a4c868f7209af62fd7087a32248d4b577f3b",
    features: [
      "Creative writing and storytelling",
      "Grammar games and Vocabulary building",
      "Reading comprehension with interactive exercises"
    ]
  },
  {
    title: "Abacus",
    image: "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fe529c8a3ea2bf89e529587b48791374c539f62ae",
    features: [
      "Mental Math Mastery",
      "Boosts Concentration and Memory",
      "Builds Confidence and Academic Readiness"
    ]
  },
  {
    title: "CogAT",
    image: "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fd2648da984b74a3182e357486ae6e390",
    features: [
      "Sharpens Logical and Abstract Thinking",
      "Prepares for gifted and talented testing",
      "Encourages Cognitive Flexibility"
    ]
  }
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold">
              Our Core Offerings
            </h1>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-icreative-pink rounded-3xl shadow-md shadow-gray-400 overflow-hidden"
              >
                {/* Program Image */}
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={`${program.title} program`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Program Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Program Title Badge */}
                  <div className="inline-flex mb-4">
                    <div className="bg-icreative-magenta text-white px-6 py-3 rounded-2xl shadow-md shadow-purple-800/30">
                      <h3 className="font-inter text-lg lg:text-xl font-bold">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-3 mb-6 flex-grow">
                    {program.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                      >
                        <span className="font-inter text-xs lg:text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Register Button */}
                  <div className="flex justify-end mt-auto">
                    <Link
                      to="/register"
                      className="bg-icreative-green text-black px-8 py-3 rounded-2xl font-inter text-lg font-bold hover:bg-green-400 transition-colors text-center"
                    >
                      Register Here
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
