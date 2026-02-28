import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import AboutCompany from "../components/AboutCompany";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <AboutCompany />
      </main>
      <Footer />
    </div>
  );
}