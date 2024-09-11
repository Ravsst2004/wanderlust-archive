import Layout from "@/components/layouts/Layout";
import destinationsData from "../data/destination.json";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Destinations = () => {
  const refDestination = useRef(null);
  const isInViewDestination = useInView(refDestination, { once: true });

  return (
    <Layout>
      <section className="px-4 md:px-10 lg:px-28 mt-24">
        {" "}
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6"
          ref={refDestination}
        >
          {destinationsData.map((destination, index) => {
            return (
              <Link to={`/destinations/${destination.id}`} key={destination.id}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 200 : -200 }}
                  animate={{
                    opacity: 1,
                    x: isInViewDestination ? 0 : index % 2 === 1 ? 200 : -200,
                  }}
                  transition={{ duration: 1 }}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0" />
                  <h1
                    className={`absolute inset-0 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-0 transition-transform ease-in duration-200`}
                  >
                    {destination.name}
                  </h1>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="rounded-lg cursor-pointer"
                  />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
