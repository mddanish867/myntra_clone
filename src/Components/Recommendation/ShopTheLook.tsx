import { useNavigate } from "react-router-dom";
import "./ShopTheLook.css";

function ShopTheLook() {
  const navigate = useNavigate();

  return (
    <>
      <div className="shopthe_look_content">
        <h6 className="shopthe_look_heading">Shop the look</h6>
        <div className="shopthe_look_container col-2">
          <div className="shopthe_look_button">
            <div className="shopthe_look_link">
              <img
                className="shopthe_look_button_img my-2"
                src="https://assets.myntassets.com/assets/images/9951393/2019/8/22/ab398c15-caee-4183-a56d-0666ca58a8211566475032009-Roadster-Men-Shirts-9581566475030373-6.jpg?im=Crop,rect=(497,1253,205,159)"
                alt=""
              />
            </div>
            <div className="shopthe_look_link">
              <img
                className="shopthe_look_button_img my-2"
                src="https://assets.myntassets.com/assets/images/9951393/2019/8/22/ab398c15-caee-4183-a56d-0666ca58a8211566475032009-Roadster-Men-Shirts-9581566475030373-6.jpg?im=Crop,rect=(33,173,475,591)"
                alt=""
              />
            </div>
            <div className="shopthe_look_link">
              <img
                className="shopthe_look_button_img my-2"
                src="https://assets.myntassets.com/assets/images/9951393/2019/8/22/ab398c15-caee-4183-a56d-0666ca58a8211566475032009-Roadster-Men-Shirts-9581566475030373-6.jpg?im=Crop,rect=(130,706,421,619)"
                alt=""
              />
            </div>
          </div>

          <div className="shopthe_look_snapshot col-5">
            <img
              src="https://assets.myntassets.com/assets/images/9951393/2019/8/22/ab398c15-caee-4183-a56d-0666ca58a8211566475032009-Roadster-Men-Shirts-9581566475030373-6.jpg"
              alt=""
            />
          </div>

          <div className="shopthe_product_main col-5">
            <div className="shopthe_products">
              <div className="shopthe_product_view">
                <div
                  className="shopthe_product_img"
                  onClick={() => navigate("/productdetails")}
                >
                  <span className="badge badge-danger"> NEW </span>
                  <img
                    src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/6626889/2019/8/22/c8e94a0a-c18a-4249-b5b6-1376be0c14b51566453960958-Dennis-Lingo-Men-Blue-Slim-Fit-Faded-Casual-Shirt-3211566453-1.jpg"
                    alt=""
                    className="img-fluid caltalog_img"
                  />
                </div>
                <div className="shopthe_product_rating_container">
                  <p className="shopthe_product_rating">
                    4.3{" "}
                    <span className="material-symbols-outlined">star_half</span>
                  </p>
                </div>
                <div className="shopthe_product_name">
                  <h6>Roadster</h6>
                  <p>Mens Slim Tapered slim Tshirt</p>
                </div>
                <div
                  className="shopthe_product_price"
                  onClick={() => navigate("/productdetails")}
                >
                  <span
                    className="price"
                    style={{ fontWeight: 700, fontSize: "13px" }}
                  >
                    Rs. 1280
                  </span>
                  <del className="text-muted" style={{ fontSize: "13px" }}>
                    Rs.1980
                  </del>
                  <span
                    className="price mx-2"
                    style={{
                      fontWeight: 400,
                      fontSize: "13px",
                      color: "#f58742",
                    }}
                  >
                    (69% OFF)
                  </span>
                </div>
              </div>
            </div>
            <div className="shopthe_products">
              <div className="shopthe_product_view">
                <div
                  className="shopthe_product_img"
                  onClick={() => navigate("/productdetails")}
                >
                  <span className="badge badge-danger"> NEW </span>
                  <img
                    src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/15615816/2021/10/12/2a0b9fb4-d4d7-4a2b-8006-2e5e53063ef91634037360410-Roadster-Men-Shirts-8761634037360001-1.jpg"
                    alt=""
                    className="img-fluid caltalog_img"
                  />
                </div>
                <div className="shopthe_product_rating_container">
                  <p className="shopthe_product_rating">
                    4.3{" "}
                    <span className="material-symbols-outlined">star_half</span>
                  </p>
                </div>
                <div className="shopthe_product_name">
                  <h6>Roadster</h6>
                  <p>Mens Slim Tapered slim Tshirt</p>
                </div>
                <div
                  className="shopthe_product_price"
                  onClick={() => navigate("/productdetails")}
                >
                  <span
                    className="price"
                    style={{ fontWeight: 700, fontSize: "13px" }}
                  >
                    Rs. 1280
                  </span>
                  <del className="text-muted" style={{ fontSize: "13px" }}>
                    Rs.1980
                  </del>
                  <span
                    className="price mx-2"
                    style={{
                      fontWeight: 400,
                      fontSize: "13px",
                      color: "#f58742",
                    }}
                  >
                    (69% OFF)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopTheLook;
