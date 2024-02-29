import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import { useState } from "react";
import CustomePopUps from "../Popups/CustomePopUps";

function CartDetails() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    if (showMore === false) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  const handlePlaceOrder = () =>{
    navigate("/addressverification");
  }
  return (
    <>
      <div className="cart_header">
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="https://raw.githubusercontent.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/main/Project%20Myntra%20Clone/images/myntra_logo.webp"
              alt="not found"
            ></img>
          </Link>
        </div>
        <div className="cart_address_stepper">
          <div className="car_bag">
            <span>B A G</span>
          </div>
          <div className="cart_dot mx-1">---------- </div>
          <div className="mx-1"> A D D R E S S</div>
          <div className="mx-1">---------- </div>
          <div className="mx-1"> P A Y M E N T</div>
        </div>
        <div className="cart_auth_sec">
          <img
            className="cart_sec_image"
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            alt=""
          ></img>
          <span>1 0 0 % S E C U R E</span>
        </div>
      </div>

      <div className="cart_summry">
        <div className="cart_deatils_desc">
          <div className="check_pin_code">
            <span style={{ marginLeft: "15px" }}>
              Check delivery time & services
            </span>

            <button className="btn default check_pin_btn">
              ENTER PIN CODE
            </button>
          </div>

          <div className="avail_offers"
          style={showMore ? {height:"300px"}: {height:"108px"}}

          >
            <span className="avail_offers_tag">Available Offers</span>
            <ul className="avail_0ffers_list">
              {showMore === false ? (
                <li style={{ marginLeft: "15px" }}>
                  10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                  cards on min spend of 2.500, TCA.
                </li>
              ) : (
                <ul>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                </ul>
              )}
            </ul>
            <button
              className="btn default show_more_btn"
              onClick={() => handleShowMore()}
            >
              {showMore === false ? "Show More" : "Show Less"}
            </button>
          </div>

          <div className="remove_wishlist_btn">
            <div className="checkbox" style={{ display: "block" }}>
              <label className="unselectable">
                <input className="chkAlreadyDelivered" type="checkbox" /> 1/1
                ITEM SELECTED
              </label>
            </div>
            <Link className="btn btn_remove" to={""}>
              REMOVE
            </Link>
            <Link className="btn btn_move_to_wishlist" to={""}>
              MOVE TO WISHLIST
            </Link>
          </div>

          <div className="cart_product_card">
            <div>
              {" "}
              <Link to=''>
                <img
                  className="cart_product_img"
                  src="https://rukminim2.flixcart.com/image/300/300/ku2zjww0/sweatshirt/f/k/s/xl-30689-wildcraft-original-imag7a3fyk8cy6fr.jpeg?q=70"
                  alt="no image"
                ></img>
              </Link>
            </div>
            <div className="cart_product_details_priceing">
              <span style={{ fontSize: "14px", fontWeight: 700 }}>FBAR</span>
              <span style={{ fontSize: "13px", color: "gray" }}>
                Typography Printed Pure cotton Slim Fit T-shirt
              </span>
              <span style={{ fontSize: "12px", color: "#ccc" }}>
                Sold by: FBAR
              </span>
              <div className="size_qty">
                <Link className="size_qty_pop" to={""}>
                  Size:XS
                </Link>
                <Link className="size_qty_pop" to={""}>
                  Qty:1
                </Link>
              </div>
              <div className="cart_price_product">
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
              <div className="coupon_return">
                <span className="discount_coupon_success">
                  Coupon Discoutn Rs56
                </span>
                <span className="fourteen_day_return">
                  <b>14 days</b> return available
                </span>
              </div>
            </div>
            <div className="cart_cancel_btn">
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>
          <div className="see_exis_item">
            <span style={{ marginLeft: "15px" }}>
              Login to see existing items from your bag and wishlist.
            </span>

            <Link to="/login" className="btn default cart_product_login_btn">
              LOGIN NOW
            </Link>
          </div>
        </div>

        <div className="cart_total_summary">
          <div className="check_coupon">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "21px", marginTop: "48px" }}
            >
              sell
            </span>
            <div className="coupon_applied">
              <span className="coupon_count">1 Coupon applied</span>
              <span className="coupon_saved_rs">
                You saved additional Rs. 54
              </span>
            </div>

            <button className="btn default coupon_edit_btn">EDIT</button>
          </div>
          <hr style={{ border: "1px solid #ccc" }} />

          <div className="product_summary_cart">
            <div className="price_details">PRICE DETAILS (1 Item)</div>
            <div className="total_mrp">
              <span>Total MRP</span>
              <span style={{ marginLeft: "248px" }}>Rs. 789</span>
            </div>
            <div className="discount_on_mrp">
              <span>
                Discount on MRP{" "}
                <Link to='' className="know_more_mrp_discount">
                  Know More
                </Link>
              </span>
              <span style={{ marginLeft: "131px", color: "#04966a" }}>
                -Rs. 237
              </span>
            </div>
            <div className="coupon_discount_rs">
              <span>Coupon Discount</span>
              <span
                className="material-symbols-outlined"
                style={{ color: "lightgray" }}
              >
                report
              </span>
              <span style={{ marginLeft: "191px", color: "#04966a" }}>
                -Rs.56
              </span>
            </div>
            <div className="platform_fee">
              <span>
                Plateform Fee{" "}
                <Link to='' className="know_more_platform_fee">
                  Know More
                </Link>
              </span>
              <span style={{ marginLeft: "166px", color: "#04966a" }}>
                FREE
              </span>
            </div>
            <div className="shippin_fee">
              <span>
                Shipping Fee{" "}
                <Link to='' className="know_more_shipping_fee">
                  Know More
                </Link>
              </span>
              <span style={{ marginLeft: "140px", color: "#04966a" }}>
                <del>Rs.79</del> FREE
              </span>
            </div>
            <hr style={{ border: "1px solid #ccc" }} />

            <div className="product_cart_total">
              <span>Total Amount </span>
              <span style={{ marginLeft: "200px", color: "black" }}>
                Rs.496
              </span>
            </div>
            <button className="place_order_btn" onClick={()=> handlePlaceOrder()}>PLACE ORDER</button>
          </div>
        </div>
      </div>
      <hr />

      <div className="mayment_method">
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"
          alt=""
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
          alt=""
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
          alt=""
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
          alt=""
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"
          alt=""
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"
          alt=""
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"
          alt=""
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
          alt=""
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png"
          alt=""
        ></img>
        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" alt=""
        ></img>
      </div>
    </>
  );
}

export default CartDetails;
