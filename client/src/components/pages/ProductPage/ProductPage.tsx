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

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product: IYerbamate = useSelector(getSingleYerbamate);
  const dispatch = useDispatch();

  if (typeof id !== "string" || id === "") {
    console.error("Invalid id");
    return null;
  }

  useEffect(() => {
    if (id) {
      // dispatch(fetchOneYerbamate(id));
    } else {
      console.error("Invalid id");
    }
  }, [dispatch, id]);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ProductImages />
          </Col>
          <Col>
            <ProductDetails />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
