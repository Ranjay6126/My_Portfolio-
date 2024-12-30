const CircularProgress = ({ progress }) => {
  const radius = 35; // Reduced radius for a smaller circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div name="About"
    className="relative w-16 h-16"> {/* Adjusted container size */}
      <svg className="w-full h-full" viewBox="0 0 80 80"> {/* Adjusted SVG viewBox */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="6"
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke="#10b981"
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-sm font-bold text-green-5">{progress}%</p> {/* Adjusted font size */}
      </div>
    </div>
  );
};

function About() {
  const sections = [
    {
      title: "Education & Training",
      progress: 90,
      description:
        "Bachelor Degree in Computer Science and Engineering at Lovely Professional University",
    },
    {
      title: "Skill & Expertise",
      progress: 85,
      description: "Proficient in HTML, CSS, JavaScript, MERN stack, and C++",
    },
    {
      title: "Professional Experience",
      progress: 82,
      description:
        "Worked on multiple projects like Bookstore System and Weather Application",
    },
    {
      title: "Achievements & Awards",
      progress: 80,
      description:
        "Solved 300+ coding problems on LeetCode & GFG, 5-star on HackerRank",
    },
    {
      title: "Mission Statement",
      progress: 95,
      description:
        "To continuously learn and contribute as a full-stack developer",
    },
    {
      title: "Additional Education",
      progress: 90,
      description:
        "Bachelor Degree in Computer Science and Engineering at Lovely Professional University",
    },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
      <h1 className="underline text-2xl font-bold mb-5">About</h1>
      <p className="text-gray- md:text-md text-justify">
        My name is Ranjay Prajapati, and I am currently pursuing a Bachelor
        degree in Computer Science and Engineering from Lovely Professional
        University, specializing in Full-Stack Development. I am proficient in
        HTML, CSS, JavaScript, and the MERN stack, with a solid understanding of
        tools and technologies such as Git, GitHub, Postman, and MongoDB.
        Additionally, I possess strong foundational knowledge in C++.
      </p>
      <br />

      <div className="mt-10 space-y-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-wrap items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2 flex flex-col items-center space-y-4">
              {/* Circular Progress */}
              <CircularProgress progress={section.progress} />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text font-semibold underline text-black-500 mb-2">
                {section.title}
              </h2>
              <p className="text font-semibold text-gray-800">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-black" />
    </div>
  );
}

export default About;
