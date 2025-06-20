import logoImg from "../../../assets/images/logo-white.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-red sectionPadding">
      <div className="container bg-dark-red grid lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <img src={logoImg} alt="Logo" />
          <p>
            A creative agency helping brands grow through design, strategy, and
            impact.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="font-bold text-2xl">Explore</h3>
          <ul className="space-y-1">
            <li>
              <a href="#!" className="hover:text-gray-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-400 transition">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-400 transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="font-bold text-2xl">Let's Connect</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:hello@youragency.com"
              className="hover:text-gray-400 transition"
            >
              hello@youragency.com
            </a>
          </p>
          <p>Phone: +20 123 456 789</p>
          <p>Location: Cairo, Egypt</p>

          <button className="mainBtn light">15-Min Free Consultation</button>
        </div>
      </div>

      <div className="container bg-dark-red grid lg:grid-cols-3 gap-4 mt-8">
        <p className="text-center">
          © 2025 Life Media Production. All rights reserved.
        </p>

        <div className="flex justify-center  gap-4">
          <a
            href="#!"
            className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-gray-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="#!"
            className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-gray-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#!"
            className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-gray-400 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#!"
            className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-gray-400 transition"
          >
            <FaBehance />
          </a>
        </div>

        <div className="text-center">
          <a href="#!" className="hover:text-gray-400 transition">
            Teams & Conditions
          </a>{" "}
          |{" "}
          <a href="#!" className="hover:text-gray-400 transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
