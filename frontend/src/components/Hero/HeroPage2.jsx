import heropattern from "../../assets/hero-banner.svg"

export default function HeroPage2() {
  return (
    <section className="min-h-screen flex flex-col px-6 md:px-12 leading-relaxed items-center">
        <h3 className="text-sm font-semibold text-green-600 mt-10">—Discover ELocate—</h3>
        <h1 className="text-2xl md:text-3xl font-semibold mt-2 text-center md:text-left">
          Pioneering the Future of E-Waste Management & Sustainability
        </h1>

        <div className="flex flex-col md:flex-row justify-center mt-14 gap-10 md:gap-6 w-full">
           <div className="w-full md:w-[50%] flex flex-col px-4 md:px-10">
             <p className="text-md py-6 md:py-10 font-semibold text-gray-700">
                India faces a critical environmental challenge with 1.71 million metric tons of e-waste generated annually, much of it improperly disposed. The scarcity of accessible, trustworthy e-waste collection facilities intensifies this growing crisis.
             </p>
             <p className="text-md font-semibold pb-6 md:pb-10 text-gray-700">
                ELocate was born from this urgent need. Our award-winning platform bridges the critical gap between consumers and certified e-waste facilities through an intuitive, powerful interface. We're not just locating recycling centers—we're catalyzing a movement toward responsible electronics lifecycle management and environmental stewardship.
             </p>

             <div className="flex flex-col sm:flex-row gap-4">
               <button className="border w-full sm:w-fit p-4 bg-green-500 text-sm font-bold text-white rounded-md hover:bg-green-600 duration-300 transition-all ease-out">
                 CONNECT WITH US
               </button>
               <button className="w-full sm:w-fit p-4 border border-green-600 text-sm font-bold text-green-600 hover:text-white rounded-md hover:bg-green-500 duration-300 transition-all ease-out">
                 EXPLORE RECYCLING SOLUTIONS
               </button>
             </div>
           </div>

           <div className="w-full md:w-auto p-10 flex justify-center">
                <img 
                  className="h-72 md:h-96 transition-transform hover:shadow-xl hover:shadow-green-50 duration-300 hover:-translate-y-3 rounded-full" 
                  src={heropattern} 
                  alt="Hero pattern" 
                />
           </div>
        </div>
    </section>
  )
}
