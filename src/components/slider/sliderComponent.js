import { Link } from "react-router-dom";
import slider1 from "../../assets/images/slide/slide-01.jpg";
import slider2 from "../../assets/images/slide/slide-02.jpg";
import slider3 from "../../assets/images/slide/slide-03.jpg";
const Slider = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 ">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <Link to="#">
                  <img src={slider1} class="d-block w-100" alt="..." />
                </Link>
                <div class="carousel-caption d-none d-md-block carousel-caption-custome text-dark text-left">
                  <h2>Woman Collection</h2>
                  <p>New Season</p>
                  <Link to="/shop">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg rounded-pill px-4 py-2"
                    >
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
              <div class="carousel-item">
                <Link to="#">
                  <img src={slider2} class="d-block w-100" alt="..." />
                </Link>
                <div class="carousel-caption d-none d-md-block carousel-caption-custome text-dark text-left">
                  <h2>Man New-Season</h2>
                  <p>Jackets & Coats</p>
                  <button
                    type="button"
                    class="btn btn-primary btn-lg rounded-pill px-4 py-2"
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <Link to="#">
                  <img src={slider3} class="d-block w-100" alt="..." />
                </Link>
                <div class="carousel-caption d-none d-md-block carousel-caption-custome text-dark text-left">
                  <h2>Man Collection</h2>
                  <p>New Arrivals</p>
                  <button
                    type="button"
                    class="btn btn-primary btn-lg rounded-pill px-4 py-2"
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev bg-transparent border-0"
              type="button"
              data-target="#carouselExampleCaptions"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
            <button
              class="carousel-control-next bg-transparent border-0"
              type="button"
              data-target="#carouselExampleCaptions"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
