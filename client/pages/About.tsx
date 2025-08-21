import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
              About iCreative Learning
            </h1>
            <p className="text-icreative-grey font-roboto text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Empowering elementary students through creative, fun, and effective learning programs backed by research, theories of learning, and cognitive psychology.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16">
            <h2 className="text-icreative-purple font-roboto text-2xl lg:text-3xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-icreative-grey font-roboto text-base lg:text-lg leading-relaxed mb-4">
              At iCreative Learning, we believe that every child has the potential to excel academically while developing critical thinking skills that will serve them throughout their lives. Our mission is to blend creativity with curriculum to make Math and English Language Arts (ELA) exciting, enriching, and empowering for elementary school kids.
            </p>
            <p className="text-icreative-grey font-roboto text-base lg:text-lg leading-relaxed">
              We don't just teach subjects—we develop minds. Every session is designed to strengthen memory, attention, logical reasoning, critical thinking, and problem-solving skills. These core cognitive abilities are essential for lifelong learning and academic success.
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
                  Our programs are grounded in educational research, learning theories, and cognitive psychology to ensure effective and lasting results.
                </p>
              </div>
              <div className="bg-icreative-pink-light p-6 rounded-2xl">
                <h3 className="text-icreative-purple font-roboto text-xl font-bold mb-4">
                  Creative Learning
                </h3>
                <p className="text-icreative-grey font-roboto text-base leading-relaxed">
                  We combine academic advancement with cognitive training and creativity, so students learn more, retain more, and enjoy the process.
                </p>
              </div>
              <div className="bg-icreative-pink-light p-6 rounded-2xl">
                <h3 className="text-icreative-purple font-roboto text-xl font-bold mb-4">
                  Small Group Classes
                </h3>
                <p className="text-icreative-grey font-roboto text-base leading-relaxed">
                  We keep our class sizes small to give every child the personal attention they deserve and ensure optimal learning outcomes.
                </p>
              </div>
              <div className="bg-icreative-pink-light p-6 rounded-2xl">
                <h3 className="text-icreative-purple font-roboto text-xl font-bold mb-4">
                  Experienced Educators
                </h3>
                <p className="text-icreative-grey font-roboto text-base leading-relaxed">
                  Our teachers are passionate about making a difference and use gentle, encouraging methods to build confidence.
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
                    Our Math and ELA programs teach concepts that are one to two grade levels ahead of public school curriculum—keeping students challenged, motivated, and confident.
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
                    Parents see improved problem-solving skills, vocabulary, reading comprehension, and math confidence within weeks.
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
                    We strengthen core cognitive abilities including memory, attention, logical reasoning, critical thinking, and problem-solving skills.
                  </p>
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
              Join our community of successful learners and watch your child's confidence and abilities soar.
            </p>
            <button className="bg-icreative-green text-black px-8 py-4 rounded-3xl font-inter text-base font-bold hover:bg-green-400 transition-colors">
              Book Your Free Assessment
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
