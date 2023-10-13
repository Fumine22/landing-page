import About from "@/components/About";
import Banner from "@/components/Banner";
import Do from "@/components/Do";
import NavBar from "@/components/NavBar";
import Service from "@/components/Service";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Service />
      <About />
      <Work />
      <Do />
    </div>
  );
}
