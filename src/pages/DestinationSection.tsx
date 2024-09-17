import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import destinationsData from "../data/destination.json";
import SliderAutoPlay from "@/components/ui/Carousel/SliderAutoPlay";
import bgFourthSectionImage from "../../public/image/bg-fourth-section.jpg";

const DestinationSection = () => {
  const refDestination = useRef(null);
  const refAchiveNumber = useRef(null);
  const refBestRecommendation = useRef(null);
  const isInViewDestination = useInView(refDestination, { once: true });
  const isInView = useInView(refAchiveNumber, { once: true });
  const isInViewRecommendation = useInView(refBestRecommendation, {
    once: true,
  });

  const achiveNumber = [
    { number: 60, name: "Destinations" },
    { number: 42, name: "Countries" },
    { number: 32, name: "Happy Travelers" },
    { number: 23, name: "Guides" },
  ];

  const shuffledDestinations = destinationsData
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);

  const bestRecommendations = shuffledDestinations.slice(0, 6);

  return (
    <>
      <section id="destination" className="pt-40 px-4 md:px-10 lg:px-28" ref={refDestination}>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{
            opacity: isInViewDestination ? 1 : 0,
            y: isInViewDestination ? 0 : 200,
          }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="flex flex-col justify-center items-center text-center gap-2"
        >
          <h1 className="text-xl md:text-2xl  font-light tracking-[0.5rem] text-orange-600">
            for you
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            a magical destinations
          </h2>
          <hr className="w-1/3 h-[0.1rem] bg-gradient-to-r my-2 from-orange-600 to-black" />{" "}
          <p className="md:text-lg xl:max-w-5xl opacity-80">
            Step into a world where dreams come true. From enchanting landscapes
            to hidden paradises, explore places that captivate your imagination
            and leave you in awe. Whether it's a peaceful retreat or a bustling
            city filled with wonders, each destination offers a touch of magic
            waiting to be experienced.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
          {destinationsData.map((destination, index) => {
            return (
              <Link to={`/destinations/${destination.id}`} key={destination.id}>
                <motion.div
                  initial={{ opacity: 0, y: index % 2 === 1 ? 200 : -200 }}
                  animate={{
                    opacity: 1,
                    y: isInViewDestination ? 0 : index % 2 === 1 ? 200 : -200,
                  }}
                  transition={{ duration: 1.5 }}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black opacity-0 md:opacity-30 group-hover:opacity-0" />
                  <h1
                    className={`hidden md:absolute text-lg md:text-2xl inset-0 md:flex items-center justify-center text-white  font-bold group-hover:scale-0 transition-transform ease-in duration-200`}
                  >
                    {destination.name}
                  </h1>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="rounded-lg cursor-pointer"
                  />
                  <Button className="w-full md:hidden text-lg mt-2 sm:text-xl">
                    View Details
                  </Button>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="pt-40 mb-[60rem] md:mb-[50rem]">
        <div className="relative">
          <div
            className="absolute w-full min-h-fit bg-cover bg-no-repeat bg-center flex items-center justify-center pb-32"
            style={{
              backgroundImage: `url('${bgFourthSectionImage}')`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-65 rounded-md "></div>
            <div
              className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-32 py-24"
              ref={refAchiveNumber}
            >
              {achiveNumber.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      x: isInView ? 0 : index % 2 === 0 ? 100 : -100,
                    }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-col justify-center items-center cursor-default"
                  >
                    <h1 className="text-5xl text-white font-medium">
                      +{item.number}K
                    </h1>
                    <p className="text-xl text-white font-medium">
                      {item.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div
            ref={refBestRecommendation}
            className="absolute w-full mt-[33rem] md:mt-[11rem]"
          >
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{
                opacity: isInViewRecommendation ? 1 : 0,
                y: isInViewRecommendation ? 0 : 200,
              }}
              transition={{ duration: 1 }}
              className="flex flex-col justify-center items-center text-center gap-2 mt-10"
            >
              <h1 className="text-2xl md:text-2xl font-semibold tracking-[0.5rem] text-orange-600">
                our best
              </h1>
              <h2 className="text-4xl md:text-3xl lg:text-4xl text-white font-semibold">
                recommendations
              </h2>
              <hr className="w-1/3 h-[0.1rem] bg-gradient-to-r my-2 from-orange-600 to-black" />
            </motion.div>

            {/* TODO: Style this until it responsive */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{
                opacity: isInViewRecommendation ? 1 : 0,
                y: isInViewRecommendation ? 0 : 200,
              }}
              transition={{ duration: 1 }}
              className="lg:hidden"
            >
              <div className="overflow-hidden">
                <SliderAutoPlay>
                  {bestRecommendations.map((destination) => {
                    return (
                      <div
                        key={destination.id}
                        className="flex flex-col items-center justify-center my-4 px-2"
                      >
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-[90%] md:w-[80%] mx-auto rounded-md cursor-pointer"
                        />

                        <Link to={`/destinations/${destination.id}`}>
                          <p className="w-[90%] md:w-[80%] mx-auto text-lg text-center font-medium bg-slate-400 hover:bg-orange-600 hover:text-white transition-colors ease-linear duration-200 p-2 mt-2 rounded-md">
                            {destination.name}
                          </p>
                        </Link>
                      </div>
                    );
                  })}
                </SliderAutoPlay>
              </div>
            </motion.div>

            <div className="hidden lg:flex">
              <div className="overflow-hidden">
                <SliderAutoPlay slidesToShow={3}>
                  {bestRecommendations.map((destination) => {
                    return (
                      <div
                        key={destination.id}
                        className="flex flex-col items-center justify-center my-4"
                      >
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-[90%] md:w-[80%] mx-auto rounded-md cursor-pointer"
                        />

                        <Link to={`/destinations/${destination.id}`}>
                          <p className="w-[90%] md:w-[80%] mx-auto text-lg text-center font-medium bg-slate-400 hover:bg-orange-600 hover:text-white transition-colors ease-linear duration-200 p-2 mt-2 rounded-md">
                            {destination.name}
                          </p>
                        </Link>
                      </div>
                    );
                  })}
                </SliderAutoPlay>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationSection;
