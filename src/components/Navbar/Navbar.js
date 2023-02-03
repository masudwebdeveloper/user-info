import React from "react";

const Navbar = ({handleSearch}) => {
    
  return (
    <div className="lg:max-w-[1240px] mx-auto">
      <div className="navbar bg-base-100 flex flex-col lg:flex-row justify-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="form-control">
              <input
                type="text"
                onChange={(e)=>handleSearch(e)}
                placeholder="Search"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <a className="normal-case text-xl">User - Info</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
