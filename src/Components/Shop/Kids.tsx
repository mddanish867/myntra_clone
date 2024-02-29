import "./Kids.css"
import TopHeader2 from '../Navigations/TopHeader2'
import KidsSlider from '../Slider/Banner/KidsSlider'
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"

function Kids() {
    const favouriteBrands =[
        {
          id:1,
          imgUrl:"https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/ab69d015-a975-4bda-990c-49e68938f6b31604926460802-19-FavBrands-AllenSollyJuniors.jpg"
        },
        {
          id:2,
          imgUrl:"https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/fee6018d-c5dd-44b7-b1d1-9b994c1ae1e21604926460545-13-FavBrands-UCB.jpg"
        },
        {
          id:3,
          imgUrl:"https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4d3f0e9d-1b7a-458e-b05b-75d1f51db0411604926460628-15-FavBrands-NautiNati.jpg"
        }
        ,
        {
          id:4,
          imgUrl:"https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/a505cf6b-beab-4bea-ba8d-06d7302486761604926460589-14-FavBrands-USPA.jpg"
        },
        {
          id:5,
          imgUrl:"https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/10/5843d479-8331-4c70-9e44-796b984a258e1604993081657-17-FavBrands-MiniKlub--1-.jpg"
        },
        {
          id:6,
          imgUrl:"https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/20/dc3e538c-bdbe-4df6-b38d-e628f1b18e211605856135445-ShopBybrands-lilpicks.jpg"
        },
        {
          id:7,
          imgUrl:"https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/0bb2a638-7a84-4e75-bbbb-152140d32fd51604926460667-16-FavBrands-Peppermint.jpg"
        },
        {
          id:8,
          imgUrl:"https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7a43b5cc-7b14-465a-9043-153fe35fb4d91604926460506-12-FavBrands-Gini_Jony.jpg"
        },
        {
          id:9,
          imgUrl:"https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4f79cccf-f8af-4a41-b531-a02ffc8bb1151604926460459-11-FavBrands-YK.jpg"
        }
      ]
    
      const iconicBrands = [
        {
          id:1,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f79446fb-46b9-455a-a6c0-4ffe3f58dd071604906586106-23-IconicBrands-H_M.jpg"
        },
        {
          id:2,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ba882da-667c-4f6e-a27e-292d0ffe477a1604906586228-26-IconicBrands-MangoKids.jpg"
        },
        {
          id:3,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/37147834-2bc5-4cdb-8eb9-68bf0fd48ca01604906586191-25-IconicBrands-Chicco.jpg"
        },
        {
          id:4,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f23d49ee-a598-4039-a6cd-33dab8a7e2011604906586056-22-IconicBrands-M_S.jpg"
        },
        {
          id:5,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/0f9ec937-304a-433a-9433-5409c556831c1604906586152-24-IconicBrands-TommyHilfiger.jpg"
        }
      ]
    
      const fashionEssentials = [
        {
          id:1,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f20838ab-108c-4fe6-bd74-0dc7551a2bbd1604906586589-34-Essentials-Masks.jpg"
        },
        {
          id:2,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/3df8a117-4db8-4cb6-ac0e-e60291d957241604906586646-35-Essentials-BabyCare.jpg"
        },
        {
          id:3,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/29baf945-9e5b-4f0e-bb05-0ce65c57f9c91604906586502-32-Essentials-Shorts.jpg"
        },
        {
          id:4,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/353fd453-6a17-45b9-b3da-a3dfd88121a31604906586547-33-Essentials-Valuepacks.jpg"
        },
        {
          id:5,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/c22c8c4b-753a-4f90-8def-511d2ed6caf31604906586731-37-Essentials-EthnicWear.jpg"
        },
        {
          id:6,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/efc4b19d-179f-4437-961c-839df50299a51604906586690-36-Essentials-Night_innerwear.jpg"
        },
        {
          id:7,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4e6eefd3-3355-4c1c-851e-48a49c97d5b31604906586407-30-Essentials-Onesies.jpg"
        },
        {
          id:8,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/33368b8b-8702-4108-96a9-b8fa5b7ed36f1604906586455-31-Essentials-FlipFlop_sandals.jpg"
        },
        {
          id:9,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ab2f5b3-441a-430c-a605-2ac9d06007c01604906586315-28-Essentials-Dresses.jpg"
        },
        {
          id:10,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/c75a2039-4199-4174-b1b9-fecd30f7d3f91604906586359-29-Essentials-Tshirts_Tops.jpg"
        }
      ]
    
      const exploreMore = [
        {
          id:1,
          imgUrl:"https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/630c5d84-b4fa-4ba8-aa92-c91cd134b9201604906586823-39-Banner-LogoMania.jpg"
        },
        {
          id:2,
          imgUrl:"https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7e5d76b3-afd1-4e82-8eee-179269cbab1c1604906586871-40-Banner-CharacterStore.jpg"
        },
        {
          id:3,
          imgUrl:"https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/cd843509-16fe-4437-a814-90f3eea6bb4b1604906586922-41-Banner-AllOrganic.jpg"
        },
        {
          id:4,
          imgUrl:"https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/d878e27a-f64d-45c9-bd9b-ee257b49894f1604906586980-42-Banner-EssentialStore.jpg"
        },
        {
          id:5,
          imgUrl:"https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/bb420f64-fea8-4d66-87b7-03c7f7fb6e621604906587041-43-Banner-Uniquely-Myntra.jpg"
        },{
          id:6,
          imgUrl:"https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/1ac6219d-54b8-484e-813b-c239bb9880141604906587091-44-Banner-ActiveWearStore.jpg"
        }
      ]
    
      const kidSpace = [
        {
          id:1,
          imgUrl:"https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/817ada39-86d3-4162-b10f-443c7d658f541604906587912-59b-Banner-KidsSpace.jpg"
        },
        {
          id:2,
          imgUrl:"https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/9906ea02-f0e5-40b8-b6db-ce3c5fd5fcf31604906587854-59a-Banner-KidsSpace.jpg"
        }
      ]
    
      const budgetBuys = [
        {
          id:1,
          imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/df528847-96b6-48cc-9104-064ad788804c1604906588040-61-BudgetBuys-TshirtsUnder499.jpg"
        },
        {
          id:2,
          imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/e42fbdcd-31cd-43de-b1eb-0f3f4351e08d1604906588093-62-BudgetBuys-DressesUnder799.jpg"
        },
        {
          id:3,
          imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/1abffc52-836d-4778-a034-a851b45e43c31604906588162-63-BudgetBuys-EthnicWearUnder999.jpg"
        },
        {
          id:4,
          imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/bb9520c5-20c6-496c-811e-4693bc2828b31604906588221-64-BudgetBuys-ShortsUnder599.jpg"
        },
        {
          id:5,
          imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/8430d7ff-a2f4-496a-bf90-b1c3a8cc7d231604906588272-65-BudgetBuys-ValuePacksUnder799.jpg"
        },{
          id:6,
          imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/af518c66-a610-4ab7-91bf-b343b9c1b8501604906588337-66-BudgetBuys-FootwearUnder699.jpg"
        }
      ]
    
      const shopAndMore = [
        {
          id:1,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/19/00da8e7c-c7b2-4386-be22-29e6ce7f93491626685981220-Top-Nav_Life-Style.jpg"
        },
        {
          id:2,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/3b15613e-57c1-451c-bc7d-66ea2ba0066a1604906588521-69-MoreBrands-PepeJeans.jpg"
        },
        {
          id:3,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/aa944cdd-33ff-4576-988d-fe8310cf9db91604906588585-70-MoreBrands-HRXU17.jpg"
        },
        {
          id:4,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/3bfd54e9-06ca-4a1c-8286-fc1eb73242661604906588708-72-MoreBrands-Sangria.jpg"
        },
        {
          id:5,
          imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/706a41d7-9d15-4b56-81be-2f02bac65ebb1604906588761-73-MoreBrands-Cherokee.jpg"
        }
    
      ]    
      
  return (
    <>
      <div className="header">
       <TopHeader2 />
     </div>
     <KidsSlider/>
     <div className="kids_biggest_deal">FAVOURITE BRANDS</div>
     <div className="kids_shop_by_biggest_deal">  
     {favouriteBrands.map((elem:any,index:any)=>(  
         <Link to="" key={index}>
         <img
           className="kids_biggest_deal_img"
           src={elem.imgUrl}
           alt="no image"
         ></img>
       </Link>
        ))}                
     </div>
     <div className="kids_iconic_brands">ICONIC BRANDS</div>
     <div className="kids_shop_by_iconic_brands">  
     {iconicBrands.map((elem:any,index:number)=>(  
         <Link to="" key={index}>
         <img
           className="kids_iconic_brands_img"
           src={elem.imgUrl}
           alt="no image"
         ></img>
       </Link>
        ))}                
     </div>
     <div className="kids_explore_top_brands">Fashion & Essentials</div>
     <div className="kids_shop_by_explore_to_brands">  
     {fashionEssentials.map((elem:any,index:number)=>(  
         <Link to=""key={index}>
         <img
           className="kids_explre_top_brands_img"
           src={elem.imgUrl}
           alt="no image"
         ></img>
       </Link>
        ))}                
     </div>
     <div className="kids_myntra_exploremore">Explore More</div>
     <div className="kids_shop_by_myntra_exploremore">  
     {exploreMore.map((elem:any,index:number)=>(  
         <Link to=""key={index}>
         <img
           className="kids_myntra_exploremore_img"
           src={elem.imgUrl}
           alt="no image"
         ></img>
       </Link>
        ))}                
     </div>
     <div className="kids_kids_space">The Kids Space</div>
     <div className="kids_shop_by_kids_space">  
     {kidSpace.map((elem:any,index:number)=>(  
         <Link to=""key={index}>
         <img
           className="kids_treding_kids_spaces_img"
           src={elem.imgUrl}
           alt="no image"
         ></img>
       </Link>
        ))}                
     </div>
     <div className="kids_budgetbuy">Budget Buys</div>
     <div className="kids_shop_by_budgetbuy">  
     {budgetBuys.map((elem:any,index:number)=>(  
         <Link to=""key={index}>
         <img
           className="kids_budgetbuy_img"
           src={elem.imgUrl}
           alt="no image"
         ></img>
       </Link>
        ))}                
     </div>
     <div className="kids_shop_more_brands">Shop More Brands</div>
     <div className="kids_shop_by_kids_shop_more_brands">  
     {shopAndMore.map((elem:any,index:number)=>(  
         <Link to=""key={index}>
         <img
           className="kids_shop_more_brands_img"
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

export default Kids
