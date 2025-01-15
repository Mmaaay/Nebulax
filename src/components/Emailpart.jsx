import Email from "./Email";

const Emailpart = () => {
  return (
    <div className="grid grid-cols-1 mt-[10rem] md:grid-cols-2">
      <div className="flex justify-center">
        <Email />
      </div>
      <div className="h-64 bg-black">{/* Black box placeholder */}</div>
    </div>
  );
};

export default Emailpart;
