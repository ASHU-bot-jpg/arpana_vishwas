import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-6 lg:px-20 bg-gradient-to-br from-icreative-pink-light to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                About iCreative Learning
              </h1>
              <p className="text-icreative-grey font-roboto text-lg lg:text-xl leading-relaxed">
                Empowering elementary students through creative, fun, and
                effective learning programs backed by research, theories of
                learning, and cognitive psychology.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-icreative-green px-4 py-2 rounded-full">
                  <span className="text-black font-inter text-sm font-medium">
                    Research-Based
                  </span>
                </div>
                <div className="bg-icreative-green px-4 py-2 rounded-full">
                  <span className="text-black font-inter text-sm font-medium">
                    Small Classes
                  </span>
                </div>
                <div className="bg-icreative-green px-4 py-2 rounded-full">
                  <span className="text-black font-inter text-sm font-medium">
                    Expert Teachers
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F207fa1fe890448b0bab08c6c477ca4cd"
                  alt="Happy children learning together at iCreative Learning"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl shadow-lg shadow-black/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="py-16 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Mission Section */}
          <section className="mb-16">
            <h2 className="text-icreative-purple font-roboto text-2xl lg:text-3xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-icreative-grey font-roboto text-base lg:text-lg leading-relaxed mb-4">
              At iCreative Learning, we believe that every child has the
              potential to excel academically while developing critical thinking
              skills that will serve them throughout their lives. Our mission is
              to blend creativity with curriculum to make Math and English
              Language Arts (ELA) exciting, enriching, and empowering for
              elementary school kids.
            </p>
            <p className="text-icreative-grey font-roboto text-base lg:text-lg leading-relaxed">
              We don't just teach subjects—we develop minds. Every session is
              designed to strengthen memory, attention, logical reasoning,
              critical thinking, and problem-solving skills. These core
              cognitive abilities are essential for lifelong learning and
              academic success.
            </p>
          </section>

          {/* Approach Section */}
          <section className="mb-16">
            <h2 className="text-icreative-purple font-roboto text-2xl lg:text-3xl font-bold mb-6">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-icreative-pink-light p-6 rounded-2xl">
                <h3 className="text-icreative-purple font-roboto text-xl font-bold mb-4">
                  Research-Based Methods
                </h3>
                <p className="text-icreative-grey font-roboto text-base leading-relaxed">
                  Our programs are grounded in educational research, learning
                  theories, and cognitive psychology to ensure effective and
                  lasting results.
                </p>
              </div>
              <div className="bg-icreative-pink-light p-6 rounded-2xl">
                <h3 className="text-icreative-purple font-roboto text-xl font-bold mb-4">
                  Creative Learning
                </h3>
                <p className="text-icreative-grey font-roboto text-base leading-relaxed">
                  We combine academic advancement with cognitive training and
                  creativity, so students learn more, retain more, and enjoy the
                  process.
                </p>
              </div>
              <div className="bg-icreative-pink-light p-6 rounded-2xl">
                <h3 className="text-icreative-purple font-roboto text-xl font-bold mb-4">
                  Small Group Classes
                </h3>
                <p className="text-icreative-grey font-roboto text-base leading-relaxed">
                  We keep our class sizes small to give every child the personal
                  attention they deserve and ensure optimal learning outcomes.
                </p>
              </div>
              <div className="bg-icreative-pink-light p-6 rounded-2xl">
                <h3 className="text-icreative-purple font-roboto text-xl font-bold mb-4">
                  Experienced Educators
                </h3>
                <p className="text-icreative-grey font-roboto text-base leading-relaxed">
                  Our teachers are passionate about making a difference and use
                  gentle, encouraging methods to build confidence.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h2 className="text-icreative-purple font-roboto text-2xl lg:text-3xl font-bold mb-6">
              Why Choose iCreative Learning?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-icreative-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-icreative-purple font-roboto text-lg font-bold mb-2">
                    Advanced Curriculum
                  </h4>
                  <p className="text-icreative-grey font-roboto text-base leading-relaxed">
                    Our Math and ELA programs teach concepts that are one to two
                    grade levels ahead of public school curriculum—keeping
                    students challenged, motivated, and confident.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-icreative-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-icreative-purple font-roboto text-lg font-bold mb-2">
                    Proven Results
                  </h4>
                  <p className="text-icreative-grey font-roboto text-base leading-relaxed">
                    Parents see improved problem-solving skills, vocabulary,
                    reading comprehension, and math confidence within weeks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-icreative-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-icreative-purple font-roboto text-lg font-bold mb-2">
                    Cognitive Development Focus
                  </h4>
                  <p className="text-icreative-grey font-roboto text-base leading-relaxed">
                    We strengthen core cognitive abilities including memory,
                    attention, logical reasoning, critical thinking, and
                    problem-solving skills.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Team Section */}
          <section id="our-team" className="mb-16">
            <h2 className="text-icreative-purple font-roboto text-2xl lg:text-3xl font-bold mb-8 text-center">
              Meet Our Team
            </h2>
            <p className="text-icreative-grey font-roboto text-base lg:text-lg leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Our passionate educators are dedicated to nurturing young minds
              and helping students reach their full potential through innovative
              teaching methods.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Team Member 1 - Ms. Nandita Mishra */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 bg-icreative-pink rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F50cd460d113f444195bd8d947322c08e"
                    alt="Ms. Nandita Mishra"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-icreative-purple font-roboto text-lg font-bold text-center mb-2">
                  Ms. Nandita Mishra
                </h3>
                <p className="text-icreative-grey font-roboto text-sm leading-relaxed text-center">
                  I have done Master's degree in Psychology. I am board
                  certified teacher working with elementary students for the
                  last 13 years. I'm part of iCreative Learning for the last 3
                  years!
                </p>
              </div>

              {/* Team Member 2 - Ms. Santhoshi Kumar */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 bg-icreative-pink rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F8b0275fd07f24b09b0d9e4980f00203f"
                    alt="Ms. Santhoshi Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-icreative-purple font-roboto text-lg font-bold text-center mb-2">
                  Ms. Santhoshi Kumar
                </h3>
                <p className="text-icreative-grey font-roboto text-sm leading-relaxed text-center">
                  A certified early childhood teacher, who is very passionate
                  about teaching little kids. I have been a Montessori teacher
                  for 8 years and ICreative Learning teacher for 6 years. My aim
                  is to nurture curiosity in the young brains and turn them into
                  great learners.
                </p>
              </div>

              {/* Team Member 3 - Ms. Bhagya */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 bg-icreative-pink rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F4581441d34fa44e18bbcc89adbb93d62"
                    alt="Ms. Bhagya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-icreative-purple font-roboto text-lg font-bold text-center mb-2">
                  Ms. Bhagya
                </h3>
                <p className="text-icreative-grey font-roboto text-sm leading-relaxed text-center">
                  With a Diploma in Elementary Teacher Education, I am a board
                  certified Elementary Teacher. I have been working as a
                  Mathematics teacher for Middle School students at the Public
                  School for the past three years and have been part of
                  iCreative Learning for the past year.
                </p>
              </div>
            </div>

            {/* Roles and Responsibilities */}
            <div className="bg-icreative-pink-light p-8 rounded-2xl">
              <h3 className="text-icreative-purple font-roboto text-xl lg:text-2xl font-bold mb-6 text-center">
                Our Teaching Philosophy & Responsibilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-icreative-purple font-roboto text-lg font-bold">
                    Our Educators Are Responsible For:
                  </h4>
                  <ul className="space-y-2 text-icreative-grey font-roboto text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-icreative-green font-bold">•</span>
                      Creating engaging and interactive learning experiences
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-icreative-green font-bold">•</span>
                      Monitoring individual student progress and adaptation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-icreative-green font-bold">•</span>
                      Maintaining small class sizes for personalized attention
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-icreative-green font-bold">•</span>
                      Regular communication with parents about student
                      development
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-icreative-purple font-roboto text-lg font-bold">
                    Teaching Methods & Approach:
                  </h4>
                  <ul className="space-y-2 text-icreative-grey font-roboto text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-icreative-green font-bold">•</span>
                      Research-based cognitive development techniques
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-icreative-green font-bold">•</span>
                      Creative and fun learning methodologies
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-icreative-green font-bold">•</span>
                      Positive reinforcement and encouragement
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-icreative-green font-bold">•</span>
                      Building confidence through achievement milestones
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center bg-icreative-pink-light p-8 rounded-2xl">
            <h2 className="text-icreative-purple font-roboto text-2xl lg:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-icreative-grey font-roboto text-base lg:text-lg leading-relaxed mb-6">
              Join our community of successful learners and watch your child's
              confidence and abilities soar.
            </p>
            <a
              href="/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-icreative-green text-black px-8 py-4 rounded-3xl font-inter text-base font-bold hover:bg-green-400 transition-colors inline-block"
            >
              Book Your Free Assessment
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
