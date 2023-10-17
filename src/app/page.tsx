import About from "@/components/About";
import Banner from "@/components/Banner";
import Do from "@/components/Do";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Service from "@/components/Service";
import Team from "@/components/Team";
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
      <Projects />
      <Team />
      <Footer />
    </div>
  );
}
