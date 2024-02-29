import React from 'react'
import TopHeader2 from '../Navigations/TopHeader2'
import "./Men.css";
import MensSlider from '../Slider/Banner/MensSlider';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
function Men() {
  const shoponBiggestdealBrands =[
    {
      id:1,
      imgUrl:"https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg"
    },
    {
      id:2,
      imgUrl:"https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg"
    },
    {
      id:3,
      imgUrl:"https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg"
    }
    ,
    {
      id:4,
      imgUrl:"https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg"
    },
    {
      id:5,
      imgUrl:"https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg"
    },
    {
      id:6,
      imgUrl:"https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg"
    },
    {
      id:7,
      imgUrl:"https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg"
    },
    {
      id:8,
      imgUrl:"https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg"
    }
  ]

  const categoryToBag = [
    {
      id:1,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg"
    },
    {
      id:2,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg"
    },
    {
      id:3,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg"
    },
    {
      id:4,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg"
    },
    {
      id:5,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg"
    },
    {
      id:6,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg"
    }
  ]

  const exploreTopBrands = [
    {
      id:1,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg"
    },
    {
      id:2,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/c9f66558-feab-4d76-aa3c-adc68d81dce21598348260415-Levis.jpg"
    },
    {
      id:3,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg"
    },
    {
      id:4,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg"
    },
    {
      id:5,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg"
    }
  ]

  const myntraLuxe = [
    {
      id:1,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/85fa3b9b-9e7c-43a5-9de0-1cb32f3180151637149111314-MP-Farah.jpg"
    },
    {
      id:2,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/480f4bde-1d72-4517-be6d-af2dfef7528e1637149111337-MP-Collective.jpg"
    },
    {
      id:3,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/cadd8457-b8ec-464c-9bc6-6082a24075591637149111331-MP-OriginalPenguin.jpg"
    },
    {
      id:4,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/e185b9a2-0c12-4379-a85c-a4ceed2fe9931637149111326-MP-D1Milano.jpg"
    },
    {
      id:5,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/ab5c5029-d24f-4789-979c-d4910801ea191637149111321-MP-HUGOBoss.jpg"
    },
    {
      id:6,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/621ce33b-3383-4347-99bf-2038b95f27151637149369429-MP-Ducati.jpg"
    }
  ]

  const trendingIndianWear = [
    {
      id:1,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a9f68785-e282-425a-b270-c978c387b0f31597840342635-Content-ethnicwear-color-whites.jpg"
    },
    {
      id:2,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/0d1e0a28-3088-4719-a692-4cdaa7a33cc71597840342726-Content-ethnicwear-occasion-casuallook.jpg"
    },
    {
      id:3,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9d248917-d1b0-4910-8de0-4ed7c2b4af8e1595935030939-Content-ethnicwear-trends-printedkurtaset.jpg"
    },
    {
      id:4,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/83d9ca97-4aa3-46ce-bd28-b135d3b94a021595935030673-Content-ethnicwear-essentials-everydaykurtas.jpg"
    },
    {
      id:5,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9e4fb95e-6268-49c5-9ed1-e6b1bd4b5efd1595935030880-Content-ethnicwear-trend-fashionmeetcomfort.jpg"
    }
  ]

  const trendingSportWear = [
    {
      id:1,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8becef46-f822-4874-b92a-a7cc7f58819d1597841103131-Content-sportswear-brand-nike.png"
    },
    {
      id:2,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7472ab66-adf2-4d1d-9379-4770a73c1efe1597841103172-Content-sportswear-brand-proline.png"
    },
    {
      id:3,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/65bafbc5-f83b-4158-8168-f7553043814c1597841103082-Content-sportswear-brand-Asics.png"
    },
    {
      id:4,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4aa58fe6-8c61-4e37-9fa8-436c31aecb211597840566511-Content-sportswear-essentials-activewear.png"
    },
    {
      id:5,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/eedc6c0c-c28b-4ccb-952f-a302c96c59ba1598030134978-Content-mostselling-Sportswear-Nikerevolution.jpeg"
    }
  ]

  const trendingFootWear = [
    {
      id:1,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/647e166b-f645-443a-892d-df84ee345e781595935221231-Content-Footwear-men-Neutral-shades.jpg"
    },
    {
      id:2,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9654b0f9-42a9-4111-a4b7-27b26c5a22d41595935221284-Content-Footwear-Unisex-Sneakers-for-Dancers_.jpg"
    },
    {
      id:3,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/be0b0d6f-7c72-4752-859f-ee44902ff7171597912691244-Content-footwear-trend-sneakersmen.jpg"
    },
    {
      id:4,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a84d687a-1ff3-4b06-a47b-48021ba7cec11597840342959-Content-footwear-occasion-outbackoutdoor.png"
    },
    {
      id:5,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/49dd1ce9-d627-4c6e-b544-4be7e1f24a091597840342867-Content-footwear-essentials-flipflops.jpg"
    }

  ]

  const trendingAssoceries = [
    {
      id:1,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/2bcf907c-bc21-44cb-9021-7575a963b0ef1595934830671-Content-Accesories-Unisex-True-wirless-lets-get-free.jpg"
    },    
    {
      id:2,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/bddd9c73-e4f1-43c0-a073-2ff3c0e376b51595934830554-Content-Accesories-men-Sporty-Watches_.jpg"
    },
    {
      id:3,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png"
    },
    {
      id:4,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8363b55c-446f-4de2-bc5b-e75fd6fdfb2d1597840217862-Content-accessories-brand-fastrack.png"
    },
    {
      id:5,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/274b3659-420d-43c2-8e4c-17249e6eaf8d1597840218139-Content-accessories-trend-minimalist.png"
    }
  ]
  return (
    <>
     <div className="header">
        <TopHeader2 />
      </div>
      <MensSlider/>
      <div className="mens_category_biggest_deal">BIGGEST DEALS ON TOP BRANDS</div>
      <div className="mens_shop_by_biggest_deal">  
      {shoponBiggestdealBrands.map((elem:any,index:number)=>(  
          <Link to=""key={index}>
          <img
            className="mens_biggest_deal_item_category"
            src={elem.imgUrl}
            alt="no image"
          ></img>
        </Link>
         ))}                
      </div>
      <div className="mens_category_to_bag">CATEGORIES TO BAG</div>
      <div className="mens_shop_by_category_to_bag">  
      {categoryToBag.map((elem:any,index:number)=>(  
          <Link to=""key={index}>
          <img
            className="mens_biggest_deal_category_to_bag"
            src={elem.imgUrl}
            alt="no image"
          ></img>
        </Link>
         ))}                
      </div>
      <div className="mens_explore_top_brands">EXPLORE TOP BRANDS</div>
      <div className="mens_shop_by_explore_to_brands">  
      {exploreTopBrands.map((elem:any,index:number)=>(  
          <Link to=""key={index}>
          <img
            className="mens_explre_top_brands_img"
            src={elem.imgUrl}
            alt="no image"
          ></img>
        </Link>
         ))}                
      </div>
      <div className="mens_myntra_luxe">MYNTRA LUXE</div>
      <div className="mens_shop_by_myntra_luxe">  
      {myntraLuxe.map((elem:any,index:number)=>(  
          <Link to=""key={index}>
          <img
            className="mens_myntra_luxe_img"
            src={elem.imgUrl}
            alt="no image"
          ></img>
        </Link>
         ))}                
      </div>
      <div className="mens_treding_indianwear">TRDENDING IN INDIAN WEAR</div>
      <div className="mens_shop_by_treding_indianwear">  
      {trendingIndianWear.map((elem:any,index:number)=>(  
          <Link to=""key={index}>
          <img
            className="mens_treding_indianwear_img"
            src={elem.imgUrl}
            alt="no image"
          ></img>
        </Link>
         ))}                
      </div>
      <div className="mens_sportwear">TRENDING IN SPORT WEAR</div>
      <div className="mens_shop_by_sportwear">  
      {trendingSportWear.map((elem:any,index:number)=>(  
          <Link to=""key={index}>
          <img
            className="mens_sportwear_img"
            src={elem.imgUrl}
            alt="no image"
          ></img>
        </Link>
         ))}                
      </div>
      <div className="mens_trending_footwear">TRENDING IN FOOTWear</div>
      <div className="mens_shop_by_trending_footwear">  
      {trendingFootWear.map((elem:any,index:number)=>(  
          <Link to=""key={index}>
          <img
            className="mens_trending_footwear_img"
            src={elem.imgUrl}
            alt="no image"
          ></img>
        </Link>
         ))}                
      </div>
      <div className="mens_trending_accessories">TRENDING IN ACCESSORIES</div>
      <div className="mens_shop_by_trending_accessories">  
      {trendingAssoceries.map((elem:any,index:number)=>(  
          <Link to="" key={index}>
          <img
            className="mens_trending_accessories_img"
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

export default Men
