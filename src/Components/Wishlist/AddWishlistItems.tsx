import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import TopHeader2 from '../Navigations/TopHeader2';
import './AddWishlistItems.css';

function AddWishlistItems() {
  const navigate = useNavigate();

  return (
    <>
     <div className="header">
        <TopHeader2 />
      </div>
      <div className='empty_wishlist'>
      <h4>YOUR WISHLIST IS EMPTY</h4>
      <p>Add items that you like to your wishlist. Review <br/> them anytime and easily move them to the bag.
</p>
      <button className='btn btn-default' onClick={()=> navigate("/")}>CONTINUE SHOPPING</button>
    </div>
    <div className="footer">
        <Footer/>
      </div>
    </>
  )
}

export default AddWishlistItems
