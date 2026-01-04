import React from 'react'

export default function HeroCards() {

  const Data = [
    {
      id: "01",
      title: "State-of-the-Art E-Waste Collection Network",
      body: "Access our extensive network of verified and certified e-waste collection facilities, ensuring safe, responsible, and environmentally-conscious disposal for all electronic devices."
    },
    {
      id: "02",
      title: "Comprehensive Educational Resources",
      body: "Empower yourself with our knowledge hub containing expert insights, best practices, and the latest research on e-waste management and environmental sustainability."
    },
    {
      id: "03",
      title: "Intuitive User Experience",
      body: "Navigate our sophisticated yet user-friendly platform designed for individuals, businesses, and organizations seeking efficient and effective e-waste solutions."
    },
    {
      id: "04",
      title: "AI-Powered Smart Assistant",
      body: "Get instant answers to your questions with our intelligent virtual assistant, providing 24/7 access to educational resources and personalized guidance on responsible e-waste management."
    },
    {
      id: "05",
      title: "Reward-Based Booking System",
      body: "Benefit from our innovative credit mechanism that incentivizes responsible disposal practices, making sustainability rewarding for both individuals and businesses."
    },
    {
      id: "06",
      title: "Advanced Facility Management Dashboard",
      body: "For facility owners: gain access to our comprehensive management suite with real-time analytics, booking oversight, and integrated credit tracking—all in one streamlined interface."
    }
  ]

  return (
    <section className="bg-gray-50 min-h-screen flex justify-center items-center px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center w-full max-w-7xl">

        {Data.map(item => (
          <div
            key={item.id}
            className="group relative w-80 h-[220px] bg-white text-black m-3 px-5 flex flex-col justify-center text-center p-5 shadow-md transition-all duration-500 ease-in-out hover:bg-green-600 hover:text-white hover:-translate-y-2"
          >
            <h1 className="absolute -top-7 left-6 text-xl font-semibold border p-2 px-3 rounded-md bg-gray-200 transition-all duration-500 ease-in-out group-hover:text-green-600 group-hover:-top-9">
              {item.id}
            </h1>

            <h1 className="text-xl font-semibold py-3 transition-colors duration-300 ease-in-out">
              {item.title}
            </h1>

            <p className="text-sm font-semibold text-gray-700 transition-colors duration-300 ease-in-out group-hover:text-white">
              {item.body}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}
