import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import heroImg from "./image.jpg"; // your existing image

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Navbar />

      <section className="pt-24 px-6 pb-16 flex items-center justify-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Hero Image */}
          <div className="flex justify-center">
            <Image
              src={heroImg}
              alt="Cyber Security"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
              Protect Your Digital Life
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Cybersecurity is everyone's responsibility. Stay vigilant against
              phishing scams, data breaches, and online threats. Learning and
              awareness are your strongest defenses in today's connected world.
            </p>

            <a
              href="/Article"
              className="text-blue-700 text-lg font-semibold hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
