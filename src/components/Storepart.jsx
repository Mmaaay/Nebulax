import FullCard from "./FullCard";
import FashionStore from "../assets/hats_shoes.png";
import Sofa from "../assets/sofa.jpg";
import Gadget from "../assets/gadget.jpg";
const Storepart = () => {
  return (
    <div className="flex items-center justify-center space-x-3 mt-44 mb-[13.125rem]">
      <FullCard
        text={"Fashion Store"}
        description={
          "Shop ladies fashion at Misssguided USA With hundreds of new styles hitting our shelves every week"
        }
        image={FashionStore}
        imageProps={"rounded-lg object-contain w-[19rem] h-[11.5rem]"}
        props={
          "text-left leading-10 mt-3  flex flex-col py-4 pl-4 pr-14 space-y-1"
        }
      />
      <FullCard
        text={"Home Furniture"}
        description={
          "Provide superior quality furniture and quality mattresses at a price that customers can easily afford"
        }
        image={Sofa}
        imageProps={"rounded-lg object-contain w-[19rem] h-[11.5rem]"}
        props={
          "text-left leading-10 mt-3  flex flex-col py-4 pl-4 pr-14 space-y-1"
        }
      />
      <FullCard
        text={"Super Gadget Store"}
        description={
          "Specialize in selling unique gifts, cool gadgets, outdoor gear and fab toys"
        }
        image={Gadget}
        imageProps={"rounded-lg object-contain w-[19rem] h-[11.5rem]"}
        props={
          "text-left leading-10 mt-3  flex flex-col py-4 pl-4 pr-14 space-y-1"
        }
        ColoredCircle={false}
      />
    </div>
  );
};

export default Storepart;
