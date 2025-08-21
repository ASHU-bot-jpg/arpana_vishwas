import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "CogAT",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ecc8a34818a06e93d4c8e0b6dafb60b7635c7eb8?width=545"
  },
  {
    title: "Cognitive Math",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/524c7d38c59612dcc131058ddfd229b02c7cbe1f?width=545"
  },
  {
    title: "ELA",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/11693bba33ed0a4d1a014c3849837105e2d30148?width=545"
  },
  {
    title: "Abacus",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/a05e4d70fe5d0f6a2529f37551feb54b6833df28?width=545"
  }
];

export default function CoreOfferings() {
  return (
    <section className="py-12 lg:py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold mb-8">
            Our Core Offerings
          </h2>
          
          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-icreative-pink rounded-3xl shadow-md shadow-black/40 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Program Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={`${program.title} program`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Program Label */}
                <div className="p-4 flex justify-center">
                  <div className="bg-icreative-green px-6 py-2 rounded-3xl">
                    <span className="text-black font-inter text-base font-normal">
                      {program.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Browse More Button */}
          <div className="flex justify-center">
            <button className="bg-icreative-green text-black px-6 py-3 rounded-3xl font-inter text-base font-bold flex items-center gap-2 hover:bg-green-400 transition-colors shadow-lg shadow-white/50">
              Browse more
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
