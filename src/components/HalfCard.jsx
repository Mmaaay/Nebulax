import PropTypes from "prop-types";
import Profilecircle from "./Profilecircle.jsx";
import SmoothLineChart from "./recharts.jsx";

const HalfCard = ({
  image,
  text,
  description,
  imageProps,
  ColoredCircle,
  props,
  Allignment,
}) => {
  const alignmentClass =
    Allignment === "left"
      ? "justify-start pr-4 pl-10"
      : "justify-end pl-4 pr-10";

  const chartPosition =
    Allignment === "left"
      ? "absolute right-10 -bottom-8"
      : "absolute -left-12 -bottom-20 ";

  const chartContainer = (
    <div className={`${chartPosition} w-40 h-20 opacity-50`}>
      <SmoothLineChart
        pattern={Allignment === "left" ? "bluePattern" : "greenPattern"}
      />
    </div>
  );

  return Allignment === "left" ? (
    <div
      className={`relative flex ${alignmentClass} space-x-4 items-center rounded-lg transition-transform duration-300 shadow-2xl bg-white shadow-black/30 drop-shadow-lg w-[20rem] h-[7.625rem] z-30`}
    >
      <div className="relative flex flex-col items-center justify-center w-[5rem] z-40">
        {ColoredCircle ? (
          <Profilecircle
            image={image}
            text={text}
            imageProps={imageProps}
            className="bg-transparent border-2 border-black"
            bgColor="bg-gray-400/10"
          />
        ) : (
          <img src={image} alt={text} className={`${imageProps}`} />
        )}
      </div>
      <div
        className={`flex flex-col flex-wrap text-center items-center justify-center space-y-1 ${props}`}
      >
        <div className="flex items-center">
          <p className="text-lg font-bold">$ {description}</p>
          <div className="relative w-3 h-3 ml-2 bg-blue-500 rounded-full">
            <div className="absolute inset-0 w-1 h-1 m-auto bg-white rounded-full"></div>
          </div>
        </div>

        <p className="text-sm text-black">
          Total Revenue <span className="font-semibold text-green-500">+n</span>
        </p>
      </div>
      {chartContainer}
    </div>
  ) : (
    <div
      className={`relative flex ${alignmentClass} space-x-4 items-center rounded-lg transition-transform duration-300 shadow-2xl bg-white shadow-black/30 drop-shadow-lg w-[20rem] h-[7.625rem] z-30`}
    >
      <div
        className={`flex flex-col flex-wrap text-center items-center justify-center space-y-1 ${props}`}
      >
        <div className="flex items-center">
          <p className="text-lg font-bold">$ {description}</p>
          <div className="relative w-3 h-3 ml-2 bg-blue-500 rounded-full">
            <div className="absolute inset-0 w-1 h-1 m-auto bg-white rounded-full"></div>
          </div>
        </div>

        <p className="text-sm text-black">
          Total Revenue <span className="font-semibold text-green-500">+n</span>
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center w-[5rem] z-40">
        {ColoredCircle ? (
          <Profilecircle
            image={image}
            text={text}
            imageProps={imageProps}
            className="bg-transparent border-2 border-black"
            bgColor="bg-gray-400/10"
          />
        ) : (
          <img src={image} alt={text} className={`${imageProps}`} />
        )}
      </div>
      {chartContainer}
    </div>
  );
};

export default HalfCard;

HalfCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageProps: PropTypes.string,
  props: PropTypes.string,
  ColoredCircle: PropTypes.bool,
  Allignment: PropTypes.oneOf(["left", "right"]),
};
HalfCard.defaultProps = {
  imageProps: "",
  props: "",
  ColoredCircle: false,
};
