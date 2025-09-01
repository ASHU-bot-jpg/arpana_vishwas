import { Quote, Star, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    text: "To all the teachers at iCreative Learning: Thank you for providing such wonderful learning experience for Reyansh. It's been 3 years now since he joined iCreative Learning programs and we have noticed a lot of improvements in his skill set, earlier at Math and now in Language Art. He has grown more confident in problem solving and tackling challenges. One specific example that stands out is he has started doing his school homework and the research related to it independently which wasn't the case earlier :) We do help sometimes but there is a significant change in him! We appreciate the dedication and effort you all put in and we look forward to seeing Reyansh continue to grow.",
    author: "Aarti",
    role: "Reyansh's Mom",
    rating: 5,
    duration: "3 years with us",
    highlight: "Improved independence and confidence",
  },
  {
    text: "We've had a wonderful experience with your program! Shaunak has shown great improvement in writing and comprehension, thanks to Ms. Haripriya and Ms. Arpana for an accommodating approach and personalized guidance. He's become more focused, taking the time to read carefully instead of rushing to answers. His confidence has also grown—he was especially proud when he wrote more words than his classmates! Thank you for making learning such a positive and enriching experience.",
    author: "Nikita",
    role: "Shaunak's Mom",
    rating: 5,
    duration: "1 year with us",
    highlight: "Enhanced writing and comprehension",
  },
  {
    text: "Iraa is having fun learning in her class. Teachers are very nice and supportive. I can see improvement in her academics. Thank you ICreative Learning.",
    author: "Pavani",
    role: "Iraa's Mom",
    rating: 5,
    duration: "6 months with us",
    highlight: "Academic improvement with fun",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 px-6 lg:px-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-icreative-green/10 to-icreative-magenta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-icreative-purple/10 to-icreative-pink/10 rounded-full blur-3xl" />

      {/* Floating Quote Icons */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-16 h-16 text-icreative-purple" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 rotate-180">
        <Quote className="w-20 h-20 text-icreative-magenta" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-icreative-purple/10 to-icreative-magenta/10 border border-icreative-purple/20 px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-icreative-magenta" />
            <span className="text-icreative-purple font-inter text-sm font-medium">
              Testimonials
            </span>
          </div>

          <h2 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            What{" "}
            <span className="bg-gradient-to-r from-icreative-magenta to-icreative-purple bg-clip-text text-transparent">
              Parents Say
            </span>
          </h2>

          <p className="text-icreative-grey font-inter text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover how our programs have transformed the learning journey of
            hundreds of students
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-icreative-purple/5 to-icreative-magenta/5 p-6 border-b border-gray-50">
                <div className="flex items-center justify-between mb-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <div className="w-10 h-10 bg-gradient-to-r from-icreative-green to-icreative-magenta rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 bg-icreative-green/20 text-icreative-purple px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-icreative-green rounded-full" />
                  <span className="font-inter text-xs font-medium">
                    {testimonial.highlight}
                  </span>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-6 space-y-6">
                {/* Testimonial Text */}
                <div className="space-y-4">
                  <p className="text-icreative-grey font-inter text-sm lg:text-base leading-relaxed line-clamp-6 group-hover:line-clamp-none transition-all duration-300">
                    {testimonial.text}
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-icreative-purple font-roboto text-base font-bold">
                        {testimonial.author}
                      </p>
                      <p className="text-icreative-grey font-inter text-sm">
                        {testimonial.role}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="bg-icreative-purple/10 text-icreative-purple px-3 py-1 rounded-lg">
                        <span className="font-inter text-xs font-medium">
                          {testimonial.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-icreative-green via-icreative-magenta to-icreative-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-icreative-purple to-icreative-magenta rounded-3xl p-8 lg:p-12 text-white max-w-4xl mx-auto">
            <h3 className="font-roboto text-2xl lg:text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="font-inter text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Experience the same transformation for your child. Schedule a free
              assessment and see why parents trust iCreative Learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-icreative-purple px-8 py-4 rounded-2xl font-inter text-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Free Assessment
              </a>
              <a
                href="https://icreativelearning.com/cart/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-inter text-lg font-bold hover:bg-white hover:text-icreative-purple transition-all duration-300"
              >
                Pay Fees
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
