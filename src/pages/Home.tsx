import Layout from "../components/layouts/Layout";
import destinationHomeImage from "../../public/image/mountain-rill.jpg";
import blogImage1 from "../../public/image/great-barrier-reef.jpg";
import blogImage2 from "../../public/image/great-barrier-reef.jpg";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import AboutUsSection from "./AboutUsSection";
import DestinationSection from "./DestinationSection";
import { GoComment } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import SliderDefault from "@/components/ui/Carousel/SliderDefault";
import { useRef } from "react";

const Home = () => {
  const refGuideBook = useRef(null);
  const refBlogPosts = useRef(null);
  const inViewGuideBook = useInView(refGuideBook, { once: true });
  const inViewBlogPosts = useInView(refBlogPosts, { once: true });

  const blogContent = [
    {
      id: 1,
      title: "Most favorite destination",
      description:
        "The blogs about destination will help your future adventure",
      image: blogImage1,
      comment: 20,
      love: 300,
    },
    {
      id: 2,
      title: "Latest destination to visit on december",
      description:
        "Latest destination to visit on december. The blogs about destination will help your future adventure",
      image: blogImage2,
      comment: 23,
      love: 340,
    },
  ];

  return (
    <Layout>
      <section
        id="home"
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
            world and discovering stunning destinations. From iconic landmarks
            to hidden gems, find inspiration for your next adventure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Link to="/destinations">
              <Button className="mt-6 p-6 text-2xl cursor-pointer uppercase opacity-70 hover:opacity-100">
                Find Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <AboutUsSection />

      <DestinationSection />

      <section ref={refGuideBook}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inViewGuideBook ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-20 pt-20 sm:pt-56 md:pt-0 px-4 md:px-10 lg:px-28 xl:max-w-7xl mx-auto"
        >
          <h1 className="text-justify">
            Get a personalized travel guide for your next adventure! Simply send
            us your email, and we'll deliver expert tips and recommendations
            tailored to your dream destinations.
          </h1>
          <div className="flex justify-center items-center gap-2 w-full h-20 p-4 border-2 rounded-xl">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border-2 h-full rounded-lg p-2"
            />
            <Button className="bg-orange-500 text-white font-bold h-full">
              Send
            </Button>
          </div>
        </motion.div>
      </section>

      <motion.section
        ref={refBlogPosts}
        initial={{ opacity: 0, y: 200 }}
        animate={{
          opacity: inViewBlogPosts ? 1 : 0,
          y: inViewBlogPosts ? 0 : 200,
        }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="py-20"
      >
        <div className="overflow-hidden lg:hidden">
          <SliderDefault>
            {blogContent.map((blog) => {
              return (
                <div
                  key={blog.id}
                  className="px-10 md:px-20 lg:px-28 cursor-pointer"
                >
                  <img
                    src={blog.image}
                    alt="Caribbean Beach"
                    className="rounded-lg"
                  />
                  <div className="p-6">
                    <h1 className="text-xl md:text-2xl font-medium">
                      {blog.title}
                    </h1>
                    <p className="py-1 md:text-lg">{blog.description}</p>
                    <div className="flex gap-x-2">
                      <p className="flex justify-center items-center gap-1">
                        <GoComment />
                        <span>{blog.comment}</span>
                      </p>
                      <p className="flex justify-center items-center gap-1">
                        <FaRegHeart />
                        <span>{blog.love}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </SliderDefault>
        </div>

        <div className="hidden lg:flex gap-10 px-32">
          {blogContent.map((blog) => {
            return (
              <div key={blog.id} className="cursor-pointer">
                <img
                  src={blog.image}
                  alt="Caribbean Beach"
                  className="rounded-lg"
                />
                <div className="p-6">
                  <h1 className="text-xl md:text-2xl font-medium">
                    {blog.title}
                  </h1>
                  <p className="py-1 md:text-lg">{blog.description}</p>
                  <div className="flex gap-x-2">
                    <p className="flex justify-center items-center gap-1">
                      <GoComment />
                      <span>{blog.comment}</span>
                    </p>
                    <p className="flex justify-center items-center gap-1">
                      <FaRegHeart />
                      <span>{blog.love}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>
    </Layout>
  );
};

export default Home;
