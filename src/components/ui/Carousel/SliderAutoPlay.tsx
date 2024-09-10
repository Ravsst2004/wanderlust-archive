import { ReactNode } from "react";
import Slider from "react-slick";

type SliderProps = {
  children: ReactNode;
};

const SliderAutoPlay: React.FC<SliderProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SliderAutoPlay;
