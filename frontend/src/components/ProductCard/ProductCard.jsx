import React from "react";
import "./ProductCard.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="product-card-child-1">
                <img src="\Images\static\51uyT+sivML.jpg" alt="Product pic" />
                {/* <Button>Add to cart</Button> */}
            </div>

            <div className="product-card-child-2">
                <div className="product-card-rating">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                </div>
                <h6>Product Name</h6>
                <h6>Price</h6>
            </div>
        </div>
    );
};

export default ProductCard;
