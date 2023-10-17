import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

interface Team {
  src: string;
  name: string;
  position: string;
}

const teamList: Team[] = [
  {
    src: "https://sktperfectdemo.com/demos/it-solutions/wp-content/uploads/2017/06/team7.jpg",
    name: "Daniel",
    position: "Assistant CEO",
  },
  {
    src: "https://sktperfectdemo.com/demos/it-solutions/wp-content/uploads/2017/06/team8.jpg",
    name: "Martina Doe",
    position: "HR",
  },
  {
    src: "https://sktperfectdemo.com/demos/it-solutions/wp-content/uploads/2017/06/team5.jpg",
    name: "Alex",
    position: "CEO",
  },
  {
    src: "https://sktperfectdemo.com/demos/it-solutions/wp-content/uploads/2017/06/team6.jpg",
    name: "Alena",
    position: "CCO",
  },
];

function TeamCard({ src, name, position }: Team) {
  return (
    <li className="flex flex-col mx-auto lg:mx-0">
      <div className="h-[270px]">
        <Image
          src={src}
          alt="avatar"
          width={395}
          height={457}
          className="min-h-[270px]"
        />
      </div>

      <div className="p-5 text-center bg-[#fff]">
        <div className="flex flex-col gap-[20px]">
          <h5 className="uppercase font-extrabold">{name}</h5>

          <div className="border-[#3dbad5] border-2 w-[30px] mx-auto" />

          <p className="">{position}</p>
        </div>

        <div className="mt-[15px] text-center flex gap-3 justify-center">
          <Facebook className="bg-[#000] text-[#fff] rounded-full w-10 h-10 p-2" />
          <Twitter className="bg-[#000] text-[#fff] rounded-full w-10 h-10 p-2" />
          <Youtube className="bg-[#000] text-[#fff] rounded-full w-10 h-10 p-2" />
          <Instagram className="bg-[#000] text-[#fff] rounded-full w-10 h-10 p-2" />
          <Mail className="bg-[#000] text-[#fff] rounded-full w-10 h-10 p-2" />
          <Linkedin className="bg-[#000] text-[#fff] rounded-full w-10 h-10 p-2" />
        </div>
      </div>
    </li>
  );
}

const Team = () => {
  return (
    <section className="text-[#484747] bg-[#f6f6f6]">
      <div className="container">
        <div className="py-[80px] mx-auto text-center">
          <div className="text-[15px]/[1.7em] mb-6">
            <h2 className="text-[30px]/normal mb-[50px] text-[#444444] uppercase font-extrabold">
              our team
            </h2>

            <div className="mx-auto w-[50px] border-2 border-[#3dbad5]" />
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {teamList.map((team) => (
              <TeamCard key={team.name} {...team} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
