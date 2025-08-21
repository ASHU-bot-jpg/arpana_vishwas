const testimonials = [
  {
    text: "To all the teachers at iCreative Learning: Thank you for providing such wonderful learning experience for Reyansh. It's been 3 years now since he joined iCreative Learning programs and we have noticed a lot of improvements in his skill set, earlier at Math and now in Language Art. He has grown more confident in problem solving and tackling challenges. One specific example that stands out is he has started doing his school homework and the research related to it independently which wasn't the case earlier :) We do help sometimes but there is a significant change in him! We appreciate the dedication and effort you all put in and we look forward to seeing Reyansh continue to grow.",
    author: "Aarti",
    role: "Reyansh's Mom"
  },
  {
    text: "We've had a wonderful experience with your program! Shaunak has shown great improvement in writing and comprehension, thanks to Ms. Haripriya and Ms. Arpana for an accommodating approach and personalized guidance. He's become more focused, taking the time to read carefully instead of rushing to answers. His confidence has also grown—he was especially proud when he wrote more words than his classmates! Thank you for making learning such a positive and enriching experience.",
    author: "Nikita",
    role: "Shaunak's Mom"
  },
  {
    text: "Iraa is having fun learning in her class. Teachers are very nice and supportive. I can see improvement in her academics. Thank you ICreative Learning.",
    author: "Pavani",
    role: "Iraa's Mom"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold">
            What Parents Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border-t-2 border-purple-400 shadow-lg shadow-purple-200 p-6 space-y-6"
            >
              {/* Testimonial Text */}
              <div className="space-y-4">
                <p className="text-black font-inter text-xs lg:text-sm leading-relaxed text-justify">
                  {testimonial.text}
                </p>
              </div>
              
              {/* Author Info */}
              <div className="space-y-1">
                <p className="text-black font-roboto text-sm font-bold">
                  {testimonial.author}
                </p>
                <p className="text-icreative-text-light font-roboto text-xs lg:text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
