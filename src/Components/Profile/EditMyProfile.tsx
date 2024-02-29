import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import TopHeader2 from "../Navigations/TopHeader2";
import "./EditMyProfile.css";

function EditMyProfile() {
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
            <Link
              to="/myprofile"
              style={{ textDecoration: "none", color: "black" }}
            >
              Saved Cards
            </Link>
            <Link
              to="/address"
              style={{ textDecoration: "none", color: "black" }}
            >
              Addresses
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Myntra Insider
            </Link>
          </div>
        </div>

        {/* main edit profile */}

        <div className="edit_main_prfile">
          <span className="edite_details">Edit Details</span>
          <hr style={{ marginLeft: "70px", marginRight: "70px" }}></hr>

          <div className="profile_mobile">
            <div className="profile_number_label">
              <span>Mobile Number*</span>
              <div className="edit_profile_number">
                <p>7985857756</p>
                <span className="material-symbols-outlined">check_circle</span>
              </div>
            </div>
            <button>CHANGE</button>
          </div>

          <input
            type="text"
            placeholder="fullname"
            value={"Md danish akhtar"}
          />
          <input
            type="email"
            placeholder="Email"
            value={"Mddanishakhtar@gmail.com"}
          />         

          <input type="dob" placeholder="DOB" value={"10/08/1993"} />
          <span
            className="alternate_number"
            style={{ fontSize: "14px", marginTop: "15px" }}
          >
            Alternate mobile details
          </span>
          <input type="text" placeholder="Email" value={"9889946759"} />
          <input type="text" placeholder="Hint name" value={"9889"} />

          <button>SAVE DETAILS</button>
        </div>
      </div>
      <div className="footer" style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </>
  );
}

export default EditMyProfile;
