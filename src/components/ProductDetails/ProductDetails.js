import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { getProductsId } from "../../ApiService/api";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [ProductDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductsId(id);
      setProductDetails(data);
    };
    fetchProductDetails();
  }, [id]);

  const handleBuyNow = () => {
    window.confirm("Product added to cart");
  }

  return (
    <div className="product-details-container">
      <img src={ProductDetails.image} alt="image" className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{ProductDetails.title}</h2>
        <p className="product-description">{ProductDetails.description}</p>
        <p className="product-price">{ProductDetails.price}</p>
        <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
        <Link to="/">
          <button className="go-back-button">Go back to home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
