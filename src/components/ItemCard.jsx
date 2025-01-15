import PropTypes from "prop-types";
// Import the shopping cart icon
import { FaShoppingCart } from "react-icons/fa";

const ItemCard = ({ image, itemName, price }) => {
  const [mainPrice, decimalPrice] = price.toString().split(".");

  return (
    <div className="flex flex-col items-center justify-between bg-white rounded-lg shadow-md py-4 w-[11rem] h-[11rem] z-20 hover:scale-105 transition-transform duration-300">
      <div className="absolute flex items-center justify-center w-32 h-32 overflow-hidden -top-20 ">
        <img
          src={image}
          alt={itemName}
          className="object-cover w-full h-full "
        />
      </div>
      <div className="mt-10">
        <p className="text-lg font-medium">{itemName}</p>
        <hr className="mt-6 font-semibold w-[9rem]" />
      </div>
      <div className="flex items-center justify-between w-full px-2 py-2">
        <p className="font-bold text-yellow-500">
          ${mainPrice}
          <span className="text-sm text-yellow-400">.{decimalPrice}</span>
        </p>
        <FaShoppingCart className="font-bold text-black transition-transform duration-300 cursor-pointer hover:translate-y-1" />
      </div>
    </div>
  );
};

export default ItemCard;

ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
