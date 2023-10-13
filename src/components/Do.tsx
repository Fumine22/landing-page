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
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/what-do-we-do/whatdowedoicon6.png",
    title: "web development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet.",
  },
  {
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/what-do-we-do/whatdowedoicon6.png",
    title: "web development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet.",
  },
  {
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/what-do-we-do/whatdowedoicon6.png",
    title: "web development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet.",
  },
  {
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/what-do-we-do/whatdowedoicon6.png",
    title: "web development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet.",
  },
  {
    src: "https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/what-do-we-do/whatdowedoicon6.png",
    title: "web development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eveniet.",
  },
];

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
            <ul></ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Do;
