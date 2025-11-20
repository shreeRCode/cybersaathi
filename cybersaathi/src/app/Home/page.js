import Navbar from "@/components/Navbar/Navbar";

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Navbar />

      <section className="pt-24 px-6 pb-16 flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
            Protect Your Digital Life
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Cybersecurity is everyone&#39;s responsibility. Stay vigilant
            against phishing scams, data breaches, and online threats. Awareness
            and early action are your strongest defenses in today&#39;s
            connected world.
          </p>

          <a
            href="/Article"
            className="inline-block bg-blue-700 hover:bg-blue-800 transition-all text-white text-lg px-8 py-3 rounded-lg shadow-md hover:shadow-lg"
          >
            Learn More →
          </a>
        </div>
      </section>
    </div>
  );
}
