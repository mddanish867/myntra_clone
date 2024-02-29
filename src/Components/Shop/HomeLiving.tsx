import { Link } from "react-router-dom";
import TopHeader2 from "../Navigations/TopHeader2";
import HomeLivingSlider from "../Slider/Banner/HomeLivingSlider";
import "./HomeLiving.css";
import Footer from "../Footer/Footer";
function HomeLiving() {
  const niceToSeeYou = [
    {
    id:1,
    imgUrl:"https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg"
  },
  {
    id:2,
    imgUrl:"https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg"
  },
  {
    id:3,
    imgUrl:"https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg"
  },
  {
    id:4,
    imgUrl:"https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563866590-lamps.jpg"
  },
  {
    id:5,
    imgUrl:"https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563925069-kitchen.jpg"
  },
  {
    id:6,
    imgUrl:"https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563958962-bath.jpg"
  }
]
const trendsToTakeHome = [
  {
    id:1,
    imgUrl:"https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517485441956-Wedding-checklist.jpg"
  },
  {
    id:2,
    imgUrl:"https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592904-Home-page-Desktop_14.jpg"
  },
  {
    id:3,
    imgUrl:"https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592892-Home-page-Desktop_15.jpg"
  }
]
const featuredBrands = [
  {
    id:1,
    imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/13606c4a-14e9-48e4-a56a-a9c3979e7db21650971940091-swayam_logo_new_1980_x_1280.jpg"
  },
  {
    id:2,
    imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/ff6b8a0b-83fa-4f9f-bbb3-0fc51fd9454a1647517771374-updated-logo.jpg"
  },
  {
    id:3,
    imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/9830dff5-9056-402f-9bf0-ba3ead0abcaf1647499996169-SPACES---LOGO-01--BEDBATHRUGS-.jpg"
  },
  {
    id:4,
    imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/06f9e39d-a4d4-4ba4-b4cb-960c87ff5d511647499996189-M-S-Logo.jpg"
  },
  {
    id:5,
    imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/1/a38e440e-1ff7-4092-acbe-46d74b38384a1551443106457-Home-page-Desktop-Brands_13.jpg"
  },
] 
  return (
    <>
      <div className="header">
       <TopHeader2 />
     </div>
     <HomeLivingSlider/>
     <div className="homeliving_nice">Nice to See You, Come On In</div>
     <div className="homeliving_shop_by_nice">  
     {niceToSeeYou.map((elem:any,index:number)=>(  
         <Link to=""key={index}>
         <img
           className="homeliving_nice_img"
           src={elem.imgUrl}
           alt="no image"
         ></img>
       </Link>
        ))}                
     </div>
     <div className="kids_myntra_luxe_">
     <img
           className="home_living_trends"
           src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478281102-Home-page-Desktop_12.jpg"
           alt="no image"
         ></img>
     </div>
     <div className="homeliving_shop_by_trends_totake_home">  
     {trendsToTakeHome.map((elem:any,index:number)=>(  
         <Link to=""key={index}>
         <img
           className="homeliving_trends_totake_home"
           src={elem.imgUrl}
           alt="no image"
         ></img>
       </Link>
        ))}                
     </div>
     <div className="homeliving_featured_brands">Featured Brands</div>
     <div className="homeliving_shop_by_featured_brands">  
     {featuredBrands.map((elem:any,index:number)=>(  
         <Link to=""key={index}>
         <img
           className="homeliving_featured_brands_img"
           src={elem.imgUrl}
           alt="no image"
         ></img>
       </Link>
        ))}                
     </div>
     <div className="footer">
       <Footer />
     </div>
    </>
  )
}

export default HomeLiving
