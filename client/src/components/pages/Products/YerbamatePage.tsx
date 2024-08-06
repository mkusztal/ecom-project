import React, { useEffect, useState } from "react";
import { IYerbamate } from "../../../interfaces/IYerbamate";
import { fetchYerbamate, getYerbamate } from "../../../redux/yerbamateReducer";
import { useDispatch, useSelector } from "react-redux";
import { ProductCards } from "../../features/ProductCards/ProductCards";
import { Col, Container, Row } from "react-bootstrap";
import { NotFound } from "../../features/NotFound/NotFound";
import styles from "./YerbaPage.module.scss";
import { PaginationComponent } from "../../features/Pagination/PaginationComponent";
import { SearchBar } from "../../features/SearchBar/SearchBar";

export const YerbamatePage: React.FC = () => {
  const yerbamateData: IYerbamate[] = useSelector(getYerbamate);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [inputSearchText, setInputSearchText] = useState("");

  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchYerbamate());
  }, [dispatch]);

  if (yerbamateData.length === 0) {
    throw new Error("Invalid yerbamateData");
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    yerbamateData.length > 0
      ? yerbamateData.slice(indexOfFirstItem, indexOfLastItem)
      : 0;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filteredItems =
    yerbamateData.length > 0
      ? yerbamateData.filter((product) =>
          product.name.toLowerCase().includes(inputSearchText.toLowerCase()),
        )
      : 0;

  const itemsToDisplay = inputSearchText ? filteredItems : currentItems;

  return (
    <div className={`${styles.root}`}>
      <Container>
        <Row>
          <SearchBar
            yerbamateData={yerbamateData}
            inputText={inputSearchText}
            setInputText={setInputSearchText}
          />
        </Row>

        <Row className={`${styles.row}`}>
          {itemsToDisplay && itemsToDisplay.length > 0 ? (
            itemsToDisplay.map((e) => {
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
          {!inputSearchText && (
            <PaginationComponent
              totalItems={yerbamateData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </Row>
      </Container>
    </div>
  );
};
