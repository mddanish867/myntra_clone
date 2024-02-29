import { Link } from 'react-router-dom';
import { useGetProductCategoryDetailsQuery } from '../../../Apis/productCategoryApi';
import './Beauty.css';
function Beauty() {
    const { data } = useGetProductCategoryDetailsQuery("Beauty");
    let categories: any = [];
  let subCategory:any = [];
if (data) {
  let categoryList = data.map((items: any) => items.category);
  categories = Array.from(new Set(categoryList));
  let subCategoryList = data.map((items: any) => items.subCategoryName);
  subCategory = Array.from(new Set(subCategoryList));
}
// Function to chunk array into groups of size 'chunk size'
const chunkArray = (arr: any, chunkSize: any) => {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }
  return chunkedArray;
};
// Chunk the data array into group of 5
const chunkData = chunkArray(categories, 4);
const chunkSubCatData = chunkArray(subCategory, 10);
  return (
    <>
    <div className="nav_link_row">
    {chunkSubCatData.map((row: any, rowIndex: number) => (
      <div key={rowIndex} className="nav_links_column_men">
        {row.map((item: any, columnIndex: number) => (
          <Link to="" key={columnIndex} className="heading_category_men">
            {item}
          </Link>
        ))}
      </div>
    ))}
  </div>
  </>
  )
}

export default Beauty
