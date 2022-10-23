import { useState } from "react";

function Pagination({ numberOfPages, currentPage, setCurrentPage }) {
  const [disabled, setDisabled] = useState(false);
  const pageNum = [...Array(numberOfPages + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setDisabled(true);
    }
  };

  const nextPage = () => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <section className="pagination">
        <div className={dis}>
          <p onClick={prevPage}>Previous</p>
        </div>
        <div className="pagination-num">
          {pageNum.map((num) => (
            <div key={num}>
              <p
                onClick={() => setCurrentPage(num)}
                className="pagination-child"
              >
                {num}
              </p>
            </div>
          ))}
        </div>
        <div className="next">
          <p onClick={nextPage}>Next</p>
        </div>
      </section>
    </div>
  );
}

export default Pagination;
