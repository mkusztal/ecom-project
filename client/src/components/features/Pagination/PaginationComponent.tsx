import React from "react";
import { Pagination } from "react-bootstrap";
import styles from "./PaginationComponent.module.scss";

type PaginationComponentProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

export const PaginationComponent: React.FC<PaginationComponentProps> = (
  props,
) => {
  const { totalItems, itemsPerPage, currentPage, onPageChange } = props;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 0 && pageNumber > totalPages) {
      return null;
    }
    onPageChange(pageNumber);
  };

  const paginationItems = Array.from({ length: totalPages }, (_, index) => (
    <Pagination.Item
      key={index + 1}
      active={index + 1 === currentPage}
      onClick={() => handlePageChange(index + 1)}
    >
      {index + 1}
    </Pagination.Item>
  ));

  return (
    <Pagination className={`${styles.customPagination}`}>
      <Pagination.First onClick={() => handlePageChange(1)} />
      <Pagination.Prev
        onClick={() =>
          currentPage === 1 ? 1 : handlePageChange(currentPage - 1)
        }
      />
      {paginationItems}
      <Pagination.Next
        onClick={() =>
          currentPage === totalPages
            ? totalPages
            : handlePageChange(currentPage + 1)
        }
      />
      <Pagination.Last onClick={() => handlePageChange(totalPages)} />
    </Pagination>
  );
};
