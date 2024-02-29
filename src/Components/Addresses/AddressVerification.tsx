import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddressVerification.css";
import CustomePopUps from "../Popups/CustomePopUps";

function AddressVerification() {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/checkout");
  };
  return (
    <>
      <div className="cart_address_header">
        <div className="logo_container_cart">
          <Link to="/">
            <img
              className="myntra_home_cart"
              src="https://raw.githubusercontent.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/main/Project%20Myntra%20Clone/images/myntra_logo.webp"
              alt="not found"
            ></img>
          </Link>
        </div>
        <div className="_address_stepper">
          <div className="car_bag_address">
            <span>B A G</span>
          </div>
          <div className="cart_dot mx-1">---------- </div>
          <div className="cart_address mx-1"> A D D R E S S</div>
          <div className="cart_dot mx-1">---------- </div>
          <div className="mx-1"> P A Y M E N T</div>
        </div>
        <div className="cart_auth_address">
          <img
            className="cart_sec_address_image"
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            alt=""
          ></img>
          <span>1 0 0 % S E C U R E</span>
        </div>
      </div>

      <div className="cart_address_summry">
        <div className="cart_deatils_desc_address">
          <div className="select_delivery_address">
            <span style={{ marginLeft: "15px", fontSize: "17px" }}>
              Select Delivery Address
            </span>
            <CustomePopUps />
          </div>

          <div className="cart_product_address">
            <div className="selected_address">
              <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
              <label htmlFor="html">
                <b>Md Danish Akhtar</b>
              </label>
            </div>

            <p
              style={{ marginTop: "15px", fontSize: "13px", color: "#424553" }}
            >
              Vill-Zameen Budhan Post-Chiraiyakot, ChiraiyaKot <br /> Madarsa,
              Uttar Pradesh - 276129
            </p>
            <p style={{ fontSize: "13px", color: "#424553" }}>
              Mobile: <b>5985857756</b>
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#424553",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <b
                style={{
                  fontSize: "20px",
                  color: "#424553",
                  marginTop: "-10px",
                }}
              >
                .
              </b>{" "}
              <span style={{ marginLeft: "5px" }}>
                Pay on Delivery avaiable
              </span>
            </p>
            <div className="address_button">
              <button className="btn btn-remove ">REMOVE</button>
              <button className="btn btn_default_edit">EDIT</button>
            </div>
          </div>

          <div className="see_exis_item">
            <Link to="/customepopup" className="btn default add_new_address">
              + Add New Address
            </Link>
          </div>
        </div>

        <div className="address_cart_total_summary">
          <div className="delivery_estimate">
            <p className="delivery_heading">DELIVERY ESTIMATES</p>
            <div className="product_image">
              <img
                src="https://github.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/blob/main/Project%20Myntra%20Clone/images/categories/1.jpg?raw=true"
                alt=""
              ></img>
              <p>
                Esimated delivery by <b>18 jan 2024</b>
              </p>
            </div>
          </div>

          <div className="product_summary_cart">
            <div className="price_details">PRICE DETAILS (1 Item)</div>
            <div className="total_mrp">
              <span>Total MRP</span>
              <span style={{ marginLeft: "248px" }}>Rs. 789</span>
            </div>
            <div className="discount_on_mrp">
              <span>
                Discount on MRP{" "}
                <Link to="" className="know_more_mrp_discount">
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
                <Link to="" className="know_more_platform_fee">
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
                <Link to="" className="know_more_shipping_fee">
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
            <button className="place_order_btn" onClick={() => handlePayment()}>
              CONTINUE
            </button>
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

export default AddressVerification;
