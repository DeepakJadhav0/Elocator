import heroPattern from "../../assets/main-pattern.svg";
import hero_img from "../../assets/hero_image.png";

export default function HeroPage1() {
  return (
    <section className="bg-[#F5FFFC] min-h-screen flex flex-col lg:flex-row items-center justify-center px-5 lg:px-16 gap-10">
      

      <div className="w-full lg:w-[55%] text-center lg:text-left">
        <h3 className="text-xs sm:text-sm font-semibold text-green-600 py-3">
          -- Welcome to Elocate -- Powering a Greener Tomorrow
        </h3>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Your Strategic Partner for Innovative and High-Impact
        </h2>

        <h1 className="text-3xl sm:text-4xl font-bold text-green-600 py-3">
          E-Waste Sustainable Disposal
        </h1>

        <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 py-3">
          ELocate: Revolutionizing E-Waste Management for a Sustainable Future.
          Discover nearby e-waste facilities with precision and ease. Your gateway
          to responsible recycling practices and environmental stewardship — one
          device at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start py-4">
          <button className="bg-green-500 text-sm font-semibold rounded-md text-white px-6 py-4 hover:bg-green-600 hover:shadow-md duration-300">
            FIND NEAREST FACILITY
          </button>
          <button className="bg-green-500 text-sm font-semibold rounded-md text-white px-6 py-4 hover:bg-green-600 hover:shadow-md duration-300">
            START RECYCLE TODAY
          </button>
        </div>
      </div>

      <div className="relative w-full lg:w-[45%] flex justify-center items-center">
        <img
          src={heroPattern}
          alt=""
          className="absolute inset-0 w-full h-full object-contain opacity-80"
        />

        <img
          src={hero_img}
          alt="E-waste recycling illustration"
          className="relative z-10 w-[80%] sm:w-[70%] lg:w-full max-w-md"
        />
      </div>

    </section>
  );
}
