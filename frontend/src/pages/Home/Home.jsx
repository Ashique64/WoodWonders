import React from "react";
import NavBar from "../../components/NavBar/navbar";
import { useNavigate } from "react-router-dom";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeCategoryCard from "../../components/HomeCategoryCard/HomeCategoryCard";
import { Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";
import HomeCard from "../../components/HomeCards/HomeCard";

const Home = () => {
    return (
        <div>
            <NavBar />
            <HomeBanner />
            <HomeCategoryCard />
            <Container-fluid>
                <Row className="new-arrivals">
                    <div className="new-arrival-items">
                        <h5>
                            New <br />
                            Arrivels
                        </h5>
                        <a href="">More Products &rarr;</a>
                    </div>
                </Row>
                <Row className="new-arrivel-products">
                    <div className="new-arrivel-product-row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </Row>
            </Container-fluid>
            <HomeCard/>
        </div>
    );
};

export default Home;
