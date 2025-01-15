import PropTypes from "prop-types";
import ItemCard from "./ItemCard.jsx";
import HalfCard from "./HalfCard.jsx";

const Coloredcircle = ({
  bgColor,
  size,
  itemCardPosition,
  customStyles,
  itemName,
  price,
  Fullcard,
  ColoredCircle,
  Allignment,
  image,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center ${customStyles} z-10`}
    >
      <div
        style={{ width: size, height: size }}
        className={`${bgColor || "bg-blue-500"} rounded-full relative`}
      />
      <div className={`absolute flex z-10 ${itemCardPosition}`}>
        {Fullcard ? (
          <ItemCard image={image} itemName={itemName} price={price} />
        ) : (
          <HalfCard
            image={image}
            text={itemName}
            description={price}
            ColoredCircle={ColoredCircle}
            Allignment={Allignment}
            imageProps="object-contain rounded-full"
          />
        )}
      </div>
    </div>
  );
};

Coloredcircle.propTypes = {
  size: PropTypes.string,
  bgColor: PropTypes.string,
  itemCardPosition: PropTypes.string,
  customStyles: PropTypes.string,
  itemName: PropTypes.string,
  price: PropTypes.string,
  Fullcard: PropTypes.bool,
  ColoredCircle: PropTypes.bool,
  Allignment: PropTypes.oneOf[("left", "right")],
  image: PropTypes.string,
};

Coloredcircle.defaultProps = {
  itemCardPosition: "right-32 -bottom-10",
  customStyles: "",
  Fullcard: false,
  ColoredCircle: false,
  itemName: "",
  price: "",
};

export default Coloredcircle;

// Example usage of Coloredcircle component
<Coloredcircle
  size="10rem"
  bgColor="bg-green-400"
  // customStyles="mt-[33rem]" // Removed customStyles to maintain alignment
  itemCardPosition="-top-3 right-10"
  itemName="Beats Headphone"
  price="74.00"
  ColoredCircle={true}
  Allignment="right"
/>;
