import CallToActionButton from "./CallToActionButton";
import Coloredcircle from "./Coloredcirle";
import profilePicture from "../assets/hats_shoes.png";

const Resultpart = () => {
  return (
    <div className="relative flex w-full px-24">
      <div className="z-0 flex items-start justify-center space-x-10">
        <Coloredcircle
          size="12rem"
          bgColor="bg-blue-400"
          itemCardPosition="left-10 bottom-4"
          itemName="Minimal Chair"
          price="200.00"
          ColoredCircle={true}
          Allignment="left"
          image={profilePicture}
        />

        <Coloredcircle
          size="10rem"
          bgColor="bg-green-400"
          customStyles="mt-[16rem]"
          itemCardPosition="-top-3 right-10"
          itemName="Beats Headphone"
          price="74.00"
          ColoredCircle={true}
          Allignment="right"
          image={profilePicture}
        />
      </div>
      <div className="absolute space-y-6 text-left left-1/2">
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
