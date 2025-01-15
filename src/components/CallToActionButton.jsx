import { ChevronRight } from "lucide-react";

const CallToActionButton = () => {
  return (
    <div className="mt-16 px-0 relative flex items-center justify-center py-6 text-center border-0 rounded-3xl cursor-pointer text-white text-base  w-[12rem] bg-gradient-to-r from-purple-500 to-purple-700">
      <span className="absolute text-white left-10">More Details</span>
      <button className="absolute flex items-center h-full -right-1">
        <ChevronRight className="text-xl font-bold text-purple-500 flex items-end justify-end h-[90%]  w-[90%] bg-white rounded-full border-r-2 border-purple-500" />
      </button>
    </div>
  );
};

export default CallToActionButton;
