import Logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
        <span className="ml-3 text-lg font-semibold">Nebulax</span>
      </div>
      <div className="flex items-center space-x-6">
        <p className="underline">Get Started Now</p>
        <div className="px-6 py-2 transition duration-150 cursor-pointer rounded-3xl hover:bg-gray-100">
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
