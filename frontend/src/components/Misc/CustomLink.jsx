import { Link } from "react-router-dom";

const CustomLink = ({ to, children }) => {
  return (
    <Link className="custom-link" to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;
