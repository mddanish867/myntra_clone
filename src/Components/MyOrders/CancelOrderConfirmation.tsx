import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import TopHeader2 from '../Navigations/TopHeader2';
import './CancelOrderConfirmation.css';

function CancelOrderConfirmation() {
  const navigate = useNavigate();
  return (
    <>
      <div className="cancel_confirmation_header">
        <TopHeader2 />
      </div>

      <div className="cancel_confirm_account_header">
        <p>Account</p>
        <span>danish akhtar</span>
      </div>

      <div className="cancel_confirm_order_content">
        <div className="cancel_confirm_my_order_head">
          <div className="cancel_confirm_btn_overview">
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "black" }}
            >
              Overview
            </Link>
          </div>

          <div className="cancel_order_order_return">
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

          <div className="cancel_confirm_order_credits">
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

          <div className="cancel_confirm_order_account">
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
        <div className="cancel_confirm_myorder_details">
          <div className="cancel_confirm_request">
            {/* cancel order png image */}
            <img
              src="https://myntraweb.blob.core.windows.net/selfserveui/assets/svg/CancellationRequestedConfirm.svg"
              alt=""
            />
            <span>Cancellation Requested</span>
            <p>
              We are trying to cancel your Order. It may take upto 20 mins to
              confirm since it has shipped.
            </p>
            <hr />

            {/* cancel item details */}
            <div className="cancel_order_details">
              <span>1 Item is cancelled</span>
              <div className="cancel_order_imgae">
                <img
                  src="https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/12816480/2020/12/8/9ba523c2-fe7f-44df-b0b6-f72621fe40a81607424596953-HERENOW-Men-Tshirts-1241607424595550-1.webp"
                  alt=""
                />
                <div className="cancel_order_price_name">
                  <span>HERE&NOW</span>
                  <p>Men Navy Blue Round Neck T-shirt</p>
                </div>
              </div>
            </div>

            <div className="refind_details_check">
              <div className="cancel_order_refund_check">
                <span className="material-symbols-outlined">check_circle</span>
                <div className="cancel_rder_notes">
                  <span>REFUND DETAILS</span>
                  <p>
                    {" "}
                    A refund is not applicable on this order as it is a Pay on
                    delivery order
                  </p>
                </div>
              </div>
              <div className="cancel_order_refund_check">
                <span className="material-symbols-outlined">check_circle</span>
                <div className="cancel_rder_notes">
                  <span>PLEASE NOTE</span>
                  <p>
                    Please refuse the order in Myntra attempts delivery
                  </p>
                </div>
              </div>
            </div>
            <button onClick={()=>navigate("/myorder")} className='cancel_done_btn'>DONE</button>

          </div>

        </div>
      </div>
      <div className="footer" style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </>
  );
}

export default CancelOrderConfirmation
