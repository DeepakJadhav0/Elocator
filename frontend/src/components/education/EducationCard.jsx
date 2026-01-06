const educationCards = [
  {
    id: 1,
    title: "The Growing E-Waste Crisis",
    description:
      "Electronic waste is one of the fastest growing waste streams in the world. Learn how discarded electronics affect our planet.",
    image:
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=800&q=80",
    link: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-%28e-waste%29",
  },
  {
    id: 2,
    title: "Why Recycling Electronics Matters",
    description:
      "Discover how proper e-waste recycling conserves resources and prevents environmental pollution.",
    image:
      "https://images.unsplash.com/photo-1581093588401-22d1c1f69f5c?auto=format&fit=crop&w=800&q=80",
    link: "https://ewcra.org/2024/07/19/the-impact-of-e-waste-on-the-environment/",
  },
  {
    id: 3,
    title: "Hidden Toxins in Old Devices",
    description:
      "Old electronics contain hazardous materials that can harm ecosystems if not handled responsibly.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0048969721006914",
  },
  {
    id: 4,
    title: "The Lifecycle of Electronics",
    description:
      "From production to disposal, explore the full journey of electronic devices.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    link: "https://www.weforum.org/stories/2022/12/e-waste-electronic-climate-recycling/",
  },
  {
    id: 5,
    title: "How You Can Reduce E-Waste",
    description:
      "Simple actions consumers can take to extend device lifespan and reduce waste.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    link: "https://www.reuters.com/sustainability/world-losing-battle-against-electronic-waste-un-finds-2024-03-20/",
  },
];

export default function EducationCards() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="grid gap-12 max-w-6xl mx-auto">
        {educationCards.map((card, index) => (
          <div
            key={card.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {index === 0 && (
                  <div className="absolute top-0 left-0 bg-emerald-600 text-white px-3 py-1 font-semibold">
                    FEATURED
                  </div>
                )}
              </div>

              <div className="md:w-1/2 p-8">
                <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded">
                  Education
                </span>

                <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-4">
                  {card.title}
                </h2>

                <p className="text-gray-600 mb-6">
                  {card.description}
                </p>

                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
