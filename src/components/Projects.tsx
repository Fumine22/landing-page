import Image from "next/image";
import { Button } from "./ui/Button";
import { ArrowRightCircle } from "lucide-react";

interface Project {
  id: number;
  src: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    src: "https://themesglance.com/demo/it-company-pro/wp-content/uploads/sites/59/2021/12/project2.jpg",
    title: "project name",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    src: "https://themesglance.com/demo/it-company-pro/wp-content/uploads/sites/59/2021/12/project4.jpg",
    title: "project name",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    src: "https://themesglance.com/demo/it-company-pro/wp-content/uploads/sites/59/2021/12/project3.jpg",
    title: "project name",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    src: "https://themesglance.com/demo/it-company-pro/wp-content/uploads/sites/59/2021/12/project1-1.jpg",
    title: "project name",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    src: "https://themesglance.com/demo/it-company-pro/wp-content/uploads/sites/59/2021/12/project1-1.jpg",
    title: "project name",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

function SmallCard({ src, title, description }: Project) {
  return (
    <div className="max-w-full w-full relative">
      <Image src={src} alt="photo" width={500} height={250} />

      <div className="w-[65%] h-[89.5%] left-[15%] top-0 absolute py-[6%] px-[5%] text-center border-2 border-white m-3 bg-[#39B4CE] opacity-[0.8] text-white flex items-center justify-center flex-col">
        <h4 className="uppercase py-[10px] text-xl/[1.4] tracking-[1px] font-extrabold">
          {title}
        </h4>

        <p className="text-sm/[24px] line-clamp-3">{description}</p>

        <Button variant="secondary">
          <div className="bg-[#fff] h-[2px] w-[32%] md:w-[25%]" />
          Read More <ArrowRightCircle />
        </Button>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <section className="bg-[url('https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/how-we-work/howweworkbg.jpg')] bg-cover bg-center bg-no-repeat text-[#fff]">
      <div className="container">
        <div className="py-[80px]">
          <div className="pb-5 text-center">
            <h3 className="mb-4 text-[22px]/[1.4] tracking-[1px] font-black uppercase">
              our <span className="text-[#0165B2]">projects</span>
            </h3>
          </div>

          <ul className="flex flex-col gap-5 md:flex-row justify-center items-center w-full h-full">
            <li className="flex flex-col gap-[20px]">
              {projects.map((project) =>
                project.id >= 1 && project.id <= 2 ? (
                  <SmallCard key={project.id} {...project} />
                ) : (
                  ""
                )
              )}
            </li>

            <li className="flex flex-col gap-[20px]">
              {projects.map((project) =>
                project.id == 3 ? (
                  <SmallCard key={project.id} {...project} />
                ) : (
                  ""
                )
              )}
            </li>

            <li className="flex flex-col gap-[20px]">
              {projects.map((project) =>
                project.id >= 4 && project.id <= 5 ? (
                  <SmallCard key={project.id} {...project} />
                ) : (
                  ""
                )
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
