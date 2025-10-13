// src/app/components/Awards.tsx
const awards = [
  {
    name: "University of Oulu International Scholarship",
    description:
      "Awarded a 75% merit-based scholarship for the full duration of my 2-year MS in Computer Science and Engineering at the University of Oulu, in recognition of outstanding academic performance and professional experience as an international student",
    iconUrl: "/logos/uni-of-oulu-logo.jpg", // Add your icon in the logos folder
  },
  {
    name: "Alfond Scholars Initiative Scholarship",
    description:
      "Awarded the prestigious Alfond Scholars Initiative Scholarship valued at $25,000 as an international student of the MS in Artificial Intelligence program at Northeastern University. This competitive merit-based scholarship recognizes exceptional academic performance, leadership potential, and commitment to leveraging AI for societal impact.",
    iconUrl: "/logos/nu-logo.PNG",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Awards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-2xl p-8 hover:shadow-xl transition-all transform hover:scale-[1.02] text-center border border-gray-200"
            >
              {award.iconUrl && (
                <div className="w-30 h-30 mb-6 rounded-xl overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src={award.iconUrl}
                    alt={award.name}
                    className="w-24 h-24 object-contain transition-transform duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "transparent",
                      mixBlendMode: "multiply", // smooth blending for all icons
                    }}
                  />
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {award.name}
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
