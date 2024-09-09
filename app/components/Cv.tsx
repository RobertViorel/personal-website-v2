"use client";

export function Cv () {
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto flex flex-col items-center p-8 bg-transparent rounded-lg">
            <h2 className="text-2xl font-mono font-semibold text-primary mb-4">
              Download My CV
            </h2>
            <p className="text-gray-400 mb-6 text-center">
              The PDFs are password protected. To get the password, please message me on{" "}
              <span className="text-[#D0B870] hover:text-[#c7a956]">
                <a href="https://www.linkedin.com/in/robert-dumitru-b791b72b4/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </span>.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full justify-center">
              <a
                href="/assets/Resume:EN:IT.pdf"
                download
                className="w-full md:w-auto px-8 py-4 border border-[#D0B870] text-[#D0B870] hover:bg-[#D0B870] hover:text-white transition-colors duration-300 rounded-md text-center"
              >
                Download EN
              </a>
              <a
                href="/assets/Lebenslauf:DE:IT.pdf"
                download
                className="w-full md:w-auto px-8 py-4 border border-[#D0B870] text-[#D0B870] hover:bg-[#D0B870] hover:text-white transition-colors duration-300 rounded-md text-center"
              >
                Herunterladen DE </a>
            </div>
          </div>
        </div>
      );
}
