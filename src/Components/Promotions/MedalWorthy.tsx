import { Link } from "react-router-dom";
import "./MedalWorthy.css";
import { useGetPromotionDetailsQuery } from "../../Apis/prmotionApi";
import MainLoader from "../Loader/MainLoader";

function MedalWorthy() {
  const { data, isLoading } = useGetPromotionDetailsQuery(
    "MEDAL WORTHY BRANDS TO BAG"
  );
  return (
    <>
      <div className="medal_worthy_heading"> MEDAL WORTHY BRANDS TO BAG</div>
      {!isLoading ? (
        <div className="shop_by_medal_worthy_category_to_bag">
          {data.map((elem: any, index: number) => (
            <Link to="" key={index}>
              <img
                className="medal_worthy_img"
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

export default MedalWorthy;
