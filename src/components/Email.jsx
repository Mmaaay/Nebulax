import { FiMail, FiMessageCircle } from "react-icons/fi";

const Email = () => {
  return (
    <div className="max-w-md px-14 py-8   w-[30rem] mx-auto bg-white shadow-md rounded-xl">
      <form className="w-full h-full">
        <div className="flex items-center justify-center font-sans text-3xl font-bold text-gray-900">
          Write Us
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-4 mt-10 mb-10">
          <div className="flex items-center w-full px-4 py-2 bg-gray-100 border shadow rounded-2xl">
            <FiMail className="mr-2 text-gray-700" />
            <input
              type="email"
              className="w-full bg-transparent focus:outline-none"
              placeholder="email@email.com"
            />
          </div>
          <div className="flex items-start w-full px-4 py-2 bg-gray-100 border rounded-lg shadow">
            <FiMessageCircle className="mt-1 text-gray-700 " />
            <textarea
              className="w-full h-[7.5rem] px-2  leading-tight text-gray-700 bg-transparent border-0 resize-none focus:outline-none"
              placeholder="Enter your message"
              draggable="false"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="px-10 py-3 font-sans text-sm font-semibold tracking-wider uppercase rounded-full text-white/80 bg-gradient-to-r from-purple-500 to-purple-700 hover:bg-purple-600">
            SEND YOUR MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Email;
