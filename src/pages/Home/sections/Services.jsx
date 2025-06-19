import SectionTitle from "../../../components/common/SectionTitle";
import servicesImg1 from "../../../assets/images/solutions-img1.jpg";
import servicesImg2 from "../../../assets/images/solutions-img2.jpg";
import servicesImg3 from "../../../assets/images/solutions-img3.jpg";
import servicesImg4 from "../../../assets/images/solutions-img4.jpg";
import servicesImg5 from "../../../assets/images/solutions-img5.jpg";
import servicesImg6 from "../../../assets/images/solutions-img6.jpg";

const Services = () => {
  return (
    <section className="container sectionPadding">
      <SectionTitle title={"Solutions We Offer"} />

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="group relative rounded-4xl overflow-hidden sm:col-span-2">
            <img
              src={servicesImg1}
              className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            />

            <div
              className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
            translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">Documentaries</h3>
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                Visuals that boost engagement and grow your presence
              </p>
            </div>
          </div>
          <div className="group relative rounded-4xl overflow-hidden">
            <img
              src={servicesImg2}
              className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            />

            <div
              className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
            translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">Documentaries</h3>
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                Visuals that boost engagement and grow your presence
              </p>
            </div>
          </div>
          <div className="group relative rounded-4xl overflow-hidden">
            <img
              src={servicesImg3}
              className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            />

            <div
              className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
            translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">Documentaries</h3>
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                Visuals that boost engagement and grow your presence
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="group relative rounded-4xl overflow-hidden">
            <img
              src={servicesImg6}
              className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            />

            <div
              className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
            translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">Documentaries</h3>
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                Visuals that boost engagement and grow your presence
              </p>
            </div>
          </div>
          <div className="group relative rounded-4xl overflow-hidden">
            <img
              src={servicesImg5}
              className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            />

            <div
              className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
            translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">Documentaries</h3>
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                Visuals that boost engagement and grow your presence
              </p>
            </div>
          </div>
          <div className="group relative rounded-4xl overflow-hidden sm:col-span-2">
            <img
              src={servicesImg4}
              className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            />

            <div
              className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
            translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">Documentaries</h3>
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                Visuals that boost engagement and grow your presence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
