import { useState } from "react";

const faqs = [
  {
    question: "How does ELocate help me find e-waste recycling facilities?",
    answer:
      "ELocate uses location-based services to show you verified e-waste recycling facilities near you. You can filter by distance, facility type, and services offered."
  },
  {
    question: "How does ELocate verify the facilities listed on the platform?",
    answer:
      "All facilities are verified through government certifications, compliance documents, and periodic audits to ensure responsible recycling practices."
  },
  {
    question: "Can I schedule the pickup and recycling of my e-waste through ELocate?",
    answer:
      "Absolutely! Our streamlined booking system allows you to schedule e-waste pickups with just a few clicks. Select your preferred facility, choose from available time slots, specify the type and quantity of e-waste, and receive immediate confirmation."
  },
  {
    question: "What kind of educational resources does ELocate offer?",
    answer:
      "ELocate provides articles, guides, and awareness content on responsible e-waste disposal, environmental impact, and recycling best practices."
  },
  {
    question: "How can I stay updated on changing e-waste regulations and compliance requirements?",
    answer:
      "You can subscribe to our newsletter and follow our updates section to receive the latest regulatory changes and compliance guidelines."
  },
  {
    question: "What additional benefits do I get by subscribing to the ELocate newsletter?",
    answer:
      "Subscribers receive exclusive updates, recycling incentives, early access to features, and educational content."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gray-50 flex justify-center px-4 py-8">
      <div className="w-full max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-1 text-sm md:text-base text-gray-600">
            Everything you need to know about ELocate and responsible e-waste management
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-4 md:px-6 py-4 text-left"
                >
                  <span className="text-base md:text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`text-xl text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Animated Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 md:px-6 pb-5 text-sm md:text-md text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
