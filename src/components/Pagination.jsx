import React, { useEffect, useState } from "react";
import styles from "./Table.module.css";

export default function Pagination(props) {
  const { totalResults, resultPerPage, renderDataAsperPage } = props;
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    if (totalResults) {
      const pagesCalculated = Math.ceil(totalResults / resultPerPage);
      setPages(pagesCalculated);
    }
  }, [totalResults]);

  useEffect(() => {
    const res = paginationButtonsRendering();
    setButtons(res);
    renderDataAsperPage(currentPage, resultPerPage);
  }, [currentPage, pages]);

  function paginationButtonsRendering() {
    if (pages >= 3) {
      if (currentPage === 1 || currentPage === 2) {
        return [1, 2, 3];
      } else if (currentPage === pages || currentPage === pages - 1) {
        return [pages - 2, pages - 1, pages];
      } else {
        return [currentPage - 1, currentPage, currentPage + 1];
      }
    } else {
      let arr = [];
      for (let i = 1; i <= pages; i++) {
        arr.push(i);
      }
      return arr;
    }
  }
  const buttonClickHandler = (buttonNumber) => {
    console.log("buttonNumber", buttonNumber);
    setCurrentPage(buttonNumber);
  };
  const prevClickHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (currentPage === 1) {
      setCurrentPage(1);
    }
  };
  const nextClickHandler = () => {
    if (currentPage !== pages) {
      setCurrentPage((prev) => prev + 1);
    } else if (currentPage === pages) {
      setCurrentPage(pages);
    }
  };

  return (
    <div>
      <button
        disabled={currentPage === 1 ? true : false}
        className={styles.normalButton}
        onClick={prevClickHandler}
      >
        prev
      </button>
      {buttons.map((button) => (
        <button
        key={button}
          className={
            currentPage === button
              ? styles.activeButton
              : styles.nonActiveButton
          }
          onClick={() => buttonClickHandler(button)}
        >
          {button}
        </button>
      ))}
      <button
        disabled={currentPage === pages ? true : false}
        className={styles.normalButton}
        onClick={nextClickHandler}
      >
        next
      </button>
    </div>
  );
}
