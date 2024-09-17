import { useEffect, useRef, useState } from "react";
import destinationsData from "../../data/destination.json";
import Layout from "../layouts/Layout";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

type Destination = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const DetailDestination = () => {
  const lastPathId = window.location.pathname.split("/").pop();
  const destinationId: number = parseInt(lastPathId!);
  const [destination, setDestination] = useState<Destination | null>(null);
  const [newDestinationData, setNewDestinationData] = useState<Destination[]>(
    []
  );
  const refDestination = useRef(null);
  const navigate = useNavigate();

  const handleNavigate = (destinationId: number) => {
    navigate(`/destinations/${destinationId}`);
  };

  useEffect(() => {
    const destinationIdNumber = destinationId;
    const destination: Destination | undefined = destinationsData.find(
      (des) => des.id === destinationIdNumber
    );

    setDestination(destination ? destination : null);

    setNewDestinationData(
      destinationsData.filter((des) => des.id !== destinationIdNumber)
    );
  }, [destinationId]);

  if (destination === null) {
    return <Error title="Destination Not Found" backText="Back to home" />;
  }

  return (
    <Layout>
      <section className="max-w-7xl mx-auto mt-20" ref={refDestination}>
        <div className="flex flex-col justify-center items-center md:items-start md:flex-row gap-6 py-6 px-4">
          <motion.div
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="md:w-[70%] gap-4"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="rounded-md"
            />
            <h1 className="my-2 font-semibold text-2xl text-start">
              {destination.name}
            </h1>
            <p className="text-justify">{destination.description}</p>
          </motion.div>

          <div className="md:w-[30%] grid grid-cols-2 md:grid-cols-1 gap-6">
            {newDestinationData.slice(0, 6).map((destination, index) => (
              <div
                key={destination.id}
                onClick={() => handleNavigate(destination.id)}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 200 : -200 }}
                  animate={{
                    opacity: 1,
                    x: index % 2 === 1 ? 0 : 0,
                  }}
                  transition={{ duration: 1 }}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0" />
                  <h1
                    className={`absolute text-sm sm:text-lg xl:text-2xl inset-0 flex items-center justify-center text-white font-bold group-hover:scale-0 transition-transform ease-in duration-200`}
                  >
                    {destination.name}
                  </h1>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="rounded-lg cursor-pointer"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DetailDestination;
