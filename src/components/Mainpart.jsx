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
    <div className="relative w-full px-4 mt-16 md:mt-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative flex justify-center order-2 md:order-1 md:justify-start">
          <FullCard
            image={FashionStore}
            props="mt-3 flex flex-col py-4 space-y-1"
            text="James Bruno"
            description="Digital Marketing"
            imageProps={"object-fill h-[6.4375rem] w-[6.4375rem] rounded-full "}
            ColoredCircle={true}
          />
        </div>
        <div className="flex flex-col order-1 px-0 space-y-3 md:px-4 md:order-2">
          <div className="mb-6 space-y-2 font-sans font-bold tracking-tight text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">We Help You</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              Build & Grow an
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              Online Business
            </h1>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="relative transition-all duration-300 hover:scale-[1.02] group">
              <input
                type="text"
                name="project"
                placeholder="Tell us what you need to build"
                className="w-full px-4 py-4 transition duration-300 bg-white rounded-lg shadow-2xl md:px-5 md:py-5 drop-shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:caret-transparent"
              />
              <div className="absolute flex items-center justify-center px-3 py-3 transition duration-300 transform -translate-y-1/2 rounded-lg bg-purple-700/90 top-1/2 right-4 group-hover:bg-purple-800/90">
                <FaSearch className="text-white/80" />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between w-full mt-16 space-y-4 md:flex-row md:mt-36 md:space-y-0">
        <p className="text-sm text-black/60 md:text-base">
          Companies We&apos;ve helped build
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:space-x-2">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={logo}
              alt=""
              className="object-contain w-12 h-12 md:w-16 md:h-16"
            />
          ))}
        </div>
      </div>
      <BuildModal />
    </div>
  );
};

export default Mainpart;
