const PHONE_TEL = "+13464071258";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[820px] w-full overflow-hidden">
        
        {/* Background Image */}
        <img
          src="/hero1.PNG"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Strong Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-4xl px-4 text-center text-white">

            {/* Large Logo */}
            <img
              src="/link-logo.png"
              alt="Link Insurance"
              className="mx-auto mb-8 w-40 sm:w-56 lg:w-64"
            />

            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              The right coverage <br className="hidden sm:block" />
              for the right price
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
              Affordable coverage. Excellent service. Real agents that answer.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="rounded-md bg-green-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-green-700"
              >
                Get a Quote
              </a>

              <a
                href="#contact"
                className="rounded-md border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}