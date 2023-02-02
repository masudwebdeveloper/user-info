import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import UserList from "../UserList/UserList";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(3);

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

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="lg:max-w-[1240px] mx-auto">
      <UserList users={currentUsers} loading={loading}></UserList>
      <Pagination currentPage={currentPage} usersPerPage={usersPerPage} paginate={paginate} totalUsers={users.length}></Pagination>
    </div>
  );
};

export default Home;
