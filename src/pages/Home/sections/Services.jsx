import SectionTitle from "../../../components/common/SectionTitle";
import { useEffect } from "react";
import { getSolutions } from "../../../store/solutions/solutionsAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/layout/Loading/Loading";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  const { solutions, loading } = useSelector((state) => state.solutions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSolutions());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section id="Services" className="container sectionPadding">
      <SectionTitle title={"Solutions We Offer"} />

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="group relative rounded-4xl overflow-hidden sm:col-span-2">
            <img
              src={solutions[0]?.image_url}
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
              src={solutions[1]?.image_url}
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
              src={solutions[2]?.image_url}
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
              src={solutions[3]?.image_url}
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
              src={solutions[4]?.image_url}
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
              src={solutions[5]?.image_url}
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

      <a
        href="#"
        className="flex items-center gap-1 w-max mx-auto mt-6 font-semibold text-light-red hover:underline"
      >
        Learn More <GoArrowUpRight className="text-3xl" />
      </a>
    </section>
  );
};

export default Services;
