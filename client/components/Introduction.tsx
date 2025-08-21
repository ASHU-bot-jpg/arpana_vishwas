export default function Introduction() {
  return (
    <section className="relative overflow-hidden">
      {/* Text Section */}
      <div className="bg-icreative-pink-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-2xl">
            <p className="text-icreative-purple font-roboto text-lg lg:text-xl xl:text-2xl leading-relaxed">
              At iCreative Learning, we blend creativity with curriculum to make Math and English Language Arts (ELA) exciting, enriching, and empowering for elementary school kids.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section with Gradient Background */}
      <div className="relative h-72 lg:h-96">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 border border-black"
          style={{
            background: 'radial-gradient(80.55% 61.82% at 68.94% 70.87%, #E407FD 0%, #FEF5FF 100%)'
          }}
        />
        
        {/* Innovation Elements Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/6cfba4bb03d8e82f57d95caee6f6c615e5ec3b14?width=1246" 
            alt="Flat lay composition with innovation elements" 
            className="w-full h-full object-cover opacity-90"
            style={{ filter: 'blur(1px)' }}
          />
        </div>
      </div>
    </section>
  );
}
