import { useInView } from "framer-motion";
import { useRef } from "react";
import guideImage1 from "../assets/image/destination 3.jpg";
import guideImage2 from "../assets/image/caribbean-beach.jpg";
import guideImage3 from "../assets/image/great-barrier-reef.jpg";
import dreamDestinationImage from "../assets/image/desert-dunes.jpg";
import freeToExploreImage from "../assets/image/grand-canyon.jpg";
import SliderDefault from "@/components/ui/Carousel/SliderDefault";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  const refGuideText = useRef(null);
  const refSecondSection = useRef(null);
  const refThirdSection = useRef(null);
  const isInViewGuide = useInView(refGuideText, { once: true });
  const isInViewSecondSection = useInView(refSecondSection, { once: true });
  const isInViewThirdSection = useInView(refThirdSection, { once: true });

  const guideImageList = [guideImage1, guideImage2, guideImage3];

  const varianstAnimationText = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "spring", stiffness: 100, delay: 0.8 },
    },
  };

  const varianstAnimationImage = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "spring", stiffness: 100, delay: 0.8 },
    },
  };

  return (
    <>
      <section
        className="w-full h-fit pt-20 px-4 md:px-10 lg:px-28"
        id="about-us"
      >
        <section>
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
              Start your next adventure today! Wanderlust Archive helps you
              uncover hidden gems and extraordinary destinations around the
              world. Whether you’re seeking serene escapes or thrilling
              journeys, we guide you to the places where unforgettable
              experiences await.
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

        {/* TODO: Style this until it responsive */}
        <section
          className="pt-16 md:pt-24 flex flex-col xl:flex-row justify-center gap-4 xl:gap-40"
          ref={refSecondSection}
        >
          <motion.div
            initial="hidden"
            animate={isInViewSecondSection && "visible"}
            variants={varianstAnimationText}
          >
            <h1 className="text-orange-500 text-xl md:text-3xl font-medium">
              Find your dream destination
            </h1>
            <p className="text-sm md:text-lg xl:max-w-5xl text-justify ">
              invites you to explore a world of endless possibilities, where the
              perfect getaway is just waiting to be discovered. Whether you're
              seeking tranquil beaches, vibrant cities, or untamed wilderness,
              our platform offers a curated selection of the most captivating
              destinations. Let your imagination soar as you browse through
              stunning visuals and detailed descriptions, guiding you toward the
              travel experience of a lifetime. Discover the places that resonate
              with your dreams and start planning your next unforgettable
              adventure.
            </p>
          </motion.div>
          <motion.img
            initial="hidden"
            animate={isInViewSecondSection && "visible"}
            variants={varianstAnimationImage}
            src={dreamDestinationImage}
            alt="Dessert Dunes"
            className="rounded pt-4 md:pt-0 xl:w-[40%] object-cover"
          />
        </section>

        <section
          className="pt-16 md:pt-24 flex flex-col xl:flex-row-reverse justify-center gap-4 xl:gap-32"
          ref={refThirdSection}
        >
          <motion.div
            initial="hidden"
            animate={isInViewThirdSection && "visible"}
            variants={varianstAnimationText}
          >
            <h1 className="text-orange-500 text-xl md:text-3xl font-medium text-end">
              Free to Explore
            </h1>
            <p className="text-sm md:text-lg xl:max-w-5xl text-justify ">
              Wanderlust Archive is an exclusive platform designed for those who
              dream of exploring the world’s most captivating destinations. Our
              collection spans a wide array of breathtaking locations, from
              hidden natural wonders to iconic travel hotspots. Users can
              immerse themselves in the beauty of these destinations through
              carefully curated visuals and detailed descriptions that transport
              them to the heart of each place. Wanderlust Archive is crafted to
              ignite the spirit of adventure, offering inspiration and a window
              into the possibilities of travel. Whether you're dreaming of a
              remote island getaway or an epic mountain expedition, the journey
              begins here as you explore the world's most alluring places.
            </p>
          </motion.div>
          <motion.img
            initial="hidden"
            animate={isInViewThirdSection && "visible"}
            variants={varianstAnimationImage}
            src={freeToExploreImage}
            alt="Grand Canyon"
            className="rounded pt-4 md:pt-0 xl:w-[40%] object-cover"
          />
        </section>
      </section>
    </>
  );
};

export default AboutUsSection;
