import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Pagination from "../Pagination/Pagination";
import UserList from "../UserList/UserList";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(3);
  const [searchName, setSearchName] = useState('');
  // const [currentUsers, setCurrentUsers] = useState([]);
 console.log(filterUsers);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  //get current page
  const indexOfLastPage = currentPage * usersPerPage;
  const indexOfFirstPage = indexOfLastPage - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPage, indexOfLastPage);

  // if(searchName.length > 1){
  //   const currentUsers = users.slice(indexOfFirstPage, indexOfLastPage);
  //   setCurrentUsers(currentUsers);
  // }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) =>{
    e.preventDefault();
    const search = e.target.value;
    setSearchName(search);
    console.log(search);
    if(search !== ''){
      const filterData = users.filter((user)=> {
        return  Object.values(user).join('').toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
      })
      setFilterUsers(filterData)
    } else{
      setFilterUsers(users)
    }
  }

  return (
    <div className="lg:max-w-[1240px] mx-auto mt-4 lg:mt-10">
      <Navbar handleSearch={handleSearch}></Navbar>
      <UserList searchName={searchName} filterUsers={filterUsers} users={currentUsers} loading={loading}></UserList>
      <Pagination
        currentPage={currentPage}
        usersPerPage={usersPerPage}
        paginate={paginate}
        totalUsers={users.length}
      ></Pagination>
    </div>
  );
};

export default Home;
