import logoImg from "../../../assets/images/logo-white.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import Loading from "../Loading/Loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSetting } from "../../../store/setting/settingAction";
import { FaF } from "react-icons/fa6";

const Footer = () => {
  const { setting, loading } = useSelector((state) => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSetting());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

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
              <a href="#About" className="hover:text-gray-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#Services" className="hover:text-gray-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#Projects" className="hover:text-gray-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a
                href="#SuccessStories"
                className="hover:text-gray-400 transition"
              >
                Success Stories
              </a>
            </li>
            <li>
              <a href="#Careers" className="hover:text-gray-400 transition">
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
              {setting?.email}
            </a>
          </p>
          <p>Phone: {setting?.phone}</p>
          <p>Location: {setting?.address}</p>

          <button className="mainBtn light">15-Min Free Consultation</button>
        </div>
      </div>

      <div className="container bg-dark-red grid lg:grid-cols-3 gap-4 mt-8">
        <p className="text-center">
          © 2025 Life Media Production. All rights reserved.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <a
            href={setting?.whatsapp}
            target="_blank"
            className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-gray-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href={setting?.instagram}
            target="_blank"
            className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-gray-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href={setting?.facebook}
            target="_blank"
            className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-gray-400 transition"
          >
            <FaFacebook />
          </a>
          <a
            href={setting?.behance}
            target="_blank"
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
