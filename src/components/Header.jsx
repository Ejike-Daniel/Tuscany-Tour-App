import Hero from "../pages/landingPage/Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-bgImg1 w-full h-[85vh] bg-cover bg-no-repeat bg-bottom flex flex-col gap-7">
      <Navbar />
      <div className="mt-5">
        <Hero />
      </div>
    </header>
  );
};

export default Header;
