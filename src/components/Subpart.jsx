import CallToActionButton from "./CallToActionButton";
import Coloredcircle from "./Coloredcirle";
import chair from "../assets/chair.png";
import headphones from "../assets/headphones.png";

const Subpart = () => {
  return (
    <div className="relative grid items-center justify-center w-full grid-cols-2 px-24 mt-32">
      <div className="space-y-6 text-left">
        <p className="font-mono text-xl font-semibold text-yellow-200">
          We Help You
        </p>
        <div>
          <h1 className="text-4xl font-bold text-left">Sell</h1>
          <h1 className="text-4xl font-bold text-left">Stunning</h1>
          <h1 className="text-4xl font-bold text-left">Products</h1>
        </div>
        <div>
          <p>We&lsquo;ll guide you through our unique 5-step</p>
          <p>brand-building framework</p>
        </div>
        <div>
          <CallToActionButton />
        </div>
      </div>

      <div className="flex justify-center space-x-10">
        <Coloredcircle
          size="15rem"
          bgColor="bg-yellow-200"
          itemCardPosition="right-2 bottom-4"
          itemName="Minimal Chair"
          price="200.00"
          Fullcard={true}
          image={chair}
        />

        <Coloredcircle
          size="13rem"
          bgColor="bg-purple-400"
          customStyles="mt-[8rem]"
          itemCardPosition="-left-4 -bottom-16"
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
