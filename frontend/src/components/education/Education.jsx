import React, { useEffect } from "react";
import EducationCards from "./EducationCard";

function Education() {

  useEffect(() => {
    document.title = "ELocate - E-Waste Education & Resources";
  }, []);

  return (
    <>
      <div className="relative h-80 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            E-Waste Education Hub
          </h1>
          <p className="text-xl text-white max-w-3xl opacity-90">
            Gain valuable insights into sustainable electronics management and
            discover how your choices can make a positive environmental impact.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4">
        <EducationCards/>
      </div>

      <div className="bg-emerald-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-10">
            E-Waste Facts You Should Know
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "57.4 Million Tons",
                desc: "Global e-waste generated every year",
              },
              {
                title: "$62.5 Billion",
                desc: "Value of raw materials lost in e-waste",
              },
              {
                title: "17.4%",
                desc: "Only this amount is recycled properly",
              },
              {
                title: "80 kg",
                desc: "Earth saved by recycling one smartphone",
              },
            ].map((fact, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
                <p className="text-gray-600 text-sm">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default Education;
