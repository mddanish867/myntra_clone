import { useNavigate } from 'react-router-dom';
import './SimilarProducts.css';

function SimilarProducts() {
  const navigate = useNavigate();
  return (
    <div className='similar_product_container'>
      <h6 className='similar_product_header'>Similar Products</h6>
      <div className='similar_product_main'>      
        <div className="similar_products">
          <div className="similar_product_view">
            <div className="similar_product_img" onClick={()=> navigate("/productdetails")}>
              <span className="badge badge-danger"> NEW </span>
              <img
                src="https://rukminim2.flixcart.com/image/832/832/l2f20sw0/shirt/9/p/p/s-hlsh013507-highlander-original-imagdrcufrhgtytk.jpeg?q=70&crop=false"
                alt=""
                className="img-fluid caltalog_img"
              />              
            </div>
            <div className='similar_product_rating_container'>
              <p className='similar_product_rating'>4.3 <span className="material-symbols-outlined">star_half</span></p>

              </div>
            <div className="similar_product_name">
              <h6>Roadster</h6>
              <p>Mens Slim Tapered slim Tshirt</p>
            </div>
            <div className="similar_product_price" onClick={()=> navigate("/productdetails")}>
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
        <div className="similar_products">
          <div className="similar_product_view">
            <div className="similar_product_img" onClick={()=> navigate("/productdetails")}>
              <span className="badge badge-danger"> NEW </span>
              <img
                src="https://rukminim2.flixcart.com/image/832/832/l2f20sw0/shirt/3/b/g/s-hlsh013507-highlander-original-imagdrcubg5hygkf.jpeg?q=70&crop=false"
                alt=""
                className="img-fluid caltalog_img"
              />              
            </div>
            <div className='similar_product_rating_container'>
              <p className='similar_product_rating'>4.3 <span className="material-symbols-outlined">star_half</span></p>

              </div>
            <div className="similar_product_name">
              <h6>Roadster</h6>
              <p>Mens Slim Tapered slim Tshirt</p>
            </div>
            <div className="similar_product_price" onClick={()=> navigate("/productdetails")}>
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
        <div className="similar_products">
          <div className="similar_product_view">
            <div className="similar_product_img" onClick={()=> navigate("/productdetails")}>
              <span className="badge badge-danger"> NEW </span>
              <img
                src="https://rukminim2.flixcart.com/image/832/832/l2f20sw0/shirt/g/i/i/s-hlsh013507-highlander-original-imagdrcuxzpzgpbz.jpeg?q=70&crop=false"
                alt=""
                className="img-fluid caltalog_img"
              />              
            </div>
            <div className='similar_product_rating_container'>
              <p className='similar_product_rating'>4.3 <span className="material-symbols-outlined">star_half</span></p>

              </div>
            <div className="similar_product_name">
              <h6>Roadster</h6>
              <p>Mens Slim Tapered slim Tshirt</p>
            </div>
            <div className="similar_product_price" onClick={()=> navigate("/productdetails")}>
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
        <div className="similar_products">
          <div className="similar_product_view">
            <div className="similar_product_img" onClick={()=> navigate("/productdetails")}>
              <span className="badge badge-danger"> NEW </span>
              <img
                src="https://rukminim2.flixcart.com/image/832/832/l2f20sw0/shirt/v/s/t/s-hlsh013507-highlander-original-imagdrcu5grajbzj.jpeg?q=70&crop=false"
                alt=""
                className="img-fluid caltalog_img"
              />              
            </div>
            <div className='similar_product_rating_container'>
              <p className='similar_product_rating'>4.3 <span className="material-symbols-outlined">star_half</span></p>

              </div>
            <div className="similar_product_name">
              <h6>Roadster</h6>
              <p>Mens Slim Tapered slim Tshirt</p>
            </div>
            <div className="similar_product_price" onClick={()=> navigate("/productdetails")}>
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
        <div className="similar_products">
          <div className="similar_product_view">
            <div className="similar_product_img" onClick={()=> navigate("/productdetails")}>
              <span className="badge badge-danger"> NEW </span>
              <img
                src="https://rukminim2.flixcart.com/image/832/832/l2f20sw0/shirt/7/b/o/s-hlsh013507-highlander-original-imagdrcu4jhtbuaf.jpeg?q=70&crop=false"
                alt=""
                className="img-fluid caltalog_img"
              />              
            </div>
            <div className='similar_product_rating_container'>
              <p className='similar_product_rating'>4.3 <span className="material-symbols-outlined">star_half</span></p>

              </div>
            <div className="similar_product_name">
              <h6>Roadster</h6>
              <p>Mens Slim Tapered slim Tshirt</p>
            </div>
            <div className="similar_product_price" onClick={()=> navigate("/productdetails")}>
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

export default SimilarProducts
