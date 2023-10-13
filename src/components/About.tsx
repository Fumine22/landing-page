import { ArrowRightCircle, Key } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";

interface About {
  id: number;
  src: string;
  title: string;
  description: string;
}

const aboutItem: About[] = [
  {
    id: 1,
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/about-us/abouticon1.png",
    title: "MOBILE OPTIMIZED",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, delectus!",
  },
  {
    id: 2,
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/about-us/abouticon3.png",
    title: "TECHNICAL EXPERTISE",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, delectus!",
  },
  {
    id: 3,
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/about-us/abouticon5.png",
    title: "CLEAN CODE",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, delectus!",
  },
  {
    id: 4,
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/about-us/abouticon2.png",
    title: "EASY TO CUSTOMIZED",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, delectus!",
  },
  {
    id: 5,
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/about-us/abouticon4.png",
    title: "WIDE INDUSTRY KNOWLEDGE",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, delectus!",
  },
  {
    id: 6,
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/about-us/abouticon6.png",
    title: "FULL SUPPORT ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, delectus!",
  },
];

function AboutCard({ src, title, description }: About) {
  return (
    <li className="flex flex-col items-center max-w-[300px]">
      <Image src={src} alt="photo" width={65} height={65} />
      <div className="p-4 uppercase tracking-[1px] text-sm flex flex-col gap-2">
        <h6 className="font-bold">{title}</h6>

        <p className="text-[10px] pt-2 text-[#a9adac]">{description}</p>

        <Button variant={"destructive"} className="flex gap-1 justify-center">
          Know More <ArrowRightCircle className="w-5 h-5" />
        </Button>
      </div>
    </li>
  );
}

const About = () => {
  return (
    <section className="text-[#444]">
      <div className="container">
        <div className="py-[80px]">
          <div className="text-center p-5">
            <h3 className="uppercase font-black tracking-[1px] text-[22px]/[1.4]">
              About <span className="text-[#0165B2]">Us</span>
            </h3>
          </div>

          <div className="flex flex-col gap-5 items-center md:flex-row md:justify-between">
            <ul className="mt-[10px] pb-5 text-center">
              {aboutItem.map((about) =>
                about.id >= 1 && about.id <= 3 ? (
                  <AboutCard key={about.id} {...about} />
                ) : (
                  ""
                )
              )}
            </ul>

            {/* <div className="w-full"> */}
            <Image
              src="https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/about-us/aboutimg2.jpg"
              alt="photo"
              width={296}
              height={338.28}
              className="w-full max-w-[315px]"
            />
            {/* </div> */}

            <ul className="mt-[10px] pb-5 text-center">
              {aboutItem.map((about) =>
                about.id >= 4 && about.id <= 6 ? (
                  <AboutCard key={about.id} {...about} />
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
