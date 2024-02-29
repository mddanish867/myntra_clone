import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import TopHeader2 from '../Navigations/TopHeader2';
import './Address.css';
function Adresses() {
  return (
    <>
    <div className="address_my_header">
      <TopHeader2 />
    </div>

    <div className="address_account_header">
      <p>Account</p>
      <span>danish akhtar</span>
    </div>

    <div className="address_order_content">
      <div className="address_my_order_head">
        <div className="address_btn_overview">
          <Link
            to="/account"
            style={{ textDecoration: "none", color: "black" }}
          >
            Overview
          </Link>
        </div>

        <div className="address_order_return">
          <span>ORDERS</span>
          <Link
            to="/myorder"
            style={{ textDecoration: "none", color: "black" }}
          >
            Orders & Returns
          </Link>
        </div>

        <div className="address_order_credits">
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

        <div className="address_order_account">
          <span>ACCOUNT</span>
          <Link
            to="/myprofile"
            style={{ textDecoration: "none", color: "black" }}
          >
            Profile
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Saved Cards
          </Link>
          <Link to="/address"  style={{
              textDecoration: "none",
              color: "#14cda8",
              fontWeight: 700,
            }}>
            Addresses
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Myntra Insider
          </Link>
        </div>
      </div>

      {/* main edit profile */}

      <div className="address_main_prfile">
        <div className='address_btn'>
        <span className="address_details_saved">Saved Addresses</span>
<button>+ ADD NEW ADDRESS</button>
        </div>
        <span style={{fontSize:"12px",marginLeft:"15px",fontWeight:700}}>DEFAUL ADDRESS</span>
        <div className='address_details'>
<div className='address_name'>
<p>Md Danish Akhtar</p>
<span className="badge">Light</span>
</div>

<div className='address_fields'>
  <span>Vill-Zameen Budhan, Post-Chiraiyakot</span>
  <span>Disrict-Mau</span>
  <span>Pincode- 276129</span>
  <span>UTTAR PRADESH</span>
  <span style={{marginTop:"15px"}}>Mobile: 7985857756</span>
</div>
<hr style={{color:"#ccc"}}></hr>
<div className='address_edit_remove_btn'>
<button>EDIT</button>
<button>REMOVE</button>
</div>
        </div>

        
      </div>
    </div>
    <div className="footer" style={{ marginTop: "100px" }}>
      <Footer />
    </div>
  </>
  )
}

export default Adresses
