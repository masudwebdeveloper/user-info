import React from "react";

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const numberOfUsers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    numberOfUsers.push(i);
  }

  function handleNextItem() {
    let nextPageNumber = currentPage + 1;
    if (nextPageNumber === numberOfUsers.length + 1) {
      paginate(1);
    } else {
      paginate(nextPageNumber);
    }
  }


  function handlePrevItem() {
    let prevPageNumber = currentPage - 1; 
    if(prevPageNumber === 0){
      paginate(numberOfUsers.length)
    } else{
      paginate(prevPageNumber)
    }
  }

  return (
    <div className="my-10 text-center lg:text-right">
      <div className="btn-group">
        <button className="btn" onClick={handlePrevItem}>
          Prev
        </button>
        {numberOfUsers.map((number, i) => (
          <button
            onClick={() => paginate(number)}
            key={number}
            className={`btn ${number === currentPage ? "btn-active" : ""}`}
          >
            {number}
          </button>
        ))}
        <button onClick={handleNextItem} className="btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
