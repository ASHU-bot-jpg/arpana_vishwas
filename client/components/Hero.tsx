export default function Hero() {
  return (
    <section className="px-6 lg:px-20 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
          {/* Main Headline */}
          <h1 className="text-icreative-purple font-roboto text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
            Empowering Elementary Students Through Creative, Fun, and Effective Learning Programs.
          </h1>
          
          {/* Subheadline */}
          <p className="text-icreative-grey font-roboto text-lg lg:text-xl xl:text-2xl leading-relaxed">
            Backed by Research, Theories of Learning, and Cognitive Psychology.
          </p>
          
          {/* CTA Button */}
          <button className="bg-icreative-green text-black px-8 py-4 lg:px-10 lg:py-5 rounded-3xl font-inter text-base font-bold hover:bg-green-400 transition-colors shadow-lg shadow-white/50">
            Book Your Free Assessment
          </button>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7ec4d7891358269d942bd3ec0d7a90aeb0fec769?width=1021" 
              alt="Smiley kids in the main plan" 
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl shadow-lg shadow-black/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
