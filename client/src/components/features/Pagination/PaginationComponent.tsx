import React, { useCallback, useMemo } from "react";
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

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      return pageNumber < 0 && pageNumber > totalPages
        ? null
        : onPageChange(pageNumber);
    },
    [onPageChange, totalPages],
  );

  const paginationItems = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;
      const isActive = pageNumber === currentPage;

      return (
        <Pagination.Item
          key={pageNumber}
          active={isActive}
          onClick={() => handlePageChange(pageNumber)}
          linkClassName={isActive ? styles.activeItem : styles.inactiveItem}
        >
          {pageNumber}
        </Pagination.Item>
      );
    });
  }, [totalPages, currentPage, handlePageChange]);

  return (
    <Pagination className={`${styles.custom_pagination}`}>
      <Pagination.First
        onClick={() => handlePageChange(1)}
        linkClassName={styles.arrows}
      />
      <Pagination.Prev
        onClick={() =>
          currentPage === 1 ? 1 : handlePageChange(currentPage - 1)
        }
        linkClassName={styles.arrows}
      />
      {paginationItems}
      <Pagination.Next
        onClick={() =>
          currentPage === totalPages
            ? totalPages
            : handlePageChange(currentPage + 1)
        }
        linkClassName={styles.arrows}
      />
      <Pagination.Last
        onClick={() => handlePageChange(totalPages)}
        linkClassName={styles.arrows}
      />
    </Pagination>
  );
};
