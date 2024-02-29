import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import TopHeader2 from "../Navigations/TopHeader2";
import "./Catalogs.css";
import { useState } from "react";

function Catalogs() {
  const [brandflag, setbrandflag] = useState(false);
  const [categoryflag, setcategoryflag] = useState(false);
 const navigate = useNavigate();
  const handleBrandFlag = () => {
    if (brandflag === false) {
      setbrandflag(true);
    } else {
      setbrandflag(false);
    }
  };

  const handleCategoryFlag = () => {
    if (categoryflag === false) {
      setcategoryflag(true);
    } else {
      setcategoryflag(false);
    }
  };
  return (
    <>
      <div className="header">
        <TopHeader2 />
      </div>
      <div className="bg-default" style={{ marginTop: "23px" }}>
        <div className="container">
          <nav className="d-flex">
            <p
              className="mb-0"
              style={{
                fontSize: "13px",
                marginLeft: "-48px",
                marginTop: "-6px",
              }}
            >
              <Link to="" className="text-dark breadcrum_links">
                Home
              </Link>
              <span className="text-dark-50 mx-1 breadcrum_links"> / </span>
              <Link to="" className="text-dark breadcrum_links">
                Main Category
              </Link>
              <span className="text-dark-50 mx-1 breadcrum_links"> / </span>
              <Link to="" className="text-dark breadcrum_links">
                <u>Category</u>
              </Link>
              <span className="text-dark-50 mx-1 breadcrum_links"> / </span>
              <Link to="" className="text-dark breadcrum_links">
                <u>Sub Category</u>
              </Link>
              <span className="text-dark-50 mx-1 breadcrum_links"> / </span>
              <Link to="" className="text-dark breadcrum_links">
                <b>Product Name</b>
              </Link>
            </p>
          </nav>
        </div>
      </div>
      <div
        className="total_product_count"
        style={{ marginTop: "13px", display: "flex", flexDirection: "row" }}
      >
        <p className="my-2" style={{ fontSize: "15px", marginLeft: "27px" }}>
          <span style={{ fontWeight: 700 }}>Sub category</span> - 13283
        </p>
      </div>
      <div className="main_catalog">
        <div className="catlog_filter">
          <div className="filter-group">
            <div className="card-header" style={{ marginLeft: "9px" }}>
              <Link
                to="/catalogs"
                data-toggle="collapse"
                data-target="#collapse_1"
                aria-expanded="true"
                className=""
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "15px",
                }}
              >
                <p className="title">
                  <b>FILTERS</b>
                </p>
              </Link>
            </div>
            <div className="filter-content collapse show" id="collapse_1">
              <div className="card-body catalog_filter_body">
                <div className="catalog_brand_filter">
                  {brandflag ? (
                    <input
                      type="text"
                      className="filter_text"
                      placeholder="Search for Brand"
                      style={{
                        height: "30px",
                        borderRight: 0,
                        borderRadius: `${
                          brandflag === true ? "15px 0 0 15px" : ""
                        }`,
                      }}
                    />
                  ) : (
                    <p style={{ fontSize: "12px" }}>
                      <b>BRANDS</b>
                    </p>
                  )}

                  <div className="">
                    <button
                      className="btn btn-light filter_search_icone"
                      type="button"
                      style={{
                        marginLeft: `${brandflag === false ? "131px" : "0"}`,
                        height: "30px",
                        backgroundColor: "#f4f4f4",
                        borderRadius: `${
                          brandflag === true ? "0px 15px 15px 0px" : "30px"
                        }`,
                      }}
                      onClick={() => handleBrandFlag()}
                    >
                      {brandflag ? (
                        <span className="material-symbols-outlined catalog_clear_brand">
                          close
                        </span>
                      ) : (
                        <span className="material-symbols-outlined filter_icon">
                          search
                        </span>
                      )}
                    </button>
                  </div>
                </div>
                <ul className="list_menu">
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        U.S. Polo
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        Aldo
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        Nautica
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        Bewakoof
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        Crock
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        Nike
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        Puma
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="filter-content collapse show" id="collapse_1">
              <div className="card-body catalog_filter_body">
                <div className="catalog_brand_filter">
                  {categoryflag ? (
                    <input
                      type="text"
                      className="filter_text"
                      placeholder="Search for Categories"
                      style={{
                        height: "30px",
                        borderRight: 0,
                        borderRadius: `${
                          categoryflag === true ? "15px 0 0 15px" : ""
                        }`,
                      }}
                    />
                  ) : (
                    <p style={{ fontSize: "12px" }}>
                      <b>CATEGORIES</b>
                    </p>
                  )}

                  <div className="catalog_filter_icon">
                    <button
                      className="btn btn-light filter_search_icone"
                      type="button"
                      style={{
                        marginLeft: `${categoryflag === false ? "111px" : "0"}`,
                        height: "30px",
                        backgroundColor: "#f4f4f4",
                        borderRadius: `${
                          categoryflag === true ? "0px 15px 15px 0px" : "30px"
                        }`,
                      }}
                      onClick={() => handleCategoryFlag()}
                    >
                      {categoryflag ? (
                        <span className="material-symbols-outlined catalog_clear_brand">
                          close
                        </span>
                      ) : (
                        <span className="material-symbols-outlined filter_icon">
                          search
                        </span>
                      )}
                    </button>
                  </div>
                </div>
                <ul className="list_menu">
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        U.S. Polo
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        Aldo
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        Nautica
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        Bewakoof
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        Crock
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        Nike
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ width: "17px" }}
                      />
                      <div
                        className="custom-control-label"
                        style={{ marginLeft: "10px", fontSize: "13px" }}
                      >
                        Puma
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>{" "}
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="catalog_products">
          <div className="catalog_product_view">
            <div className="" onClick={()=> navigate("/productdetails")}>
              <span className="badge badge-danger"> NEW </span>
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7319901/2018/9/18/ede2810e-0a86-43aa-a7aa-27d3d95a9b5f1537268175318-Libas-Women-Pink--Grey-Printed-Kurta-with-Palazzos--Dupatta-4071537268175098-1.jpg"
                alt=""
                className="img-fluid caltalog_img"
              />
            </div>
            <div className="catalog_product_name">
              <h6>Roadster</h6>
              <p>Mens Slim Tapered slim Tshirt</p>
            </div>

            <div className="catalog_wishlist">
              <span className="material-symbols-outlined catalog_icon">
                favorite
              </span>
              <span className="catalog_button_name mx-1">Wishlist</span>
            </div>

            <div className="catalog_product_price" onClick={()=> navigate("/productdetails")}>
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
        <div className="catalog_products">
          <div className="catalog_product_view">
            <div className="">
              <span className="badge badge-danger"> NEW </span>
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20695836/2022/11/10/ba1724c2-c606-481c-a0ca-63424b61a8661668078028270WomensRayonPrintedEmbroideredKurtaWithPantAndDupatta1.jpg"
                alt=""
                className="img-fluid caltalog_img"
              />
            </div>
            <div className="catalog_product_name">
              <h6>Roadster</h6>
              <p>Mens Slim Tapered slim Tshirt</p>
            </div>

            <div className="catalog_wishlist">
              <span className="material-symbols-outlined catalog_icon">
                favorite
              </span>
              <span className="catalog_button_name mx-1">Wishlist</span>
            </div>

            <div className="catalog_product_price">
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
        <div className="catalog_products">
          <div className="catalog_product_view">
            <div className="">
              <span className="badge badge-danger"> NEW </span>
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25530934/2023/10/18/2a9225fc-fe89-42f4-9462-c5fdfb26840c1697623918434KALINIWomenMaroonPaisleyPrintedEmpireGottaPattiKurtawithTrou1.jpg"
                alt=""
                className="img-fluid caltalog_img"
              />
            </div>
            <div className="catalog_product_name">
              <h6>Roadster</h6>
              <p>Mens Slim Tapered slim Tshirt</p>
            </div>

            <div className="catalog_wishlist">
              <span className="material-symbols-outlined catalog_icon">
                favorite
              </span>
              <span className="catalog_button_name mx-1">Wishlist</span>
            </div>

            <div className="catalog_product_price">
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
        <div className="catalog_products">
          <div className="catalog_product_view">
            <div className="">
              <span className="badge badge-danger"> NEW </span>
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg"
                alt=""
                className="img-fluid caltalog_img"
              />
            </div>
            <div className="catalog_product_name">
              <h6>Roadster</h6>
              <p>Mens Slim Tapered slim Tshirt</p>
            </div>

            <div className="catalog_wishlist">
              <span className="material-symbols-outlined catalog_icon">
                favorite
              </span>
              <span className="catalog_button_name mx-1">Wishlist</span>
            </div>

            <div className="catalog_product_price">
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
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Catalogs;
