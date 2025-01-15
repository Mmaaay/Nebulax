import { useEffect, useState } from "react";
import BuildModal from "../components/BuildModal";
import propTypes from "prop-types";

const Modalprovider = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {children}
      <BuildModal />
    </>
  );
};

export default Modalprovider;

Modalprovider.propTypes = {
  children: propTypes.node.isRequired,
};

Modalprovider.defaultProps = {
  children: propTypes.node,
};
