import { Link, useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';

function OrderConfirmation() {
  const navigate = useNavigate();
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
          <div className="car_bag_">
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
            alt=''
          ></img>
          <span>1 0 0 % S E C U R E</span>
        </div>
      </div>
     <div className='main_header'>
<div style={{marginBottom:"30px"}}>
      <div className='order_confirmation my-3'>
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxqoMWK0sc2x8Pp1qAMASGxBH9yjUu-J4oTrPglruN4gIqnM-i" alt=''/>
      <p className='order_confirmation_tag'>Order confirmed</p>
      <p className='order_confirmation_deails'>Your order is confirmed. You will recieve order confirmaiom email/SMS </p>
      <p className='order_confirmation_deails2'>shortly with your expected delivery date of your item.</p>
      </div>

      <div className='order_details'>
        <span className='text-muted'>Delivering to</span>
        <span className='customer_name'>Md Danish Akhtar | 7985857756</span>
        <div className='delivery_address'>
          <span>Vill-Zameen Budhan, Post-Chiraiyakot, District-Mau, UP - 276129</span>
          <img src="https://constant.myntassets.com/checkout/assets/img/delhiveryPerson_17-03-2021.png" alt=''/>
        </div>
        <button className='btn btn-default'
        onClick={()=>navigate("/myorderdetails")}
        >ORDER DETAILS
        <span className="material-symbols-outlined">
navigate_next
</span>
        </button>
        <hr style={{color:"#f1f1f1"}}/>
        <span className='order_track_heading'>You can Track/View/Modify your order from orders page</span>
      </div>

      <div className='order_confirmation_pay'>
  <span className='order_pay_badge'>Now pay at your convenience<span className="badge badge-primary">New</span></span>
  <div className='order_pay'>
          <span >Now you can pay online using Pay Now</span>
          <span>option from orders or you can pay on</span>
          <span>Delivery (Cash/UPI)</span>

          <img className='paynow_image' src="https://constant.myntassets.com/checkout/assets/img/pay_at_convenience.png" alt=''/>
        <Link to=''>See How</Link>
        </div>
      </div>

      <div className='order_confirm_slide'>
<div id="carouselExample" className="carousel slide carousel_order_confirmed">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/10/9/05cddf17-de37-4c73-be8c-483c6ee726c61696848612035-FINAL-MYNTRA-BANNER-01.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://assets.myntassets.com/assets/images/2024/1/9/ccc0b8ea-dc06-4999-bbf4-f64bdbd08f1f1704740258571-1704740258460.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/10/9/05cddf17-de37-4c73-be8c-483c6ee726c61696848612035-FINAL-MYNTRA-BANNER-01.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" style={{marginLeft:"-97px"}} aria-hidden="true">
    <span className="material-symbols-outlined" style={{color:"gray"}}>navigate_before</span>
    </span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" style={{marginLeft:"97px"}} aria-hidden="true">
    <span className="material-symbols-outlined" style={{color:"gray"}}>navigate_next</span>
    </span>
  </button>
</div>
      </div>

      <div className='cont_shopping'>
  <button className='btn_continue'>CONTINUE SHOPPING</button>
  <button className='btn_view_order' onClick={()=>navigate("/myorder")}>VIEW ORDER</button>

      </div>
      </div>
      </div>    
      <div className="mayment_method" style={{marginTop:"70px"}}>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"
          alt=''
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
          alt=''
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
          alt=''
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
          alt=''
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"
          alt=''
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"
          alt=''
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"
          alt=''
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
          alt=''
        ></img>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png"
          alt=''
        ></img>
        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" 
        alt=''></img>
      </div>  
    </>
  )
}

export default OrderConfirmation
