import { Link } from "react-router-dom";
import { useGetPromotionDetailsQuery } from "../../Apis/prmotionApi";
import MainLoader from "../Loader/MainLoader";
import "./ShopByCategory.css";

function ShopByCategory() {
  const { data, isLoading } = useGetPromotionDetailsQuery("SHOP BY CATEGORY");
  return (
    <>
      <div className="shop_by_category_heading">SHOP BY CATEGORY</div>
      {!isLoading ? (
        <div className="shop_by_category">
          {data.map((elem: any, index: number) => (
            <Link to="" key={index}>
              <img
                className="sale_item_category"
                src={elem.promotionImage}
                alt="no image"
              ></img>
            </Link>
          ))}
        </div>
      ) : (
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <MainLoader />
        </div>
      )}
    </>
  );
}

export default ShopByCategory;
