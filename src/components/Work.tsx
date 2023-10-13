import Link from "next/link";

interface Work {
  text: string;
}

const workList: Work[] = [
  { text: "Discuss" },
  { text: "Design" },
  { text: "Develop" },
  { text: "Launch" },
  { text: "Test" },
  { text: "Deliver" },
];

const Work = () => {
  return (
    <section className="bg-[url('https://themesglance.com/demo/it-company-pro/wp-content/themes/it-company-pro/assets/images/how-we-work/howweworkbg.jpg')] bg-cover bg-center bg-no-repeat text-[#fff]">
      <div className="container">
        <div className="py-[80px] flex flex-col">
          <div className="text-center pb-5">
            <h3 className="mb-3 uppercase font-medium text-[22px]/[1.4]">
              how we <span className="text-[#0165B2]">work</span>
            </h3>

            <p className="track-[1px] text-[14px]/[30px] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              numquam aspernatur ducimus iure repellat, unde ea in eveniet eos,
              fuga dolor enim hic exercitationem natus? Dolorem sunt blanditiis
              vel aliquam.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-3 mt-[25px] mx-auto md:grid-cols-3 lg:flex lg:justify-center relative">
            {workList.map((work) => (
              <li
                key={work.text}
                className="text-center border-[3px] my-[5px] p-[3px] border-solid border-[#fff] bg-[#444] max-w-[130px] md:max-w-[160px] md:w-[160px] lg:max-w-[190px] lg:w-[122px]"
              >
                <Link
                  href="#"
                  className="block p-[35px] md:p-[50px] lg:p-[30px] bg-[#fff] hover:bg-[#0165B2] text-[#444] hover:text-[#fff]"
                >
                  <span>{work.text}</span>
                </Link>

                {work.text == "Deliver" ? (
                  <div></div>
                ) : (
                  <div className="relative bottom-1/2 left-[56px] w-[15px] hidden lg:block">
                    <div className="w-[15px] bg-[#fff] h-[3px] top-[50%] left-[60px] absolute" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
