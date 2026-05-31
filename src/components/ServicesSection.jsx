const services = [
  {
    title: "Business Websites",
    description:
      "Modern responsive websites designed for brands, startups, and local businesses.",
  },
  {
    title: "E-Commerce Stores",
    description:
      "Fast online stores with clean shopping experience and mobile optimization.",
  },
  {
    title: "Dashboard Systems",
    description:
      "Admin panels and dashboards for tracking data, analytics, and workflows.",
  },
  {
    title: "AI Automation",
    description:
      "Automation systems that save time using AI workflows and integrations.",
  },
]

const ServicesSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What I Build
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection