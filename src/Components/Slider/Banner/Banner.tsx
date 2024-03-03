// import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { useGetPromotionDetailsQuery } from "../../../Apis/prmotionApi";
import "./Banner.css";
import MainLoader from "../../Loader/MainLoader";
function Banner() {
  const { data, isLoading } = useGetPromotionDetailsQuery("");
  return (
    <>
      {!isLoading ? (
        data.map((item: any, index: number) =>
          (item.promotionType === "Banner") ? (
            <div className="banner_container" key={index}>
              <Link to="/catalogs">
                <img
                  className="d-block w-100"
                  src={item.promotionImage}
                  alt="First slide"
                />
              </Link>
            </div>
          ) : (
            ""
          )
        )
      ) : (
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <MainLoader />
        </div>
      )}

      {/* <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>       */}
    </>
  );
}

export default Banner;
