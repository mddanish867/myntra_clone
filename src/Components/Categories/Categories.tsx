import { Link } from "react-router-dom";
import "./Categories.css";
// import Carousel from 'react-multi-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Categories() {
  const responsive: any = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const medalWorthyBrands = [
    {
      id: 1,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/51084b8a-9c9e-4b03-bc4a-dfd7738590eb1691076143197-image_png949061620--1-.png",
    },
    {
      id: 2,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/a9734bdc-8054-4806-8ab4-748d7dfdfe411691066316796-unnamed---2023-08-03T180830.165.png",
    },
    {
      id: 3,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/bf39dcbb-1a94-481c-b943-43fca34bf0581691066296958-unnamed---2023-08-03T180811.304.png",
    },
    {
      id: 4,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/8027069a-3a10-4a92-a228-1c4e24cd58071691066276841-unnamed---2023-08-03T180720.906.png",
    },
    {
      id: 5,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/d6529cc8-ff03-4d85-88b7-5358a1d5a46b1691057399814-image_png1830835492.png",
    },
    {
      id: 6,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/4cde4706-089f-4049-9d9c-116d8631af381691056679844-image_png1175979315.png",
    },
    {
      id: 7,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/4/71a69cc9-210a-4a95-b37f-78319c8f33761691141606256-image_png2064277310.png",
    }
  ];

  const grandGlobBrands = [
    {
      id: 1,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/81bcb28d-55f3-4d7b-bb5a-7cf7ee7fd8031690773011370-The_Collective.png",
    },
    {
      id: 2,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/7aac1f32-1a1a-4ba6-924b-ee1c28553aed1690773011304-Nautica.png",
    },
    {
      id: 3,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/437645a4-988c-4f53-aff3-b1fdb34938481690773011106-FCUK.png",
    },
    {
      id: 4,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0c399e2c-9797-483d-bf6c-0852d5d21db21690773010989-BHPC.png",
    },
    {
      id: 5,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
    },
    {
      id: 6,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/805eeb23-ec17-4b50-b798-1244133c02041690955797245-image_png_1993656242.png",
    },
    {
      id: 7,
      imgUrl:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6b6c7162-0086-4967-90c8-ec4792ec200c1690773011082-Dorothy_Perkin-_Boohoo.png",
    }
  ];

  const shopByCategory = [
    {
      id:1,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg"
    },
    {
      id:2,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/bfab4827-0ea6-4a5b-8b8d-167d497ae78e1690787339167-Shop-By-Category_HP-4_03.jpg"
    },
    {
      id:3,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c61cfcfb-749f-4d8e-a318-0ea8f8705a1c1690787339442-Shop-By-Category_HP-4_04.jpg"
    },
    {
      id:4,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/a50c2dec-c5bc-46f3-b754-294fb46c61971690787339077-Shop-By-Category_HP-4_05.jpg"
    },
    {
      id:5,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/da4059bf-14f1-4928-b5b9-be8719887b8e1690787339149-Shop-By-Category_HP-4_06.jpg"
    },
    {
      id:6,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/3a804edc-ce57-4eb5-bb6a-493d458973661690787338896-Shop-By-Category_HP-4_07.jpg"
    },
    {
      id:7,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/84870fc6-4805-41a4-b9eb-a8d7adb6c0d21690787339128-Shop-By-Category_HP-4_08.jpg"
    },
    {
      id:8,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/069d06bc-1b75-43f4-b8d1-1ec46193eb021690787339028-Shop-By-Category_HP-4_09.jpg"
    },
    {
      id:9,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/19755254-9c13-40a3-9cab-2bb9714391ab1690787339274-Shop-By-Category_HP-4_10.jpg"
    },
    {
      id:10,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/dd262b36-3a75-464a-97b5-235984080d851690787338916-Shop-By-Category_HP-4_11.jpg"
    },
    {
      id:11,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d26e5ed5-d846-4692-88a5-54ab7d79203b1690787339203-Shop-By-Category_HP-4_12.jpg"
    },
    {
      id:12,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/dd3d6118-cd57-4e73-a4a4-e7f8a6bfde7b1690787339093-Shop-By-Category_HP-4_13.jpg"
    },
    {
      id:13,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/babe0d1a-b7fe-4b36-8a98-b275523963721690787339222-Shop-By-Category_HP-4_14.jpg"
    },
    {
      id:14,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/3c2095db-905a-4346-9712-2fac7bcbbbd71690787339011-Shop-By-Category_HP-4_15.jpg"
    },
    {
      id:15,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c1c8027f-1a22-4a0b-8be2-848edab298cf1690787339044-Shop-By-Category_HP-4_16.jpg"
    },
    {
      id:16,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/278917b5-1658-4c2c-b122-f623b1d909701690787339290-Shop-By-Category_HP-4_17.jpg"
    },
    {
      id:17,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6c53770e-b7b2-466a-b36e-a0b2bff1a7591690787339109-Shop-By-Category_HP-4_18.jpg"
    },
    {
      id:18,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/54852b61-90d6-484a-84c9-a8560247ffc21690787339307-Shop-By-Category_HP-4_19.jpg"
    },
    {
      id:19,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/5d78afb6-38bb-43bd-bc67-1e4f6026b6ae1690787339327-Shop-By-Category_HP-4_20.jpg"
    },
    {
      id:20,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/90dcb992-9fb4-4208-8249-aa1a01b2851d1690787339476-Shop-By-Category_HP-4_21.jpg"
    },
    {
      id:21,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/e4fcb9f0-f79a-41b7-b7b2-8828bb6e95e61690787339426-Shop-By-Category_HP-4_22.jpg"
    },
    {
      id:22,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/66882f76-0bbe-4741-8890-0426695e09131690787339238-Shop-By-Category_HP-4_23.jpg"
    },
    {
      id:23,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6aa501b3-ce05-48f5-96fe-ecb64682dbc71690787339409-Shop-By-Category_HP-4_24.jpg"
    },
    {
      id:24,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/b6e15609-4f52-44db-80c1-2a955fd4ac6e1690787339341-Shop-By-Category_HP-4_25.jpg"
    },
    {
      id:25,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/7916724b-be74-4920-b58d-ada0617cdee91690787339392-Shop-By-Category_HP-4_26.jpg"
    },
    {
      id:26,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/5c541739-5c23-4846-a875-f19a170cea151690787339460-Shop-By-Category_HP-4_27.jpg"
    },
    {
      id:27,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/76932333-b792-4f54-983c-45aaf70e04ef1690787338936-Shop-By-Category_HP-4_28.jpg"
    },
    {
      id:28,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/a351ad62-c1d1-4bb4-9967-d3966f8446521690787338974-Shop-By-Category_HP-4_29.jpg"
    },
    {
      id:29,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/130ceab4-ac68-42c5-a9f4-478ba7f903db1690787339061-Shop-By-Category_HP-4_30.jpg"
    },
    {
      id:30,
      imgUrl:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/cda4c195-22c1-4e11-a9dc-4728d69c3f2b1690787338956-Shop-By-Category_HP-4_31.jpg"
    },
    {
      id:31,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/46090f9c-e337-4a58-9d67-16bf4b977c6f1690787339358-Shop-By-Category_HP-4_32.jpg"
    },
    {
      id:32,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/89e0a0ee-225d-4880-a761-6aa895d252871690787338993-Shop-By-Category_HP-4_33.jpg"
    },
    {
      id:33,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/82cdf918-9ad9-41fa-a5a7-c4c86fbad90c1690787338876-Shop-By-Category_HP-4_34.jpg"
    },
    {
      id:34,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/ed2e98bc-e4f4-4e85-bc74-537142205d0f1690787339374-Shop-By-Category_HP-4_35.jpg"
    },
    {
      id:35,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c61b51c7-67cb-4d02-9f50-3492d08c0bba1690787339256-Shop-By-Category_HP-4_36.jpg"
    },
    {
      id:36,
      imgUrl:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c61b51c7-67cb-4d02-9f50-3492d08c0bba1690787339256-Shop-By-Category_HP-4_36.jpg"
    }
  ]
  
  return (
    <>
   
    <div className="category_heading"> MEDAL WORTHY BRANDS TO BAG</div>
    <div className="shop_by_category_to_bag">  
     {medalWorthyBrands.map((elem:any,index:number)=>(  
         <Link to=""key={index}>
         <img
           className="_category_to_bag"
           src={elem.imgUrl}
           alt="no image"
         ></img>
       </Link>
        ))}                
     </div>
  
   
      
      <div className="category_heading"> GRAND GLOBAL BRANDS</div>
      <div className="shop_by_category_to_bag">  
     {grandGlobBrands.map((elem:any,index:number)=>(  
         <Link to=""key={index}>
         <img
           className="_category_to_bag"
           src={elem.imgUrl}
           alt="no image"
         ></img>
       </Link>
        ))}                
     </div>
      
      <div className="category_heading">SHOP BY CATEGORY</div>
      <div className="shop_by_category">
      {shopByCategory.map((elem:any,index:number)=>(
          <Link to="" key={index}>
          <img
            className="sale_item_category"
            src={elem.imgUrl}
            alt="no image"
          ></img>
        </Link>
          ))}
                
      </div>
    </>
  );
}

export default Categories;
