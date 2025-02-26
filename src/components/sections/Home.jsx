import { RevealOnScroll } from "../RevealOnScroll";
import heroPic from "../../assets/hero.jpeg"; 

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="rounded-full bg-white p-2 mb-8 mx-auto w-48 h-48 flex justify-center items-center">
            <img
              src={heroPic}
              alt="Pedro Tech"
              className="rounded-full w-40 h-40 object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Jurizki Farid
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          A D3 Information Systems graduate from Telkom University with experience in IT, data, and business. Skilled in 
          business process modeling, website development, and data analysis, with strong leadership experience in 
          campus organizations. Eager to apply skills to contribute to innovative projects and drive company growth.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
