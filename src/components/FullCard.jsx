import PropTypes from "prop-types";
import Profilecircle from "./Profilecircle";
const FullCard = ({
  image,
  text,
  description,
  imageProps,
  ColoredCircle,
  props,
}) => {
  return (
    <div className="flex flex-col rounded-lg transition-transform duration-300 shadow-2xl py-4 shadow-black/30 drop-shadow-lg h-full w-[18.625rem] hover:scale-105">
      <div className="w-full px-4 pt-4 h-[11.5rem] items-center justify-center flex">
        {ColoredCircle ? (
          <Profilecircle image={image} text={text} imageProps={imageProps} />
        ) : (
          <img src={image} alt={text} className={`${imageProps}`} />
        )}
      </div>
      <div className={` ${props}`}>
        <p className="text-lg font-semibold">{text}</p>
        <p className="text-sm leading-[1.5rem] text-black/40">{description}</p>
      </div>
    </div>
  );
};

export default FullCard;

FullCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageProps: PropTypes.string,
  props: PropTypes.string,
  ColoredCircle: PropTypes.bool,
};
FullCard.defaultProps = {
  imageProps: "",
  props: "",
  ColoredCircle: false,
};
