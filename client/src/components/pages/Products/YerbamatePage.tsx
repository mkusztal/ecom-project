import React, { useEffect } from "react";
import { IYerbamate } from "../../../interfaces/IYerbamate";
import { fetchYerbamate, getYerbamate } from "../../../redux/yerbamateReducer";
import { useDispatch, useSelector } from "react-redux";
import { ProductCards } from "../../features/ProductCards/ProductCards";
import { Col, Container, Row } from "react-bootstrap";
import { NotFound } from "../../features/NotFound/NotFound";
import styles from "./YerbaPage.module.scss";
import { PaginationComponent } from "../../features/Pagination/PaginationComponent";

export const YerbamatePage: React.FC = () => {
  const yerbamateData: IYerbamate[] = useSelector(getYerbamate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchYerbamate());
  }, [dispatch]);

  console.log("yerbamateData: ", yerbamateData);
  return (
    <div className={`${styles.root}`}>
      <Container>
        <Row className={`${styles.row}`}>
          {yerbamateData ? (
            yerbamateData.map((e) => {
              return (
                <Col key={e.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <ProductCards
                    id={e.id}
                    name={e.name}
                    price={e.price}
                    type={e.type}
                    image={e.image}
                  />
                </Col>
              );
            })
          ) : (
            <NotFound />
          )}
        </Row>
        <Row>
          <PaginationComponent />
        </Row>
      </Container>
    </div>
  );
};
