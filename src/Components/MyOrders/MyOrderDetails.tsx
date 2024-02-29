import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import TopHeader2 from "../Navigations/TopHeader2";
import "./MyOrderDetails.css";

function MyOrderDetails() {
  const navigate = useNavigate();
  return (
    <>
      <div className="_myorder_details_header">
        <TopHeader2 />
      </div>

      <div className="order_details_header">
        <p>Account</p>
        <span>danish akhtar</span>
      </div>

      <div className="order_details_content">
        <div className="my_order_details_head">
          <div className="btn_order_details_overview">
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "black" }}
            >
              Overview
            </Link>
          </div>

          <div className="order_deails_return">
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

          <div className="order_details_credits">
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

          <div className="order_details_account">
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

        <div className="order_details_main">
          <div className="order_details_img_name_size">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/12816480/2020/12/8/9ba523c2-fe7f-44df-b0b6-f72621fe40a81607424596953-HERENOW-Men-Tshirts-1241607424595550-1.webp"
              alt=""
              onClick={() => navigate("/productdetails")}
            />
            <h6>HERE&NOW</h6>
            <p>Mens Nevy Blue Round Mens T-shirt</p>
            <span>SIZE:S</span>
          </div>

          {/* Live Order Tracking */}
          <div className="order_details_tracking">
            <div>
              <span>Arriving by</span>
              <p>by Sat, 21 Jan</p>
            </div>
            <div> Transit</div>
            <div>
              <span>Order placed</span>
              <p>on 12 Jan</p>
            </div>
          </div>

          {/* cancel order button */}
          <div className="cancer_purchased_order" onClick={()=>navigate("/cancelorder")}>
            <span className="material-symbols-outlined">cancel</span>
            <p>Cancel</p>
          </div>

          {/* Similar Item */}
          <div className="similar_Item">
            <span>Items that go well this item</span>
            <div className="suggested_sub_header">
              <div className="scroll">
                <div className="suggested_item_main">
                  <div className="suggested_item">
                    <img
                      src="https://assets.myntassets.com/h_200,q_100,w_190/v1/assets/images/productimage/2020/9/19/a87b2e7d-9995-4355-98e3-10c188bce1121600465577948-1.jpg"
                      alt=""
                    />
                    <div className="suggested_heart_icon">
                      <p>WildHorn</p>
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <span>Mens Brown & Orange...</span>
                  </div>
                  <div className="suggested_icon_price">
                    <span>&#8377; 749</span>
                    <del>&#8377; 2999</del>
                    <p>(75% OFF)</p>
                  </div>
                </div>
                <div className="suggested_item_main">
                  <div className="suggested_item">
                    <img
                      src="https://assets.myntassets.com/h_200,q_100,w_190/v1/assets/images/22809160/2023/4/18/1e3a0812-7ac4-4b1d-bcf8-30844bf9a14c1681811556330MenSolidCrewNeckRegularFitLoungeT-shirt1.jpg"
                      alt=""
                    />
                    <div className="suggested_heart_icon">
                      <p>WildHorn</p>
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <span>Mens Brown & Orange...</span>
                  </div>
                  <div className="suggested_icon_price">
                    <span>&#8377; 749</span>
                    <del>&#8377; 2999</del>
                    <p>(75% OFF)</p>
                  </div>
                </div>
                <div className="suggested_item_main">
                  <div className="suggested_item">
                    <img
                      src="https://assets.myntassets.com/h_200,q_100,w_190/v1/assets/images/16368658/2021/12/4/6f117ea5-6fec-4b9b-9f4f-0b3b032f72431638606492037LoungeTshirts1.jpg"
                      alt=""
                    />
                    <div className="suggested_heart_icon">
                      <p>WildHorn</p>
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <span>Mens Brown & Orange...</span>
                  </div>
                  <div className="suggested_icon_price">
                    <span>&#8377; 749</span>
                    <del>&#8377; 2999</del>
                    <p>(75% OFF)</p>
                  </div>
                </div>
                <div className="suggested_item_main">
                  <div className="suggested_item">
                    <img
                      src="https://assets.myntassets.com/h_200,q_100,w_190/v1/assets/images/20221358/2022/9/30/bfc363ce-ba91-4e9f-8a60-f57500338dda1664519588106MARKQUESMenSolidAccessoryGiftSet1.jpg"
                      alt=""
                    />
                    <div className="suggested_heart_icon">
                      <p>WildHorn</p>
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <span>Mens Brown & Orange...</span>
                  </div>
                  <div className="suggested_icon_price">
                    <span>&#8377; 749</span>
                    <del>&#8377; 2999</del>
                    <p>(75% OFF)</p>
                  </div>
                </div>
                <div className="suggested_item_main">
                  <div className="suggested_item">
                    <img
                      src="https://assets.myntassets.com/h_200,q_100,w_190/v1/assets/images/16753596/2022/1/11/6c392b23-6631-43c0-b2ba-6b33925a00be1641873958249TrackPants1.jpg"
                      alt=""
                    />
                    <div className="suggested_heart_icon">
                      <p>WildHorn</p>
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <span>Mens Brown & Orange...</span>
                  </div>
                  <div className="suggested_icon_price">
                    <span>&#8377; 749</span>
                    <del>&#8377; 2999</del>
                    <p>(75% OFF)</p>
                  </div>
                </div>
                <div className="suggested_item_main">
                  <div className="suggested_item">
                    <img
                      src="https://assets.myntassets.com/h_200,q_100,w_190/v1/assets/images/15511840/2021/9/17/7f714016-8a43-4eaf-a25a-5b703103ddfc1631871929354LoungeTshirts1.jpg"
                      alt=""
                    />
                    <div className="suggested_heart_icon">
                      <p>WildHorn</p>
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <span>Mens Brown & Orange...</span>
                  </div>
                  <div className="suggested_icon_price">
                    <span>&#8377; 749</span>
                    <del>&#8377; 2999</del>
                    <p>(75% OFF)</p>
                  </div>
                </div>
                <div className="suggested_item_main">
                  <div className="suggested_item">
                    <img
                      src="https://assets.myntassets.com/h_200,q_100,w_190/v1/assets/images/21596850/2023/1/18/0d554bcd-a136-48bd-bd51-e40053826ad91674036440991Watches1.jpg"
                      alt=""
                    />
                    <div className="suggested_heart_icon">
                      <p>WildHorn</p>
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <span>Mens Brown & Orange...</span>
                  </div>
                  <div className="suggested_icon_price">
                    <span>&#8377; 749</span>
                    <del>&#8377; 2999</del>
                    <p>(75% OFF)</p>
                  </div>
                </div>
                <div className="suggested_item_main">
                  <div className="suggested_item">
                    <img
                      src="https://assets.myntassets.com/h_200,q_100,w_190/v1/assets/images/16754198/2022/1/10/52e0fca6-6a2b-4f80-8daa-8a64ea7c5c531641817581645DezireCraftsMenBlackTextured1.jpg"
                      alt=""
                    />
                    <div className="suggested_heart_icon">
                      <p>WildHorn</p>
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <span>Mens Brown & Orange...</span>
                  </div>
                  <div className="suggested_icon_price">
                    <span>&#8377; 749</span>
                    <del>&#8377; 2999</del>
                    <p>(75% OFF)</p>
                  </div>
                </div>
                <div className="suggested_item_main">
                  <div className="suggested_item">
                    <img
                      src="https://assets.myntassets.com/h_200,q_100,w_190/v1/assets/images/productimage/2020/3/19/de4ca1c6-647a-4315-abd4-aa1780bae8a41584571322095-1.jpg"
                      alt=""
                    />
                    <div className="suggested_heart_icon">
                      <p>WildHorn</p>
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <span>Mens Brown & Orange...</span>
                  </div>
                  <div className="suggested_icon_price">
                    <span>&#8377; 749</span>
                    <del>&#8377; 2999</del>
                    <p>(75% OFF)</p>
                  </div>
                </div>
                <div className="suggested_item_main">
                  <div className="suggested_item">
                    <img
                      src="https://assets.myntassets.com/h_200,q_100,w_190/v1/assets/images/14083884/2021/4/14/acf2be59-90a6-4e04-96b6-8076636711e71618407734616LOREMMenSilver-TonedAnalogueWatch1.jpg"
                      alt=""
                    />
                    <div className="suggested_heart_icon">
                      <p>WildHorn</p>
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <span>Mens Brown & Orange...</span>
                  </div>
                  <div className="suggested_icon_price">
                    <span>&#8377; 749</span>
                    <del>&#8377; 2999</del>
                    <p>(75% OFF)</p>
                  </div>
                </div>
                <div className="suggested_item_main">
                  <div className="suggested_item">
                    <img
                      src="https://assets.myntassets.com/h_200,q_100,w_190/v1/assets/images/12998524/2020/12/9/b8391c56-946e-4899-b8b6-f0dc19963d771607511934564-QUARANTINE-Men-Lounge-Tshirts-6391607511932250-1.jpg"
                      alt=""
                    />
                    <div className="suggested_heart_icon">
                      <p>WildHorn</p>
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <span>Mens Brown & Orange...</span>
                  </div>
                  <div className="suggested_icon_price">
                    <span>&#8377; 749</span>
                    <del>&#8377; 2999</del>
                    <p>(75% OFF)</p>
                  </div>
                </div>
                <div className="suggested_item_main">
                  <div className="suggested_item">
                    <img
                      src="https://assets.myntassets.com/h_200,q_100,w_190/v1/assets/images/21964618/2023/2/14/eb0f3614-34a4-4239-a850-9dfd18fa6d4e1676366251025PacificGoldMenBlackLeatherTwoFoldWallet1.jpg"
                      alt=""
                    />
                    <div className="suggested_heart_icon">
                      <p>WildHorn</p>
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <span>Mens Brown & Orange...</span>
                  </div>
                  <div className="suggested_icon_price">
                    <span>&#8377; 749</span>
                    <del>&#8377; 2999</del>
                    <p>(75% OFF)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Change delivry addresses */}
          <div className="myorder_change_delivery_address">
            <h6>Delivery Address</h6>
            <span>Md Danish Akhtar : 7985857756</span>
            <p>
              Vill-Zameen Budhan, Post-Chiraiyakot, District-Mau, Uttar Pradesh
              - 276129
            </p>
            <button>Change Delivery Address</button>
          </div>

          {/* total Order Price */}
          <div className="total_order_price_main">
            <div className="total_order_price">
              <div className="total_order_price_header">
                <h6>Toal Order Price</h6>
                <span>
                  You saved <b className="text-success">&#8377; 410.00</b> on
                  this order
                </span>
              </div>
              <div className="total_order_price_cash">
                <h6>&#8377; 195.00</h6>
                <span>View Breakup</span>
              </div>
            </div>
            <div className="pay_on_delivery">
              <span className="material-symbols-outlined">money</span>
              <p>pay on delivery</p>
            </div>
          </div>

          {/* Seller name */}

          <div className="seller_name">
            <span>Item sold by: Omnitech Retail</span>
          </div>

          {/* Updates sent to */}
          <div className="updates_sending_header">
            <h6>Updates sent to </h6>
            <div className="updates_sender_number">
              <span className="material-symbols-outlined">settings_phone</span>
              <p>7985857756</p>
            </div>
          </div>

          {/* Order Tracking Id */}
          <div className="order_tractking_id">
            <span>Order ID # 1257352 89133775035701</span>
          </div>
        </div>
      </div>

      <div className="footer" style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </>
  );
}

export default MyOrderDetails;
