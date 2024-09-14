import Layout from "../components/layouts/Layout";
import destinationHomeImage from "../assets/image/mountain-rill.jpg";
import guideImage1 from "../assets/image/destination 3.jpg";
import guideImage2 from "../assets/image/caribbean-beach.jpg";
import guideImage3 from "../assets/image/great-barrier-reef.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SliderDefault from "@/components/ui/Carousel/SliderDefault";
import destinationsData from "../data/destination.json";
import { Link } from "react-router-dom";
import bgFourthSectionImage from "../assets/image/bg-fourth-section.jpg";
import SliderAutoPlay from "@/components/ui/Carousel/SliderAutoPlay";

const Home = () => {
  return (
    <Layout>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Layout>
  );
};

const FirstSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('${destinationHomeImage}')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-35"></div>
      <div className="absolute z-0 flex flex-col items-center text-center text-white text-opacity-80 p-2 ">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [0, -10, 10, -10, 10, 0] }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="text-2xl md:text-3xl font-medium  uppercase"
        >
          Wanderlust Archive
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [0, 10, -10, 10, -10, 0] }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold py-6 uppercase"
        >
          Find your next adventure
        </motion.h1>

        <motion.p
          initial={{ x: -700 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:text-lg xl:max-w-5xl"
        >
          Wanderlust Archive is your gateway to exploring the beauty of the
          world and discovering stunning destinations. From iconic landmarks to
          hidden gems, find inspiration for your next adventure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Button className="mt-6 p-6 text-2xl cursor-pointer uppercase opacity-70 hover:opacity-100">
            Find Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const SecondSection = () => {
  const refGuideText = useRef(null);
  const isInViewGuide = useInView(refGuideText, { once: true });

  const guideImageList = [guideImage1, guideImage2, guideImage3];

  return (
    <section className="w-full h-fit py-20 px-4 md:px-10 lg:px-28">
      <motion.div
        ref={refGuideText}
        initial={{ opacity: 0, y: 200 }}
        animate={{
          opacity: isInViewGuide ? 1 : 0,
          y: isInViewGuide ? 0 : 200,
        }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center text-center gap-2"
      >
        <h1 className="text-xl md:text-2xl  font-light tracking-[0.5rem] text-orange-600">
          we are
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl">
          a guide to magical places
        </h2>
        <hr className="w-1/3 h-[0.1rem] bg-gradient-to-r my-2 from-orange-600 to-black" />
        <p className="md:text-lg xl:max-w-5xl opacity-80">
          Start your next adventure today! Wanderlust Archive helps you uncover
          hidden gems and extraordinary destinations around the world. Whether
          you’re seeking serene escapes or thrilling journeys, we guide you to
          the places where unforgettable experiences await.
        </p>
      </motion.div>

      <div className="overflow-hidden">
        <SliderDefault>
          {guideImageList.map((image, index) => (
            <div
              key={index}
              aria-hidden
              className="relative flex items-center justify-center mt-6 active:border-none"
            >
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: isInViewGuide ? 0 : -300 }}
                transition={{ duration: 1.5 }}
                className="absolute w-[90%] md:w-[80%] lg:w-[70%] mx-auto inset-0 -z-10 bg-cover bg-center scale-110 rounded-md opacity-25"
                style={{ backgroundImage: `url('${image}')` }}
              />
              <motion.img
                initial={{ x: 300 }}
                animate={{ x: isInViewGuide ? 0 : 300 }}
                transition={{ duration: 1.5 }}
                src={image}
                alt="Destination"
                className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto rounded-md cursor-pointer"
              />
            </div>
          ))}
        </SliderDefault>
      </div>
    </section>
  );
};

const ThirdSection = () => {
  const refDestination = useRef(null);
  const isInViewDestination = useInView(refDestination, { once: true });

  return (
    <section className="px-4 md:px-10 lg:px-28" ref={refDestination}>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{
          opacity: isInViewDestination ? 1 : 0,
          y: isInViewDestination ? 0 : 200,
        }}
        transition={{ duration: 1 }}
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
        {destinationsData.slice(0, 6).map((destination, index) => {
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
      <div className="flex justify-center md:justify-end my-4">
        <Link to={"/destinations"}>
          <Button className="w-full md:w-fit text-lg">View More</Button>
        </Link>
      </div>
    </section>
  );
};

const FourthSection = () => {
  const refAchiveNumber = useRef(null);
  const refBestRecommendation = useRef(null);
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
    <section className="py-20">
      <div className="relative">
        <div
          className="absolute w-full min-h-fit bg-cover bg-no-repeat bg-center flex items-center justify-center pb-32"
          style={{
            backgroundImage: `url('${bgFourthSectionImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-md "></div>
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
                  <p className="text-xl text-white font-medium">{item.name}</p>
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
  );
};

export default Home;
