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
    <div className="flex justify-center items-center  flex-col rounded-lg transition-transform duration-300 shadow-2xl py-4 shadow-black/30 drop-shadow-lg h-full w-full sm:w-[18.625rem] md:w-[20rem] hover:scale-105">
      <div className="w-full px-2 sm:px-4 pt-4 h-[11.5rem] items-center justify-center flex">
        {ColoredCircle ? (
          <Profilecircle image={image} text={text} imageProps={imageProps} />
        ) : (
          <img src={image} alt={text} className={`${imageProps}`} />
        )}
      </div>
      <div className={` ${props}  `}>
        <p className="mb-4 text-lg font-semibold md:text-base">{text}</p>
        <p className="leading-10 tracking-wide text-black/40 md:text-sm">
          {description}
        </p>
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
