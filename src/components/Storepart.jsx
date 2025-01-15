import FullCard from "./FullCard";
import FashionStore from "../assets/hats_shoes.png";
import Sofa from "../assets/sofa.jpg";
import Gadget from "../assets/gadget.jpg";
const Storepart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-20 sm:mt-44 mb-20 sm:mb-[13.125rem] max-w-7xl mx-auto justify-center items-end">
      <FullCard
        text={"Fashion Store"}
        description={
          "Shop ladies fashion at Misssguided USA With hundreds of new styles hitting our shelves every week"
        }
        image={FashionStore}
        imageProps={
          "rounded-lg object-contain w-full max-w-[19rem] h-[11.5rem]"
        }
        props={"text-left  mt-3 flex flex-col  ml-3 px-6 py-10  space-y-1 "}
      />
      <FullCard
        text={"Home Furniture"}
        description={
          "Provide superior quality furniture and quality mattresses at a price that customers can easily afford"
        }
        image={Sofa}
        imageProps={
          "rounded-lg object-contain w-full max-w-[19rem] h-[11.5rem]"
        }
        props={"text-left  mt-3 flex flex-col  ml-3 px-6 py-10  space-y-1 "}
      />
      <FullCard
        text={"Super Gadget Store"}
        description={
          "Specialize in selling unique gifts, cool gadgets, outdoor gear and fab toys"
        }
        image={Gadget}
        imageProps={
          "rounded-lg object-contain w-full max-w-[19rem] h-[11.5rem]"
        }
        props={"text-left  mt-3 flex flex-col  ml-3 px-6 py-10  space-y-1 "}
        ColoredCircle={false}
      />
    </div>
  );
};

export default Storepart;
