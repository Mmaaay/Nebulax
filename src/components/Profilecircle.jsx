import PropTypes from "prop-types";

const Profilecircle = ({
  image,
  text,
  imageProps,
  bgColor = "bg-red-400/10",
}) => {
  return (
    <div className={`relative p-4 rounded-full ${bgColor}`}>
      <img src={image} alt={text} className={`${imageProps}`} />

      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="blue" />
            <stop offset="70%" stopColor="blue" />
            <stop offset="100%" stopColor="blue" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M50,5 A45,45 0 0,1 95,50 A45,45 0 0,1 50,95"
          stroke="url(#gradient)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Profilecircle;

Profilecircle.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  imageProps: PropTypes.string,
  bgColor: PropTypes.string, // Added prop type
};
