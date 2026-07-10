const ContactSection = () => {
  const whatsappNumbers = [
    { number: "+918327810209", label: "Bishal" },
    { number: "+917407517665", label: "Rathin" }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let’s Build Something Modern Together
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed mb-10">
          I help brands, startups, and businesses create clean, scalable, and modern digital experiences.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">

          <a
            href="mailto:bishalsarkar5695@gmail.com"
            className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/mr-bishal-5a2084247"
            rel="noopener noreferrer"
            target="_blank"
            className="px-8 py-4 border border-gray-600 text-white rounded-xl font-semibold hover:border-white transition"
          >
            LinkedIn
          </a>

        </div>

        {/* Partner Info */}
        <div className="mb-10">
          <p className="text-xl text-gray-300 font-semibold">Partner: <span className="text-white">Mr. Rathin bakchi</span></p>
        </div>

        {/* WhatsApp Contact */}
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
            WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {whatsappNumbers.map((item, index) => (
              <a
                key={index}
                href={`https://wa.me/${item.number.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
              >
                WhatsApp - {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
            Location
          </p>
          <p className="text-lg text-gray-300 mb-6 max-w-md mx-auto leading-relaxed">
            1/9A, Katju Nagar, Jadavpur,<br />
            Kolkata, West Bengal 700068
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=G927%2BGQ8%2C+1%2F9A%2C+Katju+Nagar%2C+Jadavpur%2C+Kolkata%2C+West+Bengal+700068"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            View on Map
          </a>
        </div>

        {/* Book Free Consulting */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">Book Free Consulting</h3>
          <a
            href="tel:+918327810209"
            className="inline-block px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Call Now: +918327810209
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection