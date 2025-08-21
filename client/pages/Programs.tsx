import Header from '../components/Header';
import Footer from '../components/Footer';

const programs = [
  {
    title: "Cognitive Math",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/9e8880e6728872eeb90a29f2dc8031f923987935?width=1100",
    features: [
      "Hands-on Math Activities",
      "Applied math in everyday situations", 
      "Logic puzzles & brainy games"
    ]
  },
  {
    title: "English Language Arts (ELA)",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/13890d4fed97c3ea42c0b64d330a63988d3580dc?width=1100",
    features: [
      "Creative writing and storytelling",
      "Grammar games and Vocabulary building",
      "Reading comprehension with interactive exercises"
    ]
  },
  {
    title: "Abacus",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ad51db41265a51594088b89e3fd92d9b7ed864a9?width=1100",
    features: [
      "Mental Math Mastery",
      "Boosts Concentration and Memory",
      "Builds Confidence and Academic Readiness"
    ]
  },
  {
    title: "CogAT",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/bc5c3d4e60c875b1002f45fd7b9f3ee52ee644e3?width=1100",
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
                <div className="p-6 space-y-4">
                  {/* Program Title Badge */}
                  <div className="inline-flex">
                    <div className="bg-icreative-magenta text-white px-6 py-3 rounded-2xl shadow-md shadow-purple-800/30">
                      <h3 className="font-inter text-lg lg:text-xl font-bold">
                        {program.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Feature Tags */}
                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="inline-block mr-2 mb-2"
                      >
                        <div className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                          <span className="font-inter text-xs lg:text-sm">
                            {feature}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Register Button */}
                  <div className="pt-4">
                    <button className="bg-icreative-green text-black px-8 py-3 rounded-2xl font-inter text-lg font-bold hover:bg-green-400 transition-colors w-full sm:w-auto float-right">
                      Register Here
                    </button>
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
