import CallToActionButton from "./CallToActionButton";
import Coloredcircle from "./Coloredcirle";
import chair from "../assets/chair.png";
import headphones from "../assets/headphones.png";

const Subpart = () => {
  const getCircleSize = () => {
    if (window.innerWidth < 640) return "8rem";
    if (window.innerWidth < 768) return "10rem";
    if (window.innerWidth < 1024) return "12rem";
    return "15rem";
  };

  const getSmallCircleSize = () => {
    if (window.innerWidth < 640) return "6rem";
    if (window.innerWidth < 768) return "8rem";
    if (window.innerWidth < 1024) return "10rem";
    return "13rem";
  };

  return (
    <div className="relative grid items-center justify-center w-full grid-cols-1 gap-8 px-4 mt-8 sm:px-6 sm:mt-12 md:mt-32 md:px-24 md:grid-cols-2">
      <div className="space-y-3 text-center sm:space-y-4 md:space-y-6 md:text-left sm:mr-4">
        <p className="font-mono text-base font-semibold text-yellow-200 sm:text-lg md:text-xl">
          We Help You
        </p>
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Sell</h1>
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Stunning
          </h1>
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Products
          </h1>
        </div>
        <div>
          <p>We&lsquo;ll guide you through our unique 5-step</p>
          <p>brand-building framework</p>
        </div>
        <div>
          <CallToActionButton />
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2 sm:space-x-4 md:space-x-10 md:mt-0">
        <Coloredcircle
          size={getCircleSize()}
          bgColor="bg-yellow-200"
          itemCardPosition="right-0 sm:right-2  bottom-2 sm:bottom-4"
          itemName="Minimal Chair"
          price="200.00"
          Fullcard={true}
          image={chair}
        />

        <Coloredcircle
          size={getSmallCircleSize()}
          bgColor="bg-purple-400"
          customStyles="mt-[2rem] sm:mt-[4rem] md:mt-[8rem]"
          itemCardPosition="-left-2 sm:-left-4 -bottom-12 sm:-bottom-16"
          itemName="Beats Headphone"
          price="74.00"
          Fullcard={true}
          image={headphones}
        />
      </div>
    </div>
  );
};

export default Subpart;
