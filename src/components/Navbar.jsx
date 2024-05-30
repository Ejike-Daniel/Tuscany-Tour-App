import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt={logo} />
      </div>
      <div>
        <div>
          <ul>
            <Link>
              <li>Home</li>
            </Link>
            <Link>
              <li>About Us</li>
            </Link>
            <Link>
              <li>Tour Packages</li>
            </Link>
            <Link>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div>
          <div className="pointer-events-none absolute  right-0 flex items-center px-2 ">
            <span>Eng</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.516 7.548a1.11 1.11 0 011.536 0L10 10.495l2.948-2.947a1.11 1.11 0 111.536 1.536l-3.764 3.764a1.11 1.11 0 01-1.536 0L5.516 9.084a1.11 1.11 0 010-1.536z" />
            </svg>
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
