import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import TopHeader2 from "../Navigations/TopHeader2";
import "./ProductDetails.css";
import SimilarProducts from "../Recommendation/SimilarProducts";
import ShopTheLook from "../Recommendation/ShopTheLook";
import CustomerAlsoLiked from "../Recommendation/CustomerAlsoLiked";

function ProductDetails() {
  return (
    <>
      <div className="header">
        <TopHeader2 />
      </div>
      <div className="bg-default" style={{ marginTop: "5px" }}>
        <div className="py-4">          
            <h6 className="mb-0">
              <Link to="" className="text-dark breadcrum_links">
                <u style={{fontWeight:400,fontSize:"13px",textDecoration:"none"}}>Home</u>
              </Link>
              <span className="text-dark-50 mx-1 breadcrum_links" style={{fontWeight:400,fontSize:"13px",textDecoration:"none"}}> / </span>
              <Link to="" className="text-dark breadcrum_links">
                <u style={{fontWeight:400,fontSize:"13px",textDecoration:"none"}}>Main Category</u>
              </Link>
              <span className="text-dark-50 mx-1 breadcrum_links" style={{fontWeight:400,fontSize:"13px",textDecoration:"none"}}> / </span>
              <Link to="" className="text-dark breadcrum_links">
                <u style={{fontWeight:400,fontSize:"13px",textDecoration:"none"}}>Category</u>
              </Link>
              <span className="text-dark-50 mx-1 breadcrum_links" style={{fontWeight:400,fontSize:"13px",textDecoration:"none"}}> / </span>
              <Link to="" className="text-dark breadcrum_links">
                <u style={{fontWeight:400,fontSize:"13px",textDecoration:"none"}}>Sub Category</u>
              </Link>
              <span className="text-dark-50 mx-1 breadcrum_links" style={{fontWeight:400,fontSize:"13px",textDecoration:"none"}}> / </span>
              <Link to="" className="text-dark breadcrum_links" style={{fontSize:"13px"}}>
                <b>Product Name</b>
              </Link>
            </h6>
          
        </div>
      </div>

      <div className="product_details">
        <div className="product_detail_image">
          <div className="category_items">
            <Link to="">
              <img
                className="sale_item"
                src="https://rukminim2.flixcart.com/image/832/832/l2f20sw0/shirt/3/b/g/s-hlsh013507-highlander-original-imagdrcubg5hygkf.jpeg?q=70&crop=false"
                alt="no image"
              ></img>
            </Link>
            <Link to="">
              <img
                className="sale_item"
                src="https://rukminim2.flixcart.com/image/832/832/l2f20sw0/shirt/g/i/i/s-hlsh013507-highlander-original-imagdrcuxzpzgpbz.jpeg?q=70&crop=false"
                alt="no image"
              ></img>
            </Link>
            <Link to="">
              <img
                className="sale_item"
                src="https://rukminim2.flixcart.com/image/832/832/l2f20sw0/shirt/9/p/p/s-hlsh013507-highlander-original-imagdrcufrhgtytk.jpeg?q=70&crop=false"
                alt="no image"
              ></img>
            </Link>
            <Link to="">
              <img
                className="sale_item"
                src="https://rukminim2.flixcart.com/image/832/832/l2f20sw0/shirt/5/a/u/s-hlsh013507-highlander-original-imagdrcuz8mbcff8.jpeg?q=70&crop=false"
                alt="no image"
              ></img>
            </Link>
            <Link to="">
              <img
                className="sale_item"
                src="https://rukminim2.flixcart.com/image/832/832/l2f20sw0/shirt/v/s/t/s-hlsh013507-highlander-original-imagdrcu5grajbzj.jpeg?q=70&crop=false"
                alt="no image"
              ></img>
            </Link>
            <Link to="">
              <img
                className="sale_item"
                src="https://rukminim2.flixcart.com/image/832/832/l2f20sw0/shirt/7/b/o/s-hlsh013507-highlander-original-imagdrcu4jhtbuaf.jpeg?q=70&crop=false"
                alt="no image"
              ></img>
            </Link>
          </div>
        </div>
        <div className="product_details_link">
          <main className="col-12">
            <h4 className="title text-dark">Quality Men's Hoodie for Winter</h4>
            <p style={{ fontSize: "20px", color: "gray" }}>
              Typography Printed Pure Cotton Slim Fit T-shirt
            </p>
            <div className="mb-3 price_details" style={{ marginLeft: 0 }}>
              <span
                className="h5 mx-1"
                style={{ fontWeight: 700, color: "black" }}
              >
                &#8377;552
              </span>
              <span className="text-muted mx-1" style={{ fontWeight: 700 }}>
                {" "}
                MRP &#8377;<del>758</del>
              </span>
              <span
                className="h5 mx-1"
                style={{
                  fontWeight: 700,
                  color: "#f58742",
                  textTransform: "uppercase",
                }}
              >
                (off 30 %)
              </span>
            </div>
            <div className="d-flex flex-row my-3">
              <span className="text-success" style={{ fontWeight: 600 }}>
                inclusive of all taxes
              </span>
            </div>

            <div className="size_radio">
              <div className="size_name_header my-2">Select Size</div>
              <div
                className="filter-content collapse show my-1"
                id="collapse_4"
              >
                <div className="card-body">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="primary-outlined-xs"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-danger product_size_box"
                    htmlFor="primary-outlined-xs"
                  >
                    XS
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="primary-outlined-s"
                  />
                  <label
                    className="btn btn-outline-danger mx-2 product_size_box"
                    htmlFor="primary-outlined-s"
                  >
                    S
                  </label>
                  <input
                    type="radio"
                    className="btn-check "
                    name="options-outlined"
                    id="primary-outlined-l"
                  />
                  <label
                    className="btn btn-outline-danger mx-2 product_size_box"
                    htmlFor="primary-outlined-l"
                  >
                    L
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="primary-outlined-xl"
                  />
                  <label
                    className="btn btn-outline-danger mx-2 product_size_box"
                    htmlFor="primary-outlined-xl"
                  >
                    XL
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="primary-outlined-xxl"
                  />
                  <label
                    className="btn btn-outline-danger mx-2 product_size_box"
                    htmlFor="primary-outlined-xxl"
                  >
                    XXL
                  </label>
                </div>
              </div>
            </div>
            <div className="product_buy_wish_btn">
              <Link to="" className="btn btn-default1 add_to_bag_btn_product">
                <span className="material-symbols-outlined mx-1">
                  shopping_bag
                </span>
                ADD TO BAG
              </Link>
              <Link to="" className="btn btn-default1 wishlist_btn">
                <span className="material-symbols-outlined mx-1">favorite</span>
                WISHLIST
              </Link>
            </div>
            <hr />
            <div
              style={{ display: "flex", fontSize: "14px", fontWeight: "700" }}
            >
              <p>DELIVERY OPTIONS</p>
              <span
                style={{ fontWeight: 400 }}
                className="material-symbols-outlined mx-2"
              >
                local_shipping
              </span>
            </div>
            <div className="delivery_check">
              <input
                className="pin_check"
                type="text"
                placeholder="Enter pincode"
              ></input>
              <Link className="pin_check_btn" to="">
                Check
              </Link>
            </div>
            <div className="my-2" style={{ fontSize: "12px" }}>
              <span>
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability
              </span>
            </div>
            <div className="product_info">
              <span>100% Original Products</span>
              <span>Pay on delivery might be available</span>
              <span>Easy 14 days returns and exchanges</span>
              <span>Try & Buy might be available</span>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "14px",
                fontWeight: "700",
                marginTop: "40px",
              }}
            >
              <p>BEST OFFERS</p>
              <span className="material-symbols-outlined mx-2">sell</span>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              <p>
                Best Price:<span style={{ color: "#fc9d03" }}> Rs. 452</span>{" "}
              </p>
            </div>

            <div className="offer_link" style={{ marginLeft: "-14px" }}>
              <ul>
                <li>
                  Applicable on: Orders above Rs. 1099 (only on first purchase)
                </li>
                <li>
                  Coupon code: <b>MYNTRA200</b>
                </li>
                <li>
                  Coupon Discount: Rs. 100 off (check cart for final savings)
                </li>
              </ul>
            </div>

            <div>
              <Link
                to=""
                style={{
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: "700",
                  textDecoration: "none",
                  color: "#f54e77",
                }}
              >
                View Eligible Products
              </Link>
              <p
                style={{
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: "700",
                  marginTop: "17px",
                }}
              >
                EMI option available
              </p>
              <ul style={{ marginLeft: "-14px", marginTop: "-10px" }}>
                <li>EMI starting from Rs.26/month</li>
              </ul>
              <Link
                to=""
                style={{
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: "700",
                  textDecoration: "none",
                  color: "#f54e77",
                  marginTop: "-8px",
                }}
              >
                View Plan
              </Link>
            </div>

            <hr style={{ marginTop: "45px", marginBottom: "45px" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: "700",
                  flexDirection: "row",
                }}
              >
                <p>PRODUCT DETAILS</p>
                <span className="material-symbols-outlined mx-2">
                  sticky_note_2
                </span>
              </div>
              <p>Grey & white T-shirt for men</p>
              <p style={{ marginTop: "-20px" }}>Typography printed</p>
              <p style={{ marginTop: "-20px" }}>Regular length</p>
              <p style={{ marginTop: "-20px" }}>Round neck</p>
              <p style={{ marginTop: "-20px" }}>Sleeveless, no sleeves</p>
              <p style={{ marginTop: "-20px" }}>Knitted cotton fabric</p>

              <p
                style={{
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: "700",
                  flexDirection: "row",
                }}
              >
                Size & Fit
              </p>
              <p style={{ marginTop: "-10px" }}>Slim Fit</p>
              <p style={{ marginTop: "-20px" }}>
                The model (height 6') is wearing a size M
              </p>
              <p
                style={{
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: "700",
                  flexDirection: "row",
                }}
              >
                Material & Care
              </p>
              <p style={{ marginTop: "-10px" }}>100% Cotton</p>
              <p style={{ marginTop: "-20px" }}>Machine Wash</p>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: "700",
                  marginTop: "40px",
                }}
              >
                <p>SPECIFICATIONS</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "start",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <dd className="col-6" style={{ fontSize: "12px" }}>
                    Type
                  </dd>
                  <dd className="col-6">Regular</dd>
                  <hr style={{ marginTop: "5px" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "space-between",
                  }}
                >
                  <dd className="col-6" style={{ fontSize: "12px" }}>
                    Color
                  </dd>
                  <dd className="col-6">Brown</dd>
                  <hr style={{ marginTop: "5px" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "space-between",
                  }}
                >
                  <dd className="col-6" style={{ fontSize: "12px" }}>
                    Material
                  </dd>
                  <dd className="col-6">Cotton</dd>
                  <hr style={{ marginTop: "5px" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "space-between",
                  }}
                >
                  <dd className="col-6" style={{ fontSize: "12px" }}>
                    Brand
                  </dd>
                  <dd className="col-6">Reebook</dd>
                  <hr style={{ marginTop: "5px" }} />
                </div>
              </div>
              <Link
                to=""
                style={{
                  display: "flex",
                  fontSize: "12px",
                  fontWeight: "700",
                  textDecoration: "none",
                  color: "#f54e77",
                  marginTop: "-8px",
                }}
              >
                See More
              </Link>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: "700",
                  marginTop: "40px",
                }}
              >
                <p>Complete The Look</p>
              </div>
              <p>
                Everyday becomes brighter and better with this collection of
                towels from Nautica. Add color to your quotidian chores with
                this easy to maintain bath linen collection.
              </p>
            </div>
            <hr style={{ marginTop: "35px", marginBottom: "35px" }} />

            <div>
              <p>
                Product Code: <b>25851010</b>
              </p>
              <p>
                Seller:{" "}
                <Link to="" className="seller_name">
                  FBAR
                </Link>
              </p>
              <p className="supplier_info">
                <b>View Supplier Information</b>
              </p>
            </div>

            <hr />
          </main>
        </div>
      </div>

      <div className="similar_products_main">
        <SimilarProducts />
      </div>

      <div className="shopthe_look_main">
        <ShopTheLook />
      </div>

      <div className="shop_more_link">
        <Link to={""} className="shop_mor_by_brands">
          MORE SHIRTS BY ROADSTER{" "}
          <span className="material-symbols-outlined mx-2">chevron_right</span>
        </Link>
        <Link to={""} className="shop_mor_by_color">
          MORE BLUE SHIRTS{" "}
          <span className="material-symbols-outlined mx-2">chevron_right</span>
        </Link>
        <Link to={""} className="shop_mor_by_category">
          MORE SHIRTS{" "}
          <span className="material-symbols-outlined mx-2">chevron_right</span>
        </Link>
      </div>

      <div className="customer_also_liked_main">
        <CustomerAlsoLiked />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default ProductDetails;
