import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import TopHeader2 from "../Navigations/TopHeader2";
import "./MyProfile.css";

function MyProfile() {
  const navigate = useNavigate();
  return (
    <>
      <div className="profile_my_header">
        <TopHeader2 />
      </div>

      <div className="profile_account_header">
        <p>Account</p>
        <span>danish akhtar</span>
      </div>

      <div className="profile_order_content">
        <div className="profile_my_order_head">
          <div className="profile_btn_overview">
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "black" }}
            >
              Overview
            </Link>
          </div>

          <div className="profile_order_return">
            <span>ORDERS</span>
            <Link
              to="/myorder"
              style={{ textDecoration: "none", color: "black" }}
            >
              Orders & Returns
            </Link>
          </div>

          <div className="profile_order_credits">
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

          <div className="profile_order_account">
            <span>ACCOUNT</span>
            <Link
              to="/myprofile"
              style={{
                textDecoration: "none",
                color: "#14cda8",
                fontWeight: 700,
              }}
            >
              Profile
            </Link>
            <Link to="/myprofile" style={{ textDecoration: "none", color: "black" }}>
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

        <div className="my_profile_main">
          <span>Profile Details</span>
          <hr style={{ marginLeft: "120px", marginRight: "120px" }} />
          <div className="profile_main_containe">
            <p>Full Name</p>
            <span>danish akhtar</span>
          </div>
          <div className="profile_main_mobile">
            <p>Mobile Number</p>
            <span>7985857756</span>
          </div>
          <div className="profile_main_email">
            <p>Email</p>
            <span>- not added -</span>
          </div>
          <div className="profile_main_gender">
            <p>Gender</p>
            <span>MALE</span>
          </div>
          <div className="profile_main_dob">
            <p>Date of Birth</p>
            <span>- not added -</span>
          </div>
          <div className="profile_main_location">
            <p>Location</p>
            <span>- not added -</span>
          </div>
          <div className="profile_main_alternate_num">
            <p>Alternate Number</p>
            <span>9889946759</span>
          </div>
          <div className="profile_main_hintname">
            <p>Hint Name</p>
            <span>9889</span>
          </div>
          <div className="profile_main_button">
            <button onClick={() => navigate("/editmyprofile")}>EDIT</button>
          </div>
        </div>
      </div>
      <div className="footer" style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </>
  );
}

export default MyProfile;
