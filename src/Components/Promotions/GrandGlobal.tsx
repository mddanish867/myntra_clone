import { useGetPromotionDetailsQuery } from "../../Apis/prmotionApi";
import MainLoader from "../Loader/MainLoader";
import "./GrandGlobal.css";
import { Link } from "react-router-dom";

function GrandGlobal() {
  const { data, isLoading } = useGetPromotionDetailsQuery(
    "GRAND GLOBAL BRANDS"
  );

  return (
    <>
      <div className="grand_global_heading"> GRAND GLOBAL BRANDS</div>
      {!isLoading ? (
        <div className="shop_bygrand_global_to_bag">
          {data.map((elem: any, index: number) => (
            <Link to="" key={index}>
              <img
                className="grand_global_img"
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

export default GrandGlobal;
