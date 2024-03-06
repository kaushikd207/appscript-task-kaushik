import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useEffect, useState } from "react";
import CustomizedMenus from "./CustomizedMenus";

const Card = ({ product }) => {
  console.log(product);
  const { title, price, description, category, image, rating } = product;
  return (
    <>
      <div className="card">
        <div className="cardImage">
          <img src={image}></img>
        </div>
        <h2>{title}</h2>
        <span>{description}</span>
        <h4>Category:{category}</h4>
        <h4>Price:{price}</h4>
        <h4>Ratings:{rating?.rate}</h4>
      </div>
    </>
  );
};

const FilterSection = ({ handleButton, showFilter }) => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const products = await response.json();
    setProducts(products);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="filterBar">
        <span className="itemNumber">{products?.length} ITEMS</span>
        <span className="filter">
          <ArrowBackIosNewIcon />
          <button onClick={handleButton}>
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </span>
        <span className="sort">
          <CustomizedMenus />
        </span>
      </div>
      <div className="cardBody">
        <div className="cardContainer">
          {products.map((product) => {
            return <Card key={product?.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};
export default FilterSection;
