import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="  bg-dune ">
      <div>
        <img src={logo} alt={logo} />
      </div>
      <section>
        <div>
          <h6>Services</h6>
          <ul>
            <li>Bike and Rickshaw rental</li>
            <li>Guided Tours of Lucca</li>
            <li>Guided Bike Tour of Lucca</li>
            <li>Trip In The Tuscan Hills</li>
            <li>Transportation With Luxury Cars</li>
            <li>Wine Tours By With Guide</li>
          </ul>
        </div>
        <div>
          <h6>Home</h6>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"about"}>
              <li>About Us</li>
            </Link>
            <Link to={"tour"}>
              <li>Tour Packages</li>
            </Link>
          </ul>
        </div>
        <div>
          <h6>Help</h6>
          <ul>
            <Link to={"#"}>
              <li>Terms of Use</li>
            </Link>
            <Link to={"#"}>
              <li>Provicy Policy</li>
            </Link>
          </ul>
        </div>
        <div>
          <h6>Contacts</h6>
          <ul>
            <div>
              <FaLocationDot />
              <span>Pizza Napoleon, Lucca Tuscany</span>
            </div>
            <div>
              <FaPhone />
              <span>+303463685708</span>
            </div>
            <div>
              <IoMdMail />
              <span>italianlimo@gmail.com</span>
            </div>
          </ul>
        </div>
        <div>
          <h6>Socials</h6>
          <div>
            <FaXTwitter />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      </section>
      <div>
        <p>Copyright&copy; 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
