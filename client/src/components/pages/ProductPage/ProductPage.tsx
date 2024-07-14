import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ProductDetails } from "../../features/ProductDetails/ProductDetails";
import { ProductImages } from "../../features/ProductImages/ProductImages";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOneYerbamate,
  getSingleYerbamate,
} from "../../../redux/yerbamateReducer";
import { IYerbamate } from "../../../interfaces/IYerbamate";
import { AppDispatch } from "../../../redux/store";
import styles from "./ProductPage.module.scss";
import { ProductsSlider } from "../../features/ProductsSlider/ProductsSlider";

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product: IYerbamate = useSelector(getSingleYerbamate);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(fetchOneYerbamate(id));
    } else {
      console.error("Invalid id");
    }
  }, [dispatch, id]);

  if (!product) {
    return <div>Not Found any product</div>;
  }
  return (
    <div className={`mx-4 ${styles.root}`}>
      <Container>
        <Row>
          <Col>
            <ProductImages image={product.image} />
          </Col>
          <Col>
            <ProductDetails
              title={product.name}
              price={product.price}
              size={product.size}
              type={product.type}
            />
          </Col>
        </Row>
        <Row>
          <ProductsSlider image={product.image} />
        </Row>
      </Container>
    </div>
  );
};
