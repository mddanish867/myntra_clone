import { Link, useNavigate } from "react-router-dom";
import TopHeader2 from "../Navigations/TopHeader2";
import "./Account.css";
import Footer from "../Footer/Footer";
function Account() {
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
              style={{
                textDecoration: "none",
                color: "#14cda8",
                fontWeight: 700,
              }}
            >
              Overview
            </Link>
          </div>

          <div className="order_return">
            <span>ORDERS</span>
            <Link
              to="/myorder"
              style={{ textDecoration: "none", color: "black" }}
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

        <div className="move_into_column">
          <div className="account_profile">
            <img src="data:image/png;base64,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" alt="" />
            <button onClick={()=> navigate("/editmyprofile")}>EDIT PROFILE</button>
          </div>

          <div className="link_order_wishlist_myntra">
            <div
              className="check_order_status"
              onClick={() => navigate("/myorder")}
            >
              <img src="https://constant.myntassets.com/mymyntra/assets/img/profile-orders.png" alt="" />
              <p>Orders</p>
              <span>Check your order status</span>
            </div>

            <div
              className="check_collection_status"
              onClick={() => navigate("/wishlist")}
            >
              <img src="https://constant.myntassets.com/mymyntra/assets/img/profile-collections.png" alt=""/>
              <p>Collections & Wishlist</p>
              <span>All your curated products collections</span>
            </div>

            <div className="check_myntra_credits">
              <img src="https://constant.myntassets.com/mymyntra/assets/img/profile-myntra-credit.png" alt=""/>
              <p>Myntra Credits</p>
              <span>Manage all your refunds & gift cards</span>
            </div>
          </div>
          <div className="link_order_wishlist_myntra">
            <div className="check_order_status">
              <img src="https://constant.myntassets.com/mymyntra/assets/img/profile-myntrapoints.png" alt=""/>
              <p>MynCash</p>
              <span>Earn MynCash as you shop and use</span>
              <span>them in checkout</span>
            </div>

            <div className="check_collection_status">
              <img src="https://constant.myntassets.com/mymyntra/assets/img/profile-cards.png" alt=""/>
              <p>Saved Cards</p>
              <span>Save your cards for faster checkout</span>
            </div>

            <div className="check_myntra_credits">
              <img src="https://constant.myntassets.com/mymyntra/assets/img/upiIcon.png" alt=""/>
              <p>Saved UPI</p>
              <span>View you saved UPI</span>
            </div>
          </div>
          <div className="link_order_wishlist_myntra">
            <div className="check_order_status">
              <img src="https://constant.myntassets.com/mymyntra/assets/img/wallets_bnpl.png" alt=""/>
              <p>Wallets/BNPL</p>
              <span>View your saved wallets and BNPL</span>
            </div>

            <div
              className="check_collection_status"
              onClick={() => navigate("/address")}
            >
              <img src="https://constant.myntassets.com/mymyntra/assets/img/profile-address.png" alt=""/>
              <p>Addresses</p>
              <span>Save addresses for hassel free checkout</span>
            </div>

            <div className="check_myntra_credits">
              <img src="https://constant.myntassets.com/mymyntra/assets/img/profile-coupons.png" alt=""/>
              <p>Coupons</p>
              <span>Manage coupon for discount</span>
            </div>
          </div>
          <div className="link_order_wishlist_myntra">
            <div
              className="check_order_status"
              onClick={() => navigate("/editmyprofile")}
            >
              <img src="https://constant.myntassets.com/mymyntra/assets/img/profile-edit.png" alt=""/>
              <p>Profile Details</p>
              <span>Change your profile details</span>
            </div>
          </div>
          <div className="link_btn_logout">
            <button onClick={()=>navigate("/")}>LOGOUT</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Account;
