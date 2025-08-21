export default function Introduction() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
        {/* Text Section */}
        <div className="bg-icreative-pink-light flex items-center py-8 lg:py-16 order-2 lg:order-1">
          <div className="px-6 lg:px-12 xl:px-16 w-full">
            <p className="text-icreative-purple font-roboto text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-lg">
              At iCreative Learning, we blend creativity with curriculum to make
              Math and English Language Arts (ELA) exciting, enriching, and
              empowering for elementary school kids.
            </p>
          </div>
        </div>

        {/* Image Section with Gradient Background */}
        <div className="relative min-h-[250px] md:min-h-[300px] lg:min-h-full order-1 lg:order-2">
          {/* Gradient Background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80.55% 61.82% at 68.94% 70.87%, #E407FD 0%, #FEF5FF 100%)",
            }}
          />

          {/* Innovation Elements Image */}
          <div className="absolute inset-0 flex items-center justify-center p-3 lg:p-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F8aa4cf09caeb4e58bde5caf7b6aa17fa"
              alt="Flat lay composition with innovation elements"
              className="w-full h-full max-w-md lg:max-w-lg max-h-60 md:max-h-80 lg:max-h-full object-cover opacity-90 rounded-lg"
              style={{ filter: "blur(1px)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
