const PHONE_DISPLAY = "+1 (346) 407-1258";
const EMAIL_DISPLAY = "services@mylinkinsurance.com"
const PHONE_TEL = "+13464071258";

export default function Footer() {
  return (
    <footer id="contact">
      {/* Top CTA band */}
      <div className="relative bg-black">
        <div className="absolute inset-0 opacity-60">
          <img src="/hero.PNG" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center text-white">
          <h3 className="text-3xl font-extrabold sm:text-4xl">
            Do you need help choosing <br className="hidden sm:block" />
            the best insurance to fit <br className="hidden sm:block" />
            your needs?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            We take the time to understand your needs and help you find coverage
            that delivers value, protection, and peace of mind.
          </p>

          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-8 inline-flex rounded-md bg-green-600 px-7 py-3 font-semibold text-white hover:bg-green-700"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-4 p-3">
            <div>
              <div className="flex items-center gap-3">
                <img src="/link-logo.png" alt="Link Insurance" className="h-20 w-auto" />
                <div className="font-semibold">Link Insurance</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Protect And Connect
              </p>
            </div>

            <div>
              <div className="font-semibold">Services</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Personal Auto</li>
                <li>Homeowners</li>
                <li>Renters</li>
                <li>Commercial Auto</li>
                <li>General Liability</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold">Contact Us</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <a className="hover:text-slate-900" href={`tel:${PHONE_TEL}`}>
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href={`tel:${PHONE_TEL}`}>
                    {EMAIL_DISPLAY}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="container border-t py-6 text-sm text-gray-600 flex justify-between flex-wrap gap-3">
            <p>© {new Date().getFullYear()} Link Insurance All Rights Reserved</p>
            <p>
              Developed by{" "}
              <a
                href="https://yourbizsuite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 font-semibold"
              >
                YourBizSuite Software
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}