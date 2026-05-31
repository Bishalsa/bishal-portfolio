import tshirtStore from '../assets/tshirt-store.png'
import landing from '../assets/landing.png'
import dashboard from '../assets/dashboard.png'

const projects = [
  {
    title: "clothing store",
    description:
      "Modern anime-inspired clothing brand with premium UI, responsive storefront experience, and optimized shopping flow.",
    image: tshirtStore,
    live: "https://softsignal-tees.vercel.app/",
  },

  {
    title: "Landing Page",
    description:
      "Clean landing page for a website with booking system and mobile-first design.",
    image: landing,
  },

  {
    title: "Analytics Dashboard",
    description:
      "Dashboard concept for data visualization and business intelligence.",
    image: dashboard,
  },
]

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
            Featured Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Selected Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-semibold hover:underline"
                  >
                    Live Demo →
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection