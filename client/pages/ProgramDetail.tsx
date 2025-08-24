import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Award,
} from "lucide-react";

const programs = {
  cogat: {
    title: "Cognitive Abilities Test (CogAT)",
    subtitle: "Unlock Your Child's Learning Potential",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ecc8a34818a06e93d4c8e0b6dafb60b7635c7eb8?width=545",
    color: "from-blue-500 to-purple-600",
    description:
      "The CogAT is a trusted, age-appropriate assessment that reveals how children think—not just what they know. It measures verbal, quantitative, and nonverbal reasoning through fun, grade-level tasks. Ideal for identifying strengths in logic, memory, and reasoning, the CogAT helps guide personalized learning paths and supports placement in advanced programs. For students up to Grade 5, our coaching ensures they approach the test with confidence, readiness, and the right strategies to shine.",
    features: [
      "Verbal, quantitative, and nonverbal reasoning assessment",
      "Age-appropriate, fun grade-level tasks",
      "Identifies strengths in logic, memory, and reasoning",
      "Guides personalized learning paths",
      "Supports placement in advanced programs",
      "Confidence-building test preparation strategies",
    ],
    ageRange: "1st and 2nd Grade",
    duration: "60 minutes per week",
    classSize: "1-5 students",
  },
  "cognitive-math": {
    title: "Cognitive Math",
    subtitle: "Where Math Meets Critical Thinking",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/524c7d38c59612dcc131058ddfd229b02c7cbe1f?width=545",
    color: "from-green-500 to-teal-600",
    description:
      "Cognitive Math blends problem-solving, visual reasoning, and real-world scenarios to strengthen mathematical thinking rather than just memorizing facts. Drawing on research-based methods, our curriculum encourages students to use their experiences and reasoning skills to solve age-appropriate challenges—making math intuitive, relevant, and fun from kindergarten through Grade 5.",
    features: [
      "Problem-solving and visual reasoning focus",
      "Real-world mathematical scenarios",
      "Research-based teaching methods",
      "Experience-based learning approach",
      "Age-appropriate mathematical challenges",
      "Intuitive and relevant math concepts",
    ],
    ageRange: "1st - 5th Grade",
    duration: "60 minutes per week",
    classSize: "1-5 students",
  },
  "english-literature-arts": {
    title: "English Literature & Arts",
    subtitle: "Ignite a Love for Reading and Expression",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/11693bba33ed0a4d1a014c3849837105e2d30148?width=545",
    color: "from-orange-500 to-red-600",
    description:
      "Our English Literature & Arts program goes beyond basic grammar and spelling. Through storytelling, classic and contemporary literature, discussion, creative writing, and expressive arts, students develop deeper comprehension, vocabulary, and creative expression. Inspired by integrated ELA programs that bring together literary, nonfiction, and multimedia elements, this curriculum cultivates confident readers and compassionate thinkers.",
    features: [
      "Classic and contemporary literature exploration",
      "Creative writing and storytelling",
      "Discussion-based learning",
      "Expressive arts integration",
      "Deeper comprehension development",
      "Vocabulary and creative expression enhancement",
    ],
    ageRange: "1st and 7th Grade",
    duration: "60 minutes per week",
    classSize: "1-5 students",
  },
  abacus: {
    title: "Abacus Mastery (Mental Arithmetic)",
    subtitle: "Build Speed, Focus, and Mathematical Confidence",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/a05e4d70fe5d0f6a2529f37551feb54b6833df28?width=545",
    color: "from-purple-500 to-pink-600",
    description:
      "Abacus training develops powerful mental math skills by teaching students to visualize bead movements in their minds. This hands-on learning improves concentration, memory, processing speed, and spatial awareness. Students gain rapid calculation abilities, sharpened cognition, and boosted confidence—making math mastery more fun and effective than ever. Ideal for building a strong STEM foundation early on.",
    features: [
      "Mental math visualization techniques",
      "Hands-on bead movement learning",
      "Improved concentration and memory",
      "Enhanced processing speed",
      "Spatial awareness development",
      "Strong STEM foundation building",
    ],
    ageRange: "Kindergarten to 3rd Grade",
    duration: "60 minutes per week",
    classSize: "1-5 students",
  },
};

export default function ProgramDetail() {
  const { programId } = useParams<{ programId: string }>();

  const program = programId
    ? programs[programId as keyof typeof programs]
    : null;

  if (!program) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
        <Header />
        <div className="py-20 px-6 text-center">
          <h1 className="text-3xl font-bold text-icreative-purple mb-4">
            Program Not Found
          </h1>
          <Link
            to="/programs"
            className="text-icreative-magenta hover:underline"
          >
            Back to Programs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <Header />

      <main className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-icreative-purple hover:text-icreative-magenta transition-colors font-inter text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Program Image */}
            <div className="relative">
              <div
                className={`absolute -inset-4 bg-gradient-to-r ${program.color} rounded-3xl blur-lg opacity-30`}
              />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Program Details */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-icreative-purple/10 to-icreative-magenta/10 border border-icreative-purple/20 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-icreative-magenta" />
                  <span className="text-icreative-purple font-inter text-sm font-medium">
                    Premium Program
                  </span>
                </div>

                <h1 className="text-icreative-purple font-roboto text-3xl lg:text-4xl font-bold">
                  {program.title}
                </h1>

                <p className="text-icreative-magenta font-roboto text-xl lg:text-2xl font-medium">
                  {program.subtitle}
                </p>
              </div>


              {/* Program Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/50">
                  <Users className="w-6 h-6 text-icreative-purple mx-auto mb-2" />
                  <p className="text-icreative-grey font-inter text-xs">
                    Class Size
                  </p>
                  <p className="text-icreative-purple font-roboto text-sm font-bold">
                    {program.classSize}
                  </p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/50">
                  <Clock className="w-6 h-6 text-icreative-purple mx-auto mb-2" />
                  <p className="text-icreative-grey font-inter text-xs">
                    Duration
                  </p>
                  <p className="text-icreative-purple font-roboto text-sm font-bold">
                    {program.duration}
                  </p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/50">
                  <Award className="w-6 h-6 text-icreative-purple mx-auto mb-2" />
                  <p className="text-icreative-grey font-inter text-xs">
                    Age Range
                  </p>
                  <p className="text-icreative-purple font-roboto text-sm font-bold">
                    {program.ageRange}
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex justify-center">
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-icreative-magenta to-purple-500 text-white px-8 py-4 rounded-2xl font-inter text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>

          {/* Program Description */}
          <div className="mt-16 lg:mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50">
              <h2 className="text-icreative-purple font-roboto text-2xl lg:text-3xl font-bold mb-6">
                Program Overview
              </h2>
              <p className="text-icreative-grey font-inter text-lg leading-relaxed mb-8">
                {program.description}
              </p>

              <h3 className="text-icreative-purple font-roboto text-xl font-bold mb-6">
                What Your Child Will Learn
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-icreative-green flex-shrink-0" />
                    <span className="text-icreative-grey font-inter text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-icreative-purple to-icreative-magenta rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="font-roboto text-2xl lg:text-3xl font-bold mb-4">
              Ready to Enroll in {program.title}?
            </h3>
            <p className="font-inter text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join our program and watch your child develop exceptional skills
              and confidence in learning.
            </p>
            <div className="flex justify-center">
              <Link
                to="/register"
                className="bg-white text-icreative-purple px-8 py-4 rounded-2xl font-inter text-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
