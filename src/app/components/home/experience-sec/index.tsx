import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2025",
      title: "Frontend Developer",
      company: "www.wrappixel.com",
      type: "Internship",
      period: "Jan – Aug 2025",
      description:
        "Worked on building scalable UI components and admin dashboards using React.js and Next.js. Improved application performance through server-side rendering and code-splitting. Partnered with the design team to transform Figma wireframes into pixel-perfect, responsive layouts. Streamlined releases by setting up automated build and deployment flows with GitHub and Vercel.",
    },
    {
      year: "2024",
      title: "Frontend Developer",
      company: "www.cognifyz.com",
      type: "Summer Internship",
      period: "Jun – Aug 2024",
      description:
        "Designed and built responsive web interfaces with Bootstrap, JavaScript, and CSS. Enhanced cross-browser compatibility and optimized page load times. Learned best practices for version control, teamwork, and delivering production-ready code under deadlines.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Experience</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                {/* Year + Title */}
                <div>
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                {/* Company + Type + Period */}
                <div className="relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${
                        index < experiences.length - 1 ? "h-40" : "h-30"
                      } bg-softGray`}
                    ></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === 1 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 1 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex flex-col mb-1">
                      <span className="text-xl text-black font-normal">
                        {exp.company}
                      </span>
                      <span className="text-sm text-gray-600">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
