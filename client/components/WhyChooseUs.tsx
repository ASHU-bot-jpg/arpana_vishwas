import { Lightbulb, BookOpen, Users, CheckCircle, Users as GroupIcon, Puzzle } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: "Focus on Cognitive development",
    description: "We don't just teach subjects—we develop minds. Every session is designed to strengthen memory, attention, logical reasoning, critical thinking, and problem-solving skills. These core cognitive abilities are essential for lifelong learning and academic success."
  },
  {
    icon: BookOpen,
    title: "Advanced Curriculum that inspires",
    description: "We go beyond standard classroom instruction. Our Math and ELA programs teach concepts that are one to two grade levels ahead of public school curriculam—keeping students challenged, motivated, and confident."
  },
  {
    icon: Puzzle,
    title: "Smart Fun That Sticks",
    description: "By combining academic advancement with cognitive training and creativity, our students learn more, retain more, and enjoy the process every step of the way."
  },
  {
    icon: CheckCircle,
    title: "Designed for Real Results",
    description: "Parents see improved problem-solving skills, vocabulary, reading comprehension, and math confidence within weeks."
  },
  {
    icon: GroupIcon,
    title: "Experienced, Caring Educators",
    description: "Our teachers are passionate about making a difference and use gentle, encouraging methods."
  },
  {
    icon: Users,
    title: "Personalized Small Group Classes",
    description: "We keep our class sizes small to give every child the attention they deserve."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-icreative-pink-light py-16 lg:py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Why Choose Us
          </h2>
          <p className="text-icreative-text-secondary font-inter text-base max-w-3xl mx-auto">
            Our innovative approach to education combines personalized learning paths with engaging curriculum.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Icon Circle */}
              <div className="flex justify-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-icreative-feature-bg rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-icreative-magenta-dark" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-black font-inter text-lg lg:text-xl font-bold leading-tight">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-icreative-text-secondary font-inter text-sm lg:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
