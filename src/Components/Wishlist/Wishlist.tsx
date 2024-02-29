import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import TopHeader2 from "../Navigations/TopHeader2";
import "./Wishlist.css";

function Wishlist() {
  return (
    <>
      <div className="header">
        <TopHeader2 />
      </div>

      <div className="wishlist_heading">
        <span>
          <b>My Wishlist</b> 2 items
        </span>
      </div>

      <div className="wishlist_main">
          <div className="wishlist_product">

            <div className="wishlist_image_btn">
              <img src="https://rukminim2.flixcart.com/image/300/300/kwfaj680/shirt/s/0/x/m-khsh000453-ketch-original-imag93v4tnfgunhv.jpeg?q=70" alt=""></img>
              <div className="wishlist_cancel_btn">
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>

            <div className="wishlist_product_price">
              <span
                style={{ fontSize: "16px", color: "black", marginLeft: "10px" }}
              >
                FBAR Typography Printed...
              </span>
              <div className="wishlist_price_product">
                <span style={{ fontSize: "14px", fontWeight: "700" }}>
                  Rs 552{" "}
                </span>
                <del className="mx-1" style={{ fontSize: "14px" }}>
                  Rs.709
                </del>
                <span
                  className="mx-1"
                  style={{ fontSize: "14px", color: "rgb(236 71 90)" }}
                >
                  30% OFF
                </span>
              </div>
            </div>

            <div className="btn_move_to_bag">
              <Link className="btn_mvto_bag_link" to={"/cart"}>
                MOVE TO BAG
              </Link>
            </div>

          </div>
          <div className="wishlist_product">

            <div className="wishlist_image_btn">
              <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shrug/o/k/y/xxl-dbsg00001051-deebaco-original-imagv3uhz5bdnnm5.jpeg?q=70" alt=""></img>
              <div className="wishlist_cancel_btn">
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>

            <div className="wishlist_product_price">
              <span
                style={{ fontSize: "16px", color: "black", marginLeft: "10px" }}
              >
                FBAR Typography Printed...
              </span>
              <div className="wishlist_price_product">
                <span style={{ fontSize: "14px", fontWeight: "700" }}>
                  Rs 552{" "}
                </span>
                <del className="mx-1" style={{ fontSize: "14px" }}>
                  Rs.709
                </del>
                <span
                  className="mx-1"
                  style={{ fontSize: "14px", color: "rgb(236 71 90)" }}
                >
                  30% OFF
                </span>
              </div>
            </div>

            <div className="btn_move_to_bag">
              <Link className="btn_mvto_bag_link" to={"/cart"}>
                MOVE TO BAG
              </Link>
            </div>

          </div>
          <div className="wishlist_product">

            <div className="wishlist_image_btn">
              <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/o/6/h/3xl-wl051-rose-unemode-original-imagsx53sv3drytm.jpeg?q=70" alt=""></img>
              <div className="wishlist_cancel_btn">
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>

            <div className="wishlist_product_price">
              <span
                style={{ fontSize: "16px", color: "black", marginLeft: "10px" }}
              >
                FBAR Typography Printed...
              </span>
              <div className="wishlist_price_product">
                <span style={{ fontSize: "14px", fontWeight: "700" }}>
                  Rs 552{" "}
                </span>
                <del className="mx-1" style={{ fontSize: "14px" }}>
                  Rs.709
                </del>
                <span
                  className="mx-1"
                  style={{ fontSize: "14px", color: "rgb(236 71 90)" }}
                >
                  30% OFF
                </span>
              </div>
            </div>

            <div className="btn_move_to_bag">
              <Link className="btn_mvto_bag_link" to="/cartdetails">
                MOVE TO BAG
              </Link>
            </div>

          </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Wishlist;
