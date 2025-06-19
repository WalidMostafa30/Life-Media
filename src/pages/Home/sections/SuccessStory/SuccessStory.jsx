import SectionTitle from "../../../../components/common/SectionTitle";
import manImg from "../../../../assets/images/man.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SuccessStory.css";

const SuccessStory = () => {
  const SuccessList = [
    {
      id: 1,
      title: "Saqr Clinics — A Brand Patients Trust",
      description:
        "An outdated identity and weak digital presence were limiting patient engagement and online bookings.",
      whatWeDid: [
        "Rebranded the clinic with a clean, modern identity",
        "Designed a booking-focused website",
        "Created consistent social visuals and clinic materials",
      ],
      results: [
        "+60% online bookings",
        "5× increase in social engagement",
        "Stronger brand trust and visibility",
      ],
      image: manImg,
    },
    {
      id: 2,
      title: "Saqr Clinics — A Brand Patients Trust",
      description:
        "An outdated identity and weak digital presence were limiting patient engagement and online bookings.",
      whatWeDid: [
        "Rebranded the clinic with a clean, modern identity",
        "Designed a booking-focused website",
        "Created consistent social visuals and clinic materials",
      ],
      results: [
        "+60% online bookings",
        "5× increase in social engagement",
        "Stronger brand trust and visibility",
      ],
      image: manImg,
    },
    {
      id: 3,
      title: "Saqr Clinics — A Brand Patients Trust",
      description:
        "An outdated identity and weak digital presence were limiting patient engagement and online bookings.",
      whatWeDid: [
        "Rebranded the clinic with a clean, modern identity",
        "Designed a booking-focused website",
        "Created consistent social visuals and clinic materials",
      ],
      results: [
        "+60% online bookings",
        "5× increase in social engagement",
        "Stronger brand trust and visibility",
      ],
      image: manImg,
    },
  ];

  return (
    <section className="container sectionPadding">
      <SectionTitle title="Success Story" />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        autoplay={{ delay: 5000 }}
        speed={1000}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="successStorySwiper"
      >
        {SuccessList.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col lg:flex-row bg-light-gray rounded-xl overflow-hidden max-w-4xl mx-auto">
              <div className="h-auto overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
                <h4 className="font-semibold mb-2">What We Did:</h4>
                <ul className="list-disc pl-5 mb-4">
                  {item.whatWeDid.map((action, idx) => (
                    <li key={idx}>{action}</li>
                  ))}
                </ul>
                <h4 className="font-semibold mb-2">Results:</h4>
                <ul className="list-disc pl-5 mb-4">
                  {item.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SuccessStory;
