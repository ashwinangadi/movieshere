import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";

function Navbar() {
  const { setSearch } = useGlobalContext();

  return (
    <div className="h-[80px] bg-slate-200 w-screen flex items-center justify-between px-8 lg:px-32">
      <Link to="/">
        <p
          className="text-2xl lg:text-4xl font-extrabold"
          onClick={() => setSearch("")}
        >
          MoviesHere
        </p>
      </Link>
      <Link to="/favorite">
        <p className="text-lg lg:text-2xl font-medium cursor-pointer">
          Favorites
        </p>
      </Link>
    </div>
  );
}

export default Navbar;
