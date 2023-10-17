import Image from "next/image";

interface Do {
  src: string;
  title: string;
  description: string;
}

const doList: Do[] = [
  {
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/what-do-we-do/whatdowedoicon6.png",
    title: "web development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet.",
  },
  {
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/what-do-we-do/whatdowedoicon5.png",
    title: "app development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet.",
  },
  {
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/what-do-we-do/whatdowedoicon4.png",
    title: "graphic design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet.",
  },
  {
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/what-do-we-do/whatdowedoicon3.png",
    title: "branding",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet.",
  },
  {
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/what-do-we-do/whatdowedoicon2.png",
    title: "web design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet.",
  },
  {
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/what-do-we-do/whatdowedoicon1.png",
    title: "photography",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet.",
  },
];

function DoCard({ src, title, description }: Do) {
  return (
    <li className="border-[3px] border-[#e7e7e7] text-center max-w-[400px] text-[#999d9c]">
      <div className="p-5 m-[17px] hover:bg-[#90D1DF] hover:text-[#fff]">
        <div className="w-full flex justify-center">
          <Image src={src} alt="photo" width={90} height={105} />
        </div>

        <div>
          <div className="text-[#232c2b]">
            <h6 className="uppercase font-extrabold">{title}</h6>
          </div>

          <p className="">{description}</p>
        </div>
      </div>
    </li>
  );
}

const Do = () => {
  return (
    <section>
      <div className="container">
        <div className="py-[80px]">
          <div className="pb-5 text-center font-black tracking-[1px] text-[22px]/[1.4]">
            <h3 className="mb-1 uppercase">
              what <span className="text-[#0165B2]">we do</span>
            </h3>
          </div>

          <div className="">
            <ul className="flex flex-col items-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
              {doList.map((doItem) => (
                <DoCard key={doItem.src} {...doItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Do;
