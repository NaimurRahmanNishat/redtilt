import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";

const Blog = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore((prevState) => !prevState);
  };

  const blogEntries = [
    {
      imgSrc: portfolio1, 
      title: "Not Another Framework",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolore assumenda dolores consequuntur ipsa accusamus cumque magni rerum sapiente dolorum! Obcaecati sit consequatur reiciendis earum ullam minima illo doloremque.",
      category: "Collaboration Tools",
    },
    {
      imgSrc: portfolio2,
      title: "Startup Secrets",
      description:
        "Discover tips for startups. Minima dolore assumenda dolores consequuntur ipsa accusamus cumque magni rerum sapiente dolorum.",
      category: "Startup Tools",
    },
    {
      imgSrc: portfolio3,
      title: "Scaling Up",
      description:
        "Learn how companies scale effectively. Minima dolore assumenda dolores consequuntur ipsa accusamus cumque magni rerum sapiente dolorum.",
      category: "Growth Strategies",
    },
  ];

  return (
    <div id="blog" className="pt-10">
      <div className="pb-10">
        <p className="flex items-center justify-center text-2xl text-green-700 font-bold text-center pt-4">
          Read Our Blog
        </p>
        <h1 className="flex items-center dark:text-white justify-center text-4xl font-bold text-center pt-4 text-slate-900">
          Read Daily news about <br /> startup companies
        </h1>
      </div>

      {/* Display the first blog entry */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#6f2572] px-4 py-8 md:px-6 md:py-12 rounded-lg">
        <img src={blogEntries[0].imgSrc} alt="Blog 1" />
        <div className="pt-5 md:pt-0 flex flex-col gap-2">
          <h2 className="text-xl md:text-3xl font-semibold text-white hover:text-white/65 cursor-pointer">
            {blogEntries[0].title}
          </h2>
          <p className="text-base text-white border-b-2 border-b-gray-400">
            {blogEntries[0].description}
          </p>
          <div className="flex items-center justify-between pt-2 md:pt-32">
            <div className="text-white">
              <p>{blogEntries[0].category}</p>
            </div>
            <FaArrowCircleRight
              size={40}
              className="text-white -rotate-45 hover:-translate-y-0.5 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Display additional blog entries if showMore is true */}
      {showMore &&
        blogEntries.slice(1).map((entry, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 bg-[#6f2572] px-4 py-8 md:px-6 md:py-12 rounded-lg mt-5"
          >
            <img src={entry.imgSrc} alt={`Blog ${index + 2}`} />
            <div className="pt-5 md:pt-0 flex flex-col gap-2">
              <h2 className="text-xl md:text-3xl font-semibold text-white hover:text-white/65 cursor-pointer">
                {entry.title}
              </h2>
              <p className="text-base text-white border-b-2 border-b-gray-400">
                {entry.description}
              </p>
              <div className="flex items-center justify-between pt-2 md:pt-32">
                <div className="text-white">
                  <p>{entry.category}</p>
                </div>
                <FaArrowCircleRight
                  size={40}
                  className="text-white -rotate-45 hover:-translate-y-0.5 cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      {/* Button to toggle visibility */}
      <div className="pt-5 flex items-center justify-center">
        <button
          className="px-4 py-3 ring-2 rounded-lg hover:bg-cyan-700 hover:text-white"
          onClick={handleReadMore}
        >
          {showMore ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Blog;
