import CallToActionButton from "./CallToActionButton";
import Coloredcircle from "./Coloredcirle";
import profilePicture from "../assets/hats_shoes.png";

const Resultpart = () => {
  return (
    <div className="relative flex flex-col w-full px-4 space-y-8 md:flex-row md:px-24 md:space-y-0">
      <div className="z-0 flex items-start justify-center space-x-10">
        <Coloredcircle
          size="12rem"
          bgColor="bg-blue-400"
          itemCardPosition="lg:left-10 lg:bottom-4 -left-16 top-8"
          itemName="Minimal Chair"
          price="200.00"
          ColoredCircle={true}
          Allignment="left"
          image={profilePicture}
        />

        <Coloredcircle
          size="10rem"
          bgColor="bg-green-400"
          customStyles="mt-[16rem] hidden lg:block"
          itemCardPosition="-top-3 right-10  hidden lg:block"
          itemName="Beats Headphone"
          price="74.00"
          ColoredCircle={true}
          Allignment="right"
          image={profilePicture}
        />
      </div>
      <div className="relative space-y-6 text-center md:text-left md:absolute md:space-y-6 md:left-1/2">
        <p className="font-mono text-base font-semibold text-yellow-200">
          What We Do
        </p>
        <div>
          <h1 className="text-4xl font-bold text-left">Increase Our</h1>
          <h1 className="text-4xl font-bold text-left">Customers</h1>
          <h1 className="text-4xl font-bold text-left">Sales</h1>
        </div>
        <div className="font-light">
          <p>Our customers are seeing big results within</p>
          <p>the first three months</p>
        </div>
        <div>
          <CallToActionButton />
        </div>
      </div>
    </div>
  );
};

export default Resultpart;
