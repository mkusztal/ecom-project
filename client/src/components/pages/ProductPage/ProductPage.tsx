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
import { addToCart, getCartItems } from "../../../redux/cartReducer";

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product: IYerbamate = useSelector(getSingleYerbamate);
  const cartProduct: IYerbamate[] = useSelector(getCartItems);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(fetchOneYerbamate(id));
    } else {
      console.error("Invalid id");
    }
  }, [dispatch, id]);

  if (!product) {
    return <div>Not Found Product</div>;
  }

  const handleAddToCart = (product: IYerbamate) => {
    const checkProduct =
      cartProduct.length > 0
        ? cartProduct.some((item: IYerbamate) => item.id === product.id)
        : false;
    return () => {
      if (!checkProduct) {
        dispatch(addToCart(product));
      }
    };
  };

  return (
    <div className={`mx-4 ${styles.root}`}>
      <Container>
        <Row className={`mx-4 ${styles.first_row}`}>
          <Col>
            <ProductImages image={product.image} />
          </Col>
          <Col>
            {product && (
              <ProductDetails
                title={product.name}
                price={product.price}
                size={product.size}
                type={product.type}
                handleClick={handleAddToCart(product)}
              />
            )}
          </Col>
        </Row>
        <Row>
          <ProductsSlider image={product.image} />
        </Row>
      </Container>
    </div>
  );
};
