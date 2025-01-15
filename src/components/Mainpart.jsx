import { FaSearch } from "react-icons/fa";
import FashionStore from "/src/assets/hats_shoes.png";
import logo from "../assets/logo.jpg";

import FullCard from "./FullCard";
import { useDispatch } from "react-redux";
import { setProjectDescription, toggleModal } from "../redux/inputSlice";
import BuildModal from "./BuildModal";

const Mainpart = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.project.value;
    dispatch(setProjectDescription(input));
    dispatch(toggleModal(true));
  };

  return (
    <div className="relative grid w-full grid-cols-2 px-4 mt-32 ">
      <div className="relative mt-48 mr-auto">
        <FullCard
          image={FashionStore}
          props="mt-3 flex flex-col py-4  space-y-1"
          text="James Bruno"
          description="Digital Marketing"
          imageProps={"object-fill h-[6.4375rem] w-[6.4375rem] rounded-full "}
          ColoredCircle={true}
        />
      </div>
      <div className="flex flex-col px-4 space-y-3">
        <div className="mb-6 space-y-2 font-sans font-bold tracking-tight ">
          <h1 className="text-5xl text-left">We Help You</h1>
          <h1 className="text-5xl text-left">Build & Grow an</h1>
          <h1 className="text-5xl text-left">Online Business</h1>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="relative transition-all duration-300 hover:scale-[1.02] group">
            <input
              type="text"
              name="project"
              placeholder="Tell us what you need to build"
              className="w-full px-5 py-5 transition duration-300 bg-white rounded-lg shadow-2xl drop-shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:caret-transparent"
            />
            <div className="absolute flex items-center justify-center px-3 py-3 transition duration-300 transform -translate-y-1/2 rounded-lg bg-purple-700/90 top-1/2 right-4 group-hover:bg-purple-800/90">
              <FaSearch className="text-white/80" />
            </div>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-between w-full col-span-2 mt-36 ">
        <p className="text-black/60">Companies We&apos;ve helped build</p>
        <div className="flex items-center justify-center space-x-2 ">
          <img src={logo} alt="" className="object-contain w-16 h-16" />
          <img src={logo} alt="" className="object-contain w-16 h-16" />
          <img src={logo} alt="" className="object-contain w-16 h-16" />
          <img src={logo} alt="" className="object-contain w-16 h-16" />
          <img src={logo} alt="" className="object-contain w-16 h-16" />
        </div>
      </div>
      <BuildModal />
    </div>
  );
};

export default Mainpart;
