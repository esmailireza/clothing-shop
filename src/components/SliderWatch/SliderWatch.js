import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./SliderWatch.module.css";
import * as data from "../../data";
import CardWatch from "./CardWatch";

const SliderWatch = () => {
  const filterProducts = data.products.filter((p) => p.type === "watch");
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="container-fluid bg-light pt-4 pb-4 my-5">
      <div className={styles.customeTitleContainer}>
        <h3 className={`text-left font-weight-bolder ${styles.fontSizeTitle}`}>
          watches
        </h3>
        <div className={styles.borderBottomTitle}></div>
      </div>
      <Carousel
        responsive={responsive}
        className={`${styles.customeContainer} card-deck`}
      >
        {filterProducts.map((product) => {
          return <CardWatch product={product} />;
        })}
      </Carousel>
    </div>
  );
};

export default SliderWatch;
