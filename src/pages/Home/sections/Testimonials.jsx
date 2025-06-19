import SectionTitle from "../../../components/common/SectionTitle";
import noiseImg from "../../../assets/images/noise.png";
import inDriveImg from "../../../assets/images/in-drive.png";
import manImg from "../../../assets/images/man.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Working with the team felt like having our own internal creative department. Everything from the branding to the social media was done with precision and heart.",
      name: "Dr. Mohamed Saqr",
      position: "Founder of Saqr Clinics",
      image: manImg,
      brandImg: inDriveImg,
    },
    {
      id: 2,
      text: "Working with the team felt like having our own internal creative department. Everything from the branding to the social media was done with precision and heart.",
      name: "Dr. Mohamed Saqr",
      position: "Founder of Saqr Clinics",
      image: manImg,
      brandImg: inDriveImg,
    },
    {
      id: 3,
      text: "Working with the team felt like having our own internal creative department. Everything from the branding to the social media was done with precision and heart.",
      name: "Dr. Mohamed Saqr",
      position: "Founder of Saqr Clinics",
      image: manImg,
      brandImg: inDriveImg,
    },
    {
      id: 4,
      text: "Working with the team felt like having our own internal creative department. Everything from the branding to the social media was done with precision and heart.",
      name: "Dr. Mohamed Saqr",
      position: "Founder of Saqr Clinics",
      image: manImg,
      brandImg: inDriveImg,
    },
  ];
  return (
    <section className="sectionPadding">
      <SectionTitle title={"Client Testimonials"} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 1000 }}
        speed={3000}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          1020: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id} className="px-4">
            <div
              style={{ backgroundImage: `url(${noiseImg})` }}
              className="space-y-4 p-4 rounded-2xl relative overflow-hidden 
                after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-0 after:h-0 
                after:shadow-[0px_0px_100px_70px] after:shadow-red-500 after:opacity-0 
                after:transition-all after:duration-300 hover:after:opacity-100"
            >
              <img src={item.brandImg} alt="Brand" />

              <p className="text-xl">{item.text}</p>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 overflow-hidden rounded-full">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.name}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-sm">{item.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
