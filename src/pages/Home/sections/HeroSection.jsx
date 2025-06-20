import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBanners } from "../../../store/banners/bannersAction";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const banners = useSelector((state) => state.banners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  return (
    <article
      id="Home"
      style={{ backgroundImage: `url(${banners?.desktop_image_url})` }}
      className="h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4 h-full flex flex-col justify-end">
        <div className="max-w-xl mb-20 flex flex-col items-center lg:items-start text-center mx-auto lg:mx-0 lg:text-left gap-4 text-white">
          <h1 className="text-3xl lg:text-5xl font-bold">{banners?.title}</h1>
          <p className="text-lg">{banners?.paragraph}</p>
          <div className="flex flex-wrap gap-2 lg:gap-4">
            {banners?.buttons.map((button, index) => (
              <Link
                key={index}
                to={button.url}
                className={`mainBtn ${button.outline && "transparent"}`}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default HeroSection;
