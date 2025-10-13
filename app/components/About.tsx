// src/app/components/About.tsx
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            I'm a passionate Data Scientist with expertise in machine learning, statistical analysis, 
            and data visualization. I love transforming raw data into meaningful insights that drive 
            business decisions.
          </p>
          <p>
            My background in [your field] has given me a unique perspective on solving complex 
            problems with data-driven approaches. I'm particularly interested in [your specific interests, 
            e.g., natural language processing, computer vision, predictive modeling].
          </p>
          <p>
            When I'm not working with data, you can find me [your hobbies/interests].
          </p>
        </div>
      </div>
    </section>
  );
}