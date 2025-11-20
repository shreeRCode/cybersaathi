import Navbar from "@/components/Navbar/Navbar";
import CyberAwareness from "@/components/background";

export default function Homepage() {
  return (
    <div className="overflow-hidden hide-scrollbar bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="pt-24 pb-10 px-6 flex items-center justify-center">
        <div className="w-full max-w-6xl">
          <CyberAwareness />
        </div>
      </div>
    </div>
  );
}

/*
import image from './image.jpg';
<div className=" pt-16 w-full h-screen bg-center bg-no-repeat bg-cover"
  style={{ backgroundImage: `url(${image.src || image})` }}
>
  </div>

  */
