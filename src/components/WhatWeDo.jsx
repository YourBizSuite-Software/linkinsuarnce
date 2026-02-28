import SectionTitle from "./SectionTitle";

const items = [
  {
    title: "Personal Auto",
    desc:
      "Drive with confidence — your peace of mind on every mile. Coverage that protects you and others in case of an accident.",
    img: "/auto1.PNG",
  },
  {
    title: "Homeowners",
    desc:
      "Protect your home, protect your future. Coverage for unexpected events like fire, storms, and theft.",
    img: "/home1.PNG",
  },
  {
    title: "Renters",
    desc:
      "Because your personal items deserve protection too. Affordable plans built for your lifestyle.",
    img: "/renters.PNG",
  },
  {
    title: "Commercial Auto",
    desc:
      "From one truck to a fleet — coverage that keeps your operations moving safely and legally.",
    img: "/commercialAuto.PNG",
  },
  {
    title: "Commercial Property",
    desc:
      "Safeguard your business assets from the unexpected — so you can focus on running your business.",
    img: "/commercialProperty.PNG",
  },
  {
    title: "General Liability",
    desc:
      "Essential protection for every business owner — coverage against common claims and risks.",
    img: "/liability1.PNG",
  },
];

export default function WhatWeDo() {
  return (
    <section id="coverage" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="What We Do"
          subtitle="We provide an unbiased assessment of your needs and recommend cost-effective coverage options."
        />

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {items.map((x) => (
            <div key={x.title} className="text-center">
              <div className="mx-auto h-36 w-36 overflow-hidden rounded-full ring-4 ring-slate-100">
                <img
                  src={x.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold">{x.title}</h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600">
                {x.desc}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}