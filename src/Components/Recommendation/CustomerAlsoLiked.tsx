import { useNavigate } from 'react-router-dom';
import './CustomerAlsoLiked.css';

function CustomerAlsoLiked() {
  const navigate = useNavigate();
  return (
    <div className='customer_product_container'>
    <h6 className='customer_product_header'>Customer also Liked</h6>
    <div className='customer_product_main'>      
      <div className="customer_products">
        <div className="customer_product_view">
          <div className="customer_product_img" onClick={()=> navigate("/productdetails")}>
            <span className="badge badge-danger"> NEW </span>
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7319901/2018/9/18/ede2810e-0a86-43aa-a7aa-27d3d95a9b5f1537268175318-Libas-Women-Pink--Grey-Printed-Kurta-with-Palazzos--Dupatta-4071537268175098-1.jpg"
              alt=""
              className="img-fluid caltalog_img"
            />              
          </div>
          <div className='customer_product_rating_container'>
            <p className='customer_product_rating'>4.3 <span className="material-symbols-outlined">star_half</span></p>

            </div>
          <div className="customer_product_name">
            <h6>Roadster</h6>
            <p>Mens Slim Tapered slim Tshirt</p>
          </div>
          <div className="customer_product_price" onClick={()=> navigate("/productdetails")}>
            <span
              className="price"
              style={{ fontWeight: 700, fontSize: "13px" }}
            >
              Rs. 1280
            </span>
            <del className="text-muted" style={{ fontSize: "13px" }}>
              Rs.1980
            </del>
            <span
              className="price mx-2"
              style={{
                fontWeight: 400,
                fontSize: "13px",
                color: "#f58742",
              }}
            >
              (69% OFF)
            </span>
          </div>
        </div>
      </div>
      <div className="customer_products">
        <div className="customer_product_view">
          <div className="customer_product_img" onClick={()=> navigate("/productdetails")}>
            <span className="badge badge-danger"> NEW </span>
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7319901/2018/9/18/ede2810e-0a86-43aa-a7aa-27d3d95a9b5f1537268175318-Libas-Women-Pink--Grey-Printed-Kurta-with-Palazzos--Dupatta-4071537268175098-1.jpg"
              alt=""
              className="img-fluid caltalog_img"
            />              
          </div>
          <div className='customer_product_rating_container'>
            <p className='customer_product_rating'>4.3 <span className="material-symbols-outlined">star_half</span></p>

            </div>
          <div className="customer_product_name">
            <h6>Roadster</h6>
            <p>Mens Slim Tapered slim Tshirt</p>
          </div>
          <div className="customer_product_price" onClick={()=> navigate("/productdetails")}>
            <span
              className="price"
              style={{ fontWeight: 700, fontSize: "13px" }}
            >
              Rs. 1280
            </span>
            <del className="text-muted" style={{ fontSize: "13px" }}>
              Rs.1980
            </del>
            <span
              className="price mx-2"
              style={{
                fontWeight: 400,
                fontSize: "13px",
                color: "#f58742",
              }}
            >
              (69% OFF)
            </span>
          </div>
        </div>
      </div>
      <div className="customer_products">
        <div className="customer_product_view">
          <div className="customer_product_img" onClick={()=> navigate("/productdetails")}>
            <span className="badge badge-danger"> NEW </span>
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7319901/2018/9/18/ede2810e-0a86-43aa-a7aa-27d3d95a9b5f1537268175318-Libas-Women-Pink--Grey-Printed-Kurta-with-Palazzos--Dupatta-4071537268175098-1.jpg"
              alt=""
              className="img-fluid caltalog_img"
            />              
          </div>
          <div className='customer_product_rating_container'>
            <p className='customer_product_rating'>4.3 <span className="material-symbols-outlined">star_half</span></p>

            </div>
          <div className="customer_product_name">
            <h6>Roadster</h6>
            <p>Mens Slim Tapered slim Tshirt</p>
          </div>
          <div className="customer_product_price" onClick={()=> navigate("/productdetails")}>
            <span
              className="price"
              style={{ fontWeight: 700, fontSize: "13px" }}
            >
              Rs. 1280
            </span>
            <del className="text-muted" style={{ fontSize: "13px" }}>
              Rs.1980
            </del>
            <span
              className="price mx-2"
              style={{
                fontWeight: 400,
                fontSize: "13px",
                color: "#f58742",
              }}
            >
              (69% OFF)
            </span>
          </div>
        </div>
      </div>
      <div className="customer_products">
        <div className="customer_product_view">
          <div className="customer_product_img" onClick={()=> navigate("/productdetails")}>
            <span className="badge badge-danger"> NEW </span>
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7319901/2018/9/18/ede2810e-0a86-43aa-a7aa-27d3d95a9b5f1537268175318-Libas-Women-Pink--Grey-Printed-Kurta-with-Palazzos--Dupatta-4071537268175098-1.jpg"
              alt=""
              className="img-fluid caltalog_img"
            />              
          </div>
          <div className='customer_product_rating_container'>
            <p className='customer_product_rating'>4.3 <span className="material-symbols-outlined">star_half</span></p>

            </div>
          <div className="customer_product_name">
            <h6>Roadster</h6>
            <p>Mens Slim Tapered slim Tshirt</p>
          </div>
          <div className="customer_product_price" onClick={()=> navigate("/productdetails")}>
            <span
              className="price"
              style={{ fontWeight: 700, fontSize: "13px" }}
            >
              Rs. 1280
            </span>
            <del className="text-muted" style={{ fontSize: "13px" }}>
              Rs.1980
            </del>
            <span
              className="price mx-2"
              style={{
                fontWeight: 400,
                fontSize: "13px",
                color: "#f58742",
              }}
            >
              (69% OFF)
            </span>
          </div>
        </div>
      </div>
      <div className="customer_products">
        <div className="customer_product_view">
          <div className="customer_product_img" onClick={()=> navigate("/productdetails")}>
            <span className="badge badge-danger"> NEW </span>
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7319901/2018/9/18/ede2810e-0a86-43aa-a7aa-27d3d95a9b5f1537268175318-Libas-Women-Pink--Grey-Printed-Kurta-with-Palazzos--Dupatta-4071537268175098-1.jpg"
              alt=""
              className="img-fluid caltalog_img"
            />              
          </div>
          <div className='customer_product_rating_container'>
            <p className='customer_product_rating'>4.3 <span className="material-symbols-outlined">star_half</span></p>

            </div>
          <div className="customer_product_name">
            <h6>Roadster</h6>
            <p>Mens Slim Tapered slim Tshirt</p>
          </div>
          <div className="customer_product_price" onClick={()=> navigate("/productdetails")}>
            <span
              className="price"
              style={{ fontWeight: 700, fontSize: "13px" }}
            >
              Rs. 1280
            </span>
            <del className="text-muted" style={{ fontSize: "13px" }}>
              Rs.1980
            </del>
            <span
              className="price mx-2"
              style={{
                fontWeight: 400,
                fontSize: "13px",
                color: "#f58742",
              }}
            >
              (69% OFF)
            </span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default CustomerAlsoLiked
