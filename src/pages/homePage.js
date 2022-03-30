import Layout from "../layout/layout";
import "./slider.css";
import Categories from "../components/categories/categoriesComponent";
import Slider from "../components/slider/sliderComponent";
import SliderBag from "../components/SliderBag/SliderBag";
import SliderWatch from "../components/SliderWatch/SliderWatch";
import SliderShoes from "../components/SliderShoes/SliderShoes";
import styles from "./homePage.module.css";
import banner5 from "../assets/images/bannerImages/banner5.jpeg";
import banner3 from "../assets/images/bannerImages/banner3.jpg";
const HomePage = () => {
  return (
    <Layout>
      <Slider />
      <Categories />
      <SliderWatch />
      <img src={banner5} className={styles.customeContainer} alt="watch" />
      <SliderShoes />
      <img
        src={banner3}
        className={styles.customeContainer}
        alt="new collection"
      />
      <SliderBag />
    </Layout>
  );
};

export default HomePage;
