import { ReactNode } from "react";
import Slider from "react-slick";

type SliderProps = {
  children: ReactNode;
  slidesToShow?: number;
};

const SliderAutoPlay: React.FC<SliderProps> = ({
  children,
  slidesToShow = 1,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SliderAutoPlay;
