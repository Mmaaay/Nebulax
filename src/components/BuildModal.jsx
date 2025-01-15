import { useSelector, useDispatch } from "react-redux";
import { setEmail, toggleModal } from "../redux/inputSlice.js";

const BuildModal = () => {
  const dispatch = useDispatch();
  const { projectDescription, email, isModalOpen } = useSelector(
    (state) => state.input
  );

  if (!isModalOpen) return null;

  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    dispatch(toggleModal(false));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 transition-opacity duration-300 bg-black bg-opacity-50">
      <div className="w-full max-w-lg p-6 transition-transform duration-300 ease-in-out transform bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Project Details
        </h2>
        <p>Project: {projectDescription}</p>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 text-white transition-colors duration-200 bg-purple-700 rounded hover:bg-purple-800"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 ml-2 transition-colors duration-200 bg-gray-400 rounded hover:bg-gray-500"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuildModal;
