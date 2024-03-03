import { Link } from 'react-router-dom';
import './Footer.css';
function Layout() {
  return (
    <>
    <div className='footer_container'>
      <div className='footer_column'>
        <h3>ONLINE SHOPPING</h3>
        <Link to='/men'>Men</Link>        
        <Link to='/men'>Women</Link>
        <Link to='/men'>Kids</Link>
        <Link to='/men'>Home & Living</Link>
        <Link to='/men'>Beauty</Link>
        <Link to='/men'>GiftCard </Link>
        <Link to='/men'>Myntra Insider </Link>
      </div>  
      <div className='footer_column'>
        <h3>CUSTOMER POLICIES</h3>
        <Link to='/men'>Contact Us</Link>        
        <Link to='/men'>FAQ</Link>
        <Link to='/men'>T&C</Link>
        <Link to='/men'>Terms of Use</Link>
        <Link to='/men'>Track Orders</Link>
        <Link to='/men'>Shipping  </Link>
        <Link to='/men'>Cancellation </Link>
        <Link to='/men'>Return </Link>
        <Link to='/men'>Privacy policy </Link>
        <Link to='/men'>Grievence Offer </Link>

      </div>
      <div className='footer_column'>
        <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
        <div className='download_link'>
          <Link to='/apple'><img className='download_link_google' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITHfIWvY6HOgmvSwmFiPdBTTXP2cjOqbc2w&usqp=CAU' alt=''></img></Link>
          <Link to='/gplaystore'><img className='download_link_apple' src='https://e7.pngegg.com/pngimages/32/544/png-clipart-android-google-play-app-store-android-text-logo-thumbnail.png' alt=''></img></Link>
        </div>
      </div>   
      <div className='footer_column'>
        <div className='footer_column_image'>
         <img className='authentic_image' src='https://previews.123rf.com/images/arcady31/arcady311607/arcady31160700053/60391485-100-authentic-rubber-stamp.jpg'></img>
        <p className='authentic_text'><b style={{background:0}}>100% ORIGINAL</b> guarantee for <br/><span style={{color:"gray",background:0}}>all products at myntra.com</span> </p>
        </div>
        <div className='footer_column_image'>
         <img className='authentic_image_return' src='https://cdn.shopify.com/s/files/1/0299/8563/6396/files/14dayreturns_240x240.jpg?v=1612703450'></img>
        <p className='authentic_return_text'><b style={{background:0}}>Return within 14days</b> of <br/><span style={{color:"gray",background:0}}>receiving your order</span> </p>
        </div>
      </div> 
    </div>
    <hr/>
    <div className='copyright'>
    © 2024 www.myntra.com. All rights reserved.
    <br/>
    <b>Note:</b> Only for Learning Purpose, Credit: Myntra

    </div>
    </>
  )
}

export default Layout
