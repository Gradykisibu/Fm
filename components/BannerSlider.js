import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const BannerSlider = () => {
  return (
  
    <div style={{width:'100%'}}>
      {/* <Carousel
        axis="vertical"
        autoPlay={true}
        centerMode={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={3000}
        style={{
          position: "relative",
          zIndex: 1,
        }}
        showArrows={false}
        showIndicators={false}
        stopOnHover={false}
      > */}

        <video width="100%" height="100%" muted autoPlay loop>
              <source src="New AFM Website Banner (video-converter.com).mp4" type="video/mp4"/>
        </video>
        
        {/* <div
          style={{width: "100%"}}
        >
          <img
            src={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src="./img/Banner 2.png"
            alt="active fm banner image"
          />
        </div> */}

        {/* <div
          style={{width: "100%"}}
        >
          <img
            src={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src="./img/Banner 3.png"
            alt="active fm banner image"
          />
        </div> */}
      {/* </Carousel> */}
    </div>
  );
};

export default BannerSlider;
