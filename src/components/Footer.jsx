const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold">Bishal</h2>
            <p className="text-gray-400 mt-2">
              Full-Stack Web Developer & AI Automation Specialist
            </p>
          </div>

          <div className="flex gap-6 text-gray-400">

            <a
              href="https://www.linkedin.com/in/mr-bishal-5a2084247"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Bishalsa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://instagram.com/bishal_hyaru_?igsh=cmlkaXk0M2FiazJ5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Instagram
            </a>

          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © 2026 Bishal. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer