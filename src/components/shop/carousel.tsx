import { Carousel } from "react-bootstrap";
import Image from "next/image";

import SmallSlide1 from "@images/SliderImages/SmallerSliders/bp_b.jpg";
import SmallSlide2 from "@images/SliderImages/SmallerSliders/gp_b.jpg";
import SmallSlide3 from "@images/SliderImages/SmallerSliders/pp_b.jpg";
import SmallSlide4 from "@images/SliderImages/SmallerSliders/rp_b.jpg";

interface CarouselItemProps {
  img: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  alt: string;
}

const CarouselItem = ({ img, title, alt }: CarouselItemProps) => (
  <>
    <Carousel.Item className="item">
      <Image src={img.src} alt={img.alt} />
      <Carousel.Caption className="caption">
        <div className="alt-text">{alt}</div>
        <h1>{title}</h1>
      </Carousel.Caption>
    </Carousel.Item>
  </>
);

export const ShopCarousel = () => {
  return (
    <>
      <Carousel className="carousel" indicators={false} interval={3000}>
        <CarouselItem img={{ src: SmallSlide1, alt: "Blue pill slide" }} title="MyDrugs.to" alt="MyDrugs.to" />

        <Carousel.Item className="item">
          <Image src={SmallSlide2} alt="Green pill slide" />
          <Carousel.Caption className="shopCarouselCaption">
            <h1>10% OFF TODAY</h1>
            <div className="altText">Fast, Secure, Reliable</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <Image src={SmallSlide3} alt="ss" />
          <Carousel.Caption className="shopCarouselCaption">
            <h5>MyDrugs.to</h5>
            <h4>Visit the new clearweb shop!</h4>
            <div className="altText">10% OFF using HTSDOF</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <Image src={SmallSlide4} alt="ss" />
          <Carousel.Caption className="shopCarouselCaption">
            <h2>Fast, Secure, Reliable</h2>
            <div className="altText">A GoodTimes Partner</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
