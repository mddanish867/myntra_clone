import { Link, useNavigate } from "react-router-dom";
import "./MyOrder.css";
import TopHeader2 from "../Navigations/TopHeader2";
import Account from "../Account/Account";
import Footer from "../Footer/Footer";
function MyOrder() {
  const navigate = useNavigate();
  return (
    <>
      <div className="_my_header">
        <TopHeader2 />
      </div>

      <div className="account_header">
        <p>Account</p>
        <span>danish akhtar</span>
      </div>

      <div className="order_content">
        <div className="my_order_head">
          <div className="btn_overview">
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "black" }}
            >
              Overview
            </Link>
          </div>

          <div className="order_return">
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

          <div className="order_credits">
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

          <div className="order_account">
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
        <div className="myorder_details">
          <div className="myntra_insider_enroll">
            <div className="myntra_insider_supercoins">
              <p>Myntra Insider</p>
              <span>Earn 10 supercoins for every &#8377;100 purchase</span>
            </div>
            <button>Enroll Now</button>
          </div>

          <div className="order_filter">
            <div className="order_filter_header">
              <p>All orders</p>
              <span>from anytime</span>
            </div>
            <div className="filter_box">
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="search for order" />
              <button>
                <span className="material-symbols-outlined filter_tune">
                  tune
                </span>
                Filter
              </button>
            </div>
          </div>

          <div>
            {/* Order confirmed */}
            <div className="order_purchased" onClick={()=>navigate("/myorderdetails")}>
              <div className="orderering_status">
                <span className="material-symbols-outlined">deployed_code</span>
                <div className="arriving_order_stats">
                  <p>In Transit</p>
                  <span>Arriving by Sat-26 jan</span>
                  <img src="https://myntraweb.blob.core.windows.net/selfserveui/assets/svg/mexpress-tag.svg" alt="" />
                </div>
              </div>
              <div className="purchased_item_stats">
                <img src="https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/12816480/2020/12/8/9ba523c2-fe7f-44df-b0b6-f72621fe40a81607424596953-HERENOW-Men-Tshirts-1241607424595550-1.webp" alt=""></img>
                <div className="purchased_item_size_name">
                  <h6>HERE&NOW</h6>
                  <span>Mens blue Round Neck t-shirts</span>
                  <p>Size: S</p>
                </div>
                <span className="material-symbols-outlined">navigate_next</span>
              </div>
            </div>

            {/* Order cancel */}
            <div className="order_purchase_cancel">
              <div className="cance_orderering_status">
              <span className="material-symbols-outlined">cancel</span>
                <div className="cancel_order_stats">
                  <p>Cancelled</p>
                  <span>Sat, 26 jan as per your request</span>
                </div>
              </div>
              <div className="purchased_item_stats">
                <img src="https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/12816480/2020/12/8/9ba523c2-fe7f-44df-b0b6-f72621fe40a81607424596953-HERENOW-Men-Tshirts-1241607424595550-1.webp" alt=""></img>
                <div className="purchased_item_size_name">
                  <h6>HERE&NOW</h6>
                  <span>Mens blue Round Neck t-shirts</span>
                  <p>Size: S</p>
                </div>
                <span className="material-symbols-outlined">navigate_next</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer" style={{marginTop:"100px"}}>
        <Footer/>
      </div>
    </>
  );
}

export default MyOrder;
