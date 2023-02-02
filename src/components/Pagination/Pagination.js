import React from "react";

const Pagination = ({usersPerPage, totalUsers, paginate, currentPage}) => {
    const numberOfUsers = [];
    for(let i = 1; i<= Math.ceil(totalUsers / usersPerPage); i++){
        numberOfUsers.push(i);
    }
  return (
    <div className="my-10 text-right">
      <div className="btn-group">
        {
            numberOfUsers.map((number,i) => <button onClick={()=> paginate(number)} key={number} className={`btn ${number === currentPage ? 'btn-active' : ''}`}>{number}</button>)
        }
      </div>
    </div>
  );
};

export default Pagination;
