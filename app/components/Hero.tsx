// app/components/Hero.tsx
import Image from 'next/image';

export default function Hero() 
{
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-50"
    >
      {/* Circular profile image */}
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-8">
        <Image
          src="/logos/Umer Saleem.JPG"
          alt="Profile Picture"
          width={224}
          height={224}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
        Umer Saleem
      </h1>

      {/* Title / Role */}
      <h2 className="text-xl md:text-3xl text-gray-600 mb-6">
        Data Scientist | Data Analyst | ML Engineer
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-500 max-w-2xl">
        I am a Data Scientist and AI Engineer based in the United States, turning complex data into actionable insights.
      </p>

      {/* Optional "View my work" button */}
      <a
        href="#projects"
        className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors"
      >
        View My Work
      </a>
    </section>
  );
}
