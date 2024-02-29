import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import TopHeader2 from "../Navigations/TopHeader2";
import "./CancelOrder.css";

function CancelOrder() {
  const navigate = useNavigate();
  return (
    <>
      <div className="_my_header">
        <TopHeader2 />
      </div>

      <div className="account_cancel_header">
        <p>Account</p>
        <span>danish akhtar</span>
      </div>

      <div className="cancel_order_content">
        <div className="cancel_my_order_head">
          <div className="cancel_btn_overview">
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "black" }}
            >
              Overview
            </Link>
          </div>

          <div className="cancel_order_return">
            <span>ORDERS</span>
            <Link
              to="/myorder"
              style={{
                textDecoration: "none",
                color: "#14cda8",
                fontWeight: 700,
              }}
            >
              Orders & Returns
            </Link>
          </div>

          <div className="cancel_order_credits">
            <span>CREDITS</span>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Coupons
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Myntra Credits
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              My Cash
            </Link>
          </div>

          <div className="cancel_order_account">
            <span>ACCOUNT</span>
            <Link to="/myprofile" style={{ textDecoration: "none", color: "black" }}>
              Profile
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Saved Cards
            </Link>
            <Link to="/address" style={{ textDecoration: "none", color: "black" }}>
              Addresses
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Myntra Insider
            </Link>
          </div>
        </div>
        {/* cancellation policy */}
        <div className="cancel_order_main">
          <div className="cancel_order_details">
            <div className="cancel_order_main_details">
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/12816480/2020/12/8/9ba523c2-fe7f-44df-b0b6-f72621fe40a81607424596953-HERENOW-Men-Tshirts-1241607424595550-1.webp"
                alt=""
              ></img>
              <div className="cancel_order_name_price">
                <h6>HERE&NOW</h6>
                <p>Mens Navy Blue Solid Round Neck T-shirt</p>
                <span>Size: S</span>
                <div className="cancel_order_price_tag"></div>
                <p>
                  &#8377; 185.00 <del>&#8377; 599</del>{" "}
                  <b
                    className="text-success"
                    style={{ background: 0, marginLeft: "5px" }}
                  >
                    Saved &#8377; 414
                  </b>
                </p>
              </div>
            </div>
            <div className="eligible_for_cncl">
              <span className="material-symbols-outlined">
                settings_backup_restore
              </span>
              <p>Eligible for cancellation</p>
              <Link to=''>VIEW POLICY</Link>
            </div>
          </div>
          {/* Reason for cancel */}

          <div className="cancel_reason_main">
            <div className="cancel_reason_heading">
              <h6>Reason for cancellation</h6>
              <p>
                Please tell us correct reason for cancellation. This information
                is only used to improve our service
              </p>
            </div>
            <hr></hr>

            <div className="cancel_reason_list">
              <span>
                Select Reason<b style={{ color: "red" }}>*</b>
              </span>

              <div className="Delayed_Delivery_Cancellation">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="Delayed Delivery Cancellation"
                />
                <label htmlFor="html">Delayed Delivery Cancellation</label>
              </div>

              <div className="Delayed_Delivery_Cancellation">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="Incorrect size ordered"
                />
                <label htmlFor="html">Incorrect size ordered</label>
              </div>

              <div className="Delayed_Delivery_Cancellation">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="Duplicate Order"
                />
                <label htmlFor="html">Duplicate Order</label>
              </div>

              <div className="Delayed_Delivery_Cancellation">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="Product not required anymore"
                />
                <label htmlFor="html">Product not required anymore</label>
              </div>

              <div className="Delayed_Delivery_Cancellation">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="Incorrect size ordered"
                />
                <label htmlFor="html">Incorrect size ordered</label>
              </div>

              <div className="Delayed_Delivery_Cancellation">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="Incorrect size ordered"
                />
                <label htmlFor="html">Incorrect size ordered</label>
              </div>

              <div className="Delayed_Delivery_Cancellation">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="Incorrect size ordered"
                />
                <label htmlFor="html">Incorrect size ordered</label>
              </div>
              <hr></hr>
              <input type="area" placeholder="Additional Comments" />
            </div>
          </div>

          <div className="cancel_reason_label">
            <p>
              We will try to cancel order. It may take upto 20 mins to confirm
              since it has shipped.
            </p>
          </div>
          {/* Refund Status cancellation request button */}
          <div className="cancel_request_btn">
            <div className="refund_money">
              <span>REFUND DETAILS</span>
              <p>&#8377; 0</p>
            </div>
            <button onClick={() => navigate("/cancelorderconfirmation")}>
              REQUEST CANCELLATION
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      <div className="footer" style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </>
  );
}

export default CancelOrder;
