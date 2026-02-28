const PHONE_TEL = "+13464071258";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/link-logo.png"
              alt="Link Insurance"
              className="h-20 w-auto"
            />
            <div className="leading-tight text-sky-600">
              <div className="font-semibold">Link Insurance</div>
              <div className="text-xs text-sky-600">
                Protect And Connect
              </div>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a className="transition hover:text-white" href="#home">Home</a>
            <a className="transition hover:text-white" href="#coverage">Types of Coverage</a>
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </nav>

          {/* Phone + CTA */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-md bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Get a Quote
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}