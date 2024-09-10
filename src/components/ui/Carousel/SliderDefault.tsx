import { ReactNode } from "react";
import Slider from "react-slick";

type SliderProps = {
  children: ReactNode;
};

const SliderDefault: React.FC<SliderProps> = ({ children }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SliderDefault;
