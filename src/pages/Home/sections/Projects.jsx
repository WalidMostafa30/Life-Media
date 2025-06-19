import SectionTitle from "../../../components/common/SectionTitle";
import projectImg from "../../../assets/images/project-img.jpg";
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Fork & Flame",
      description:
        "A complete rebranding of their brand and website to match their upscale dining experience.",
      imgSrc: projectImg,
    },
    {
      id: 2,
      title: "Fork & Flame",
      description:
        "A complete rebranding of their brand and website to match their upscale dining experience.",
      imgSrc: projectImg,
    },
    {
      id: 3,
      title: "Fork & Flame",
      description:
        "A complete rebranding of their brand and website to match their upscale dining experience.",
      imgSrc: projectImg,
    },
  ];
  return (
    <section className="container sectionPadding">
      <SectionTitle title="Where Vision Meets Execution" />

      <div className="space-y-4">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="group relative h-[300px] lg:h-[540px] border-6 border-light-gray rounded-4xl overflow-hidden"
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-500"
            />

            <div
              className="absolute inset-0 z-10 bg-black/40 w-full h-full flex flex-wrap justify-between items-end gap-4 p-8 opacity-0 
          group-hover:opacity-100 transition-opacity duration-500"
            >
              <div className="text-white">
                <h3 className="text-3xl font-bold line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-lg line-clamp-2">{project.description}</p>
              </div>
              <button className="mainBtn">
                See Project <GoArrowUpRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="flex items-center gap-1 w-max mx-auto mt-6 font-semibold text-light-red hover:underline"
      >
        View All Projects <GoArrowUpRight className="text-3xl" />
      </a>
    </section>
  );
};

export default Projects;
