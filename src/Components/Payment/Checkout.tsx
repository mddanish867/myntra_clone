import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useState } from "react";

function Checkout() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [isRecommendedSelected, setIsRecommendedSelected] = useState(true);
  const [isCODSelected, setIsCODSelected] = useState(false);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [isCodChecked, setIsCodChecked] = useState(false);
  const [isGpayChecked, setIsGpayChecked] = useState(false);

  const handleShowMore = () => {
    if (showMore === false) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  const handleRecommendedPaymentOption = () => {
    setIsRecommendedSelected(true);
    setIsCODSelected(false);
    setIsCardSelected(false);
  };

  const handleCodpaymentOption = () => {
    setIsCODSelected(true);
    setIsRecommendedSelected(false);
    setIsCardSelected(false);
    setIsCodChecked(false);
    setIsGpayChecked(false);
  };

  const handleCardPaymentOption = () => {
    setIsCardSelected(true);
    setIsRecommendedSelected(false);
    setIsCODSelected(false);
    setIsCodChecked(false);
    setIsGpayChecked(false);
  };
  const handleCodChecked = () => {
    setIsCodChecked(true);
    setIsGpayChecked(false);
  };

  const handleGapyChecked = () => {
    setIsGpayChecked(true);
    setIsCodChecked(false);
  };
  const handlePlaceOrder = () => {
    navigate("/addressverification");
  };
  return (
    <>
      <div className="payment_cart_header">
        <div className="_payment_logo_container">
          <Link to="/">
            <img
              className="payment_myntra_home"
              src="https://raw.githubusercontent.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/main/Project%20Myntra%20Clone/images/myntra_logo.webp"
              alt="not found"
            ></img>
          </Link>
        </div>
        <div className="cart_payment_stepper">
          <div className="cart_payment_bag">
            <span>B A G</span>
          </div>
          <div className="cart_dot mx-1">---------- </div>
          <div className="cart_addresss mx-1"> A D D R E S S</div>
          <div className="cart_dot mx-1">---------- </div>
          <div className="cart_paymet mx-1"> P A Y M E N T</div>
        </div>
        <div className="cart_auth_payment_sec">
          <img
            className="cart_sec_payment_image"
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            alt=""
          ></img>
          <span>1 0 0 % S E C U R E</span>
        </div>
      </div>

      <div className="cart_summry_payment">
        <div className="cart_deatils_desc_payment">
          {/* Start Available Offers Section */}
          <div
            className="avail_offers_payment"
            style={showMore ? { height: "300px" } : { height: "108px" }}
          >
            <span className="avail_offers_tag_payment">Available Offers</span>
            <ul className="avail_0ffers_list_payment">
              {showMore === false ? (
                <li style={{ marginLeft: "15px" }}>
                  10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                  cards on min spend of 2.500, TCA.
                </li>
              ) : (
                <ul>
                  <li className="avail_0ffers_list_payment">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list_payment">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list_payment">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list_payment">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list_payment">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list_payment">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list_payment">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                </ul>
              )}
            </ul>
            <button
              className="btn default show_more_btn_payment"
              onClick={() => handleShowMore()}
            >
              {showMore === false ? "Show More" : "Show Less"}
            </button>
          </div>
          {/* End Available Offers Section */}

          {/* Start Choose Payment Section */}
          <p
            style={{
              fontWeight: 700,
              fontSize: "14px",
              marginLeft: "132px",
              marginTop: "10px",
            }}
          >
            Choose Payment Mode
          </p>
          <div className="payment_option">
            <div className="payment_name_recommend">
              {/* Recommended Payment option button*/}
              <button
                className="recommend_btn"
                style={
                  isRecommendedSelected
                    ? {
                        borderLeft: "5px solid rgb(255, 63, 108)",
                        background: "#fff",
                        color: "rgb(255, 63, 108)",
                        fontWeight: "600",
                        textAlign: "center",
                        fontSize: "13px",
                      }
                    : {
                        borderLeft: "none",
                        background: "#f1f1f1",
                        fontWeight: "600",
                        textAlign: "center",
                        fontSize: "13px",
                      }
                }
                onClick={() => handleRecommendedPaymentOption()}
              >
                <span
                  className="material-symbols-outlined"
                  style={
                    isCODSelected
                      ? {
                          fontSize: "13px",
                          background: 0,
                          marginLeft: "-50px",
                        }
                      : {
                          fontSize: "13px",
                          background: 0,
                          marginLeft: "-50px",
                        }
                  }
                >
                  kid_star
                </span>
                <span
                  className="mx-1"
                  style={
                    isCODSelected
                      ? { background: 0, fontWeight: 600, fontSize: "13px" }
                      : { background: 0, fontWeight: 600, fontSize: "13px" }
                  }
                >
                  Recommended
                </span>
              </button>

              {/* Cash on Delivery Payment option button*/}
              <button
                className="recommend_btn"
                onClick={() => handleCodpaymentOption()}
                style={
                  isCODSelected
                    ? {
                        borderLeft: "5px solid rgb(255, 63, 108)",
                        background: "#fff",
                        color: "rgb(255, 63, 108)",
                        fontWeight: "600",
                        textAlign: "center",
                        fontSize: "13px",
                      }
                    : {
                        borderLeft: "none",
                        background: "#f1f1f1",
                        fontWeight: "600",
                        textAlign: "center",
                        fontSize: "13px",
                      }
                }
              >
                <span
                  className="material-symbols-outlined"
                  style={
                    isCODSelected
                      ? { fontSize: "13px", background: 0, marginLeft: "15px" }
                      : { fontSize: "13px", background: 0, marginLeft: "15px" }
                  }
                >
                  payments
                </span>
                <span className="mx-1" style={{ background: 0 }}>
                  Cash on Delivery (Cash/UPI)
                </span>
              </button>

              {/* Creadit/Debit Card payment options button*/}
              <button
                className="recommend_btn"
                onClick={() => handleCardPaymentOption()}
                style={
                  isCardSelected
                    ? {
                        borderLeft: "5px solid rgb(255, 63, 108)",
                        background: "#fff",
                        color: "rgb(255, 63, 108)",
                        fontWeight: "600",
                        textAlign: "center",
                        fontSize: "13px",
                      }
                    : {
                        borderLeft: "none",
                        background: "#f1f1f1",
                        fontWeight: "600",
                        textAlign: "center",
                        fontSize: "13px",
                      }
                }
              >
                <span
                  className="material-symbols-outlined"
                  style={
                    isCardSelected
                      ? { fontSize: "13px", background: 0, marginLeft: "-50px" }
                      : { fontSize: "13px", background: 0, marginLeft: "-50px" }
                  }
                >
                  credit_card
                </span>
                <span className="mx-1" style={{ background: 0 }}>
                  Credit/Debit Card
                </span>
              </button>
            </div>

            {/* Recommended Payment option field */}
            {isRecommendedSelected && (
              <div className="recomend_options">
                <p style={{ marginBottom: "30px" }}>
                  Recommended Payment Options
                </p>

                {/* Cash on Delivery Payment options field */}
                <div className="payment_checked">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                    onClick={() => handleCodChecked()}
                  />
                  <label className="mx-2" htmlFor="html">
                    Cash on Delivery (Cash/UPI){" "}
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: "18px",
                        background: 0,
                        marginLeft: "75px",
                      }}
                    >
                      payments
                    </span>
                  </label>
                </div>
                {isCodChecked ? (
                  <div className="Cod_payment">
                    <input
                      className="cod_image"
                      type="text"
                      placeholder="2345"
                      readOnly
                    ></input>
                    <input
                      className="cod_payment_code"
                      type="text"
                      placeholder="Enter code shown in above image*"
                    ></input>
                    <span className="cod_payment_span">
                      You can pay via Cash/UPI
                    </span>
                    <button className="cod_btn_payment">PLACE ORDER</button>
                  </div>
                ) : (
                  ""
                )}

                {/* Googlepay payment options field */}
                <div className="google_pay_mode">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                    onClick={() => handleGapyChecked()}
                  />
                  <label className="mx-2" htmlFor="html">
                    {" "}
                    Google Pay
                    <span>
                      <img
                        style={{ height: "25px", marginLeft: "188px" }}
                        src="https://media.assettype.com/bloombergquint%2Fimport%2Fm4p4r1r_google-pay_625x300_12_April_19.jpg?auto=format%2Ccompress&w=576"
                        alt=""
                      ></img>
                    </span>
                  </label>
                </div>
                {isGpayChecked ? (
                  <div className="Gpay_payment">
                    <input
                      className="Gpay_payment_code"
                      type="text"
                      placeholder="Enter code shown in above image*"
                    ></input>
                    <button
                      className="Gapy_btn_payment"
                      onClick={() => navigate("/orderconfirmation")}
                    >
                      PAY NOW
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}

            {/* cash on Delivery payment option field */}
            {isCODSelected && (
              <div className="recomend_options">
                <p style={{ marginBottom: "30px" }}>
                  Cash on Delivery (Cash/UPI)
                </p>

                <div className="Cod_payment">
                  <input
                    className="cod_image"
                    type="text"
                    placeholder="2345"
                    readOnly
                  ></input>
                  <input
                    className="cod_payment_code"
                    type="text"
                    placeholder="Enter code shown in above image*"
                  ></input>
                  <span className="cod_payment_span">
                    You can pay via Cash/UPI
                  </span>
                  <button className="cod_btn_payment">PLACE ORDER</button>
                </div>
              </div>
            )}
            {isCardSelected && (
              <div className="recomend_options">
                <p style={{ marginBottom: "30px" }}>CREDIT/DEBIT CARD</p>

                <span className="cod_payment_span">
                  Please ensure your card can be used for online transactions.
                </span>
                <div className="Cod_payment">
                  <input
                    className="cod_payment_code"
                    type="text"
                    placeholder="Enter Card Number"
                  ></input>
                  <input
                    className="cod_payment_code"
                    type="text"
                    placeholder="Name on card"
                  ></input>
                  <input
                    className="cod_payment_code"
                    type="text"
                    placeholder="Valid Thru (MM/YY)"
                  ></input>

                  <button className="cod_btn_payment">PAY NOW</button>
                </div>
              </div>
            )}
          </div>
          {/* End Choose Payment Section */}
        </div>

        <div className="cart_total_summary">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
