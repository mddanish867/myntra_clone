import "./Homepage.css";
import Footer from "../Footer/Footer";
import Categories from "../Categories/Categories";
import TopHeader2 from "../Navigations/TopHeader2";
import Banner from "../Slider/Banner/Banner";

function Homepage() {
  return (
    <>
    <div className="header">
    <TopHeader2 />

    </div>
   
   {/* <MainNavbar/> */}
   <Banner />
   <div className="category_item">
     <Categories />
   </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
