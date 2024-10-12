import { Link } from "react-router-dom";

const ButtonNavigation = () => {
  return (
    <nav className="fixed bg-white border-t border-gray-300 bottom-0 left-0 right-0 px-6 py-4">
      <ul className="w-full inline-flex items-center  justify-between">
        <Link to={`/`}>Home</Link>
        <Link to={`/`}>Categories</Link>
        <Link to={`/new`}>Sell</Link>
        <Link to={`/my-panel/dashboard`}>My panel</Link>
      </ul>
    </nav>
  );
};

export default ButtonNavigation;
