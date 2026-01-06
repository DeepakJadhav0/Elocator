import React from "react";
import { FiSmartphone, FiHeadphones, FiTv } from "react-icons/fi";
import { RiFridgeFill } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineDevicesOther } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { BsLightningCharge } from "react-icons/bs";


const Recycle = () => {
  const recycleItems = [
    {
      itemName: "Smartphone",
      description: "Recycle your outdated smartphones and recover valuable materials.",
      recyclingProcess:
        "Includes data wiping, dismantling, metal recovery, and safe disposal of hazardous materials.",
      specialInstructions:
        "Back up and reset your device. Remove SIM and memory cards.",
      benefits: "Recycling one smartphone saves 80kg of earth's precious metals.",
      icon: <FiSmartphone size={40} className="text-emerald-500 p-2" />,
    },
    {
      itemName: "Laptop",
      description: "Recycle your old laptops for sustainable disposal and resource recovery.",
      recyclingProcess:
        "We provide secure data destruction, disassembly, and safe disposal of batteries and screens.",
      specialInstructions:
        "Back up files and perform a secure wipe of storage drives.",
      benefits: "Recycling laptops recovers 95% of materials, including valuable metals.",
      icon: <FaLaptop size={40} className="text-emerald-500 p-2" />,
    },
    {
      itemName: "Accessories",
      description: "Recycle cables, chargers, headphones, and other small electronics.",
      recyclingProcess:
        "We sort accessories by material type and safely dispose of hazardous components.",
      specialInstructions:
        "Bundle similar items together and remove batteries from wireless devices.",
      benefits: "Prevents toxic materials from entering landfills and reduces resource extraction.",
      icon: <FiHeadphones size={40} className="text-emerald-500 p-2" />,
    },
    {
      itemName: "Television",
      description: "Recycle old TVs and monitors responsibly to prevent environmental harm.",
      recyclingProcess:
        "Includes screen separation, material containment, and recycling of circuit boards.",
      specialInstructions:
        "Transport with screen facing down and include all accessories.",
      benefits: "Prevents hazardous substances like lead and mercury from contaminating the environment.",
      icon: <FiTv size={40} className="text-emerald-500 p-2" />,
    },
    {
      itemName: "Refrigerator",
      description: "Recycle refrigerators and freezers safely, handling refrigerants and hazardous materials.",
      recyclingProcess:
        "We safely dispose of refrigerants and recover valuable metals and insulation.",
      specialInstructions:
        "Clean and defrost the unit completely before recycling.",
      benefits: "Prevents potent greenhouse gases from entering the atmosphere.",
      icon: <RiFridgeFill size={40} className="text-emerald-500 p-2" />,
    },
    {
      itemName: "Other",
      description: "Recycle any electronic device not covered by the other categories.",
      recyclingProcess:
        "We assess and disassemble devices, recovering recyclable materials.",
      specialInstructions:
        "Include packaging, manuals, and accessories for a complete recycling process.",
      benefits: "Ensures uncommon electronics are properly handled and don’t end up in landfills.",
      icon: <MdOutlineDevicesOther size={40} className="text-emerald-500 p-2" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 recycle-container">
      <div className="text-center p-24 ">
        <h2 className="text-4xl text-emerald-700 font-bold mb-4">
          Sustainable Electronics Recycling Solutions
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the right recycling option for your electronic devices and help protect the environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  mx-10 lg:grid-cols-3 gap-8">
        {recycleItems.map((item, index) => (
          <RecycleCard key={index} {...item} />
        ))}
      </div>

      <div className="mt-10 bg-emerald-50 m-auto w-[1150px] rounded-lg p-8">
        <div className="text-center mb-8">
          <h3 className="text-lx font-bold text-emerald-700">Why Recycle Electronics With Us?</h3>
          <p className="text-gray-600 text-sm mt-2">We handle your electronic waste responsibly and efficiently.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FeatureCard icon={MdOutlineVerifiedUser} title="Certified Process" description="We follow strict environmental standards for all recycling procedures." />
          <FeatureCard  icon={CiLock} title="Data Security" description="Guaranteed data destruction on all devices." />
          <FeatureCard  icon={CiMap}title="Resource Recovery" description="Maximizing recovery of valuable materials from your e-waste." />
          <FeatureCard  icon={BsLightningCharge} title="Effortless Process" description="Our simple booking system makes recycling quick and easy." />
        </div>
      </div>
    </div>
  );
};

const RecycleCard = ({
  itemName,
  description,
  recyclingProcess,
  specialInstructions,
  benefits,
  icon,
}) => {
  return (
    <div className="bg-white shadow-lg m-2 rounded-lg overflow-hidden hover:bg-gray-50 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="bg-emerald-50 p-2 py-5 flex justify-center items-center">
        <div className="bg-white  rounded-full p-1 shadow-sm">{icon}</div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-1 text-gray-800">{itemName}</h3>
        <p className="text-gray-500 text-[12px] mb-1">{description}</p>

        <div className="mb-2 flex-grow">
          <div className="mb-1">
            <h4 className="text-[13px] font-semibold text-emerald-700 uppercase tracking-wide mb-1">Recycling Process</h4>
            <p className="text-gray-500 text-[12px]">{recyclingProcess}</p>
          </div>

          <div className="mb-1">
            <h4 className="text-[13px] font-semibold text-emerald-700 uppercase tracking-wide mb-1">Special Instructions</h4>
            <p className="text-gray-500 text-[12px]">{specialInstructions}</p>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-emerald-700 uppercase tracking-wide mb-1">Environmental Benefits</h4>
            <p className="text-gray-500 text-[12px]">{benefits}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

const FeatureCard = ({ icon ,title, description }) => (
  <div className="bg-white p-3 rounded-lg shadow-sm text-center">
    <div className="bg-emerald-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
        {React.createElement(icon)}
    </div>
    <h4 className="text-sm font-semibold mb-2">{title}</h4>
    <p className="text-gray-600 text-[10px]">{description}</p>
  </div>
);

export default Recycle;
