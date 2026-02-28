export default function AboutCompany() {
  return (
    <section id="about" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
              We Take Pride In <br />
              Providing Our Policyholders <br />
              With The Best Possible <br />
              Insurance At A <br />
              Competitive Price
            </h2>

            <p className="mt-5 max-w-xl text-slate-600">
              We can help no matter your need — from personal coverage to customized business policies.
              Our goal is simple: help you protect what matters without overpaying.
            </p>

            <ul className="mt-6 grid gap-2 rounded-lg bg-white p-5 text-slate-700 shadow-sm ring-1 ring-slate-100">
              <li>• Excellent Service</li>
              <li>• Experienced Agents</li>
              <li>• Affordable Options</li>
              <li>• Fast Support</li>
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="/homeowners.PNG"
              alt=""
              className="h-44 w-full rounded-lg object-cover shadow-sm"
            />
            <div className="rounded-lg bg-green-700 p-6 text-white shadow-sm grid place-items-center text-center">
              <p className="text-lg font-semibold leading-snug">
                We are here to <br /> help you save
              </p>
            </div>
            <img
              src="/auto.PNG"
              alt=""
              className="h-44 w-full rounded-lg object-cover shadow-sm"
            />
            <img
              src="/liability.PNG"
              alt=""
              className="h-44 w-full rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}