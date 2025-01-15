import Logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-16 py-3 bg-white shadow-md bg-opacity-20 sm:px-3 lg:px-10">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="w-8 h-8 rounded-full sm:w-10 sm:h-10 lg:w-12 lg:h-12"
        />
        <span className="ml-2 text-base font-semibold text-gray-800 pointer sm:ml-3 sm:text-lg">
          Nebulax
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-sm text-black underline cursor-pointer sm:text-base">
          Get Started Now
        </p>
        <button className="px-3 py-1 text-sm font-bold text-black transition duration-150 duration-300 bg-transparent rounded-3xl sm:px-4 sm:py-2 sm:text-base hover:bg-gray-200/90">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
