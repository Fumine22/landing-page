import {
  BrainCog,
  Layout,
  LayoutGrid,
  LucideIcon,
  TabletSmartphone,
} from "lucide-react";
import { Button } from "./ui/Button";

interface Services {
  id: number;
  logo: LucideIcon;
  title: string;
  description: string;
}

const servicesList: Services[] = [
  {
    id: 1,
    logo: Layout,
    title: "Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rem?",
  },
  {
    id: 2,
    logo: LayoutGrid,
    title: "Application",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rem?",
  },
  {
    id: 3,
    logo: TabletSmartphone,
    title: "Mobile App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rem?",
  },
  {
    id: 4,
    logo: BrainCog,
    title: "AI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rem?",
  },
];

function ServiceItem({ logo: Icon, title, description }: Services) {
  return (
    <li className="flex flex-col items-center text-center text-[15px]/[1.7em] max-w-[350px] mx-auto">
      <div className="w-[116px] h-[80px] mb-3">
        <Icon className="w-full h-full text-[#90D1DF]" />
      </div>
      <h3 className="text-[#444444] font-semibold text-xl/[32px] mb-1">
        {title}
      </h3>
      <p className="text-[#7b7b7b]">{description}</p>
      <div className="mt-7 text-sm/[1.7em]">
        <Button>Read More</Button>
      </div>
    </li>
  );
}

const Service = () => {
  return (
    <section className="bg-[#f6f6f6] text-[#484747]">
      <div className="container">
        <div className="py-[80px]">
          <ul className="flex flex-col gap-12 md:grid md:grid-rows-2 md:grid-cols-2 lg:flex lg:flex-row">
            {servicesList.map((service) => (
              <ServiceItem key={service.id} {...service} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
