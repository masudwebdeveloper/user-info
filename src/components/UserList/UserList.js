import React from "react";

const UserList = ({ users, loading, filterUsers, searchName }) => {
  const [openId, setOpenId] = React.useState(-1);

  if (loading) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  function toggleItem(id) {
    setOpenId(openId === id ? -1 : id);
  }

  return (
      <div className="">
        {
          searchName.length > 1 ? (filterUsers?.map((filterUser) => (
            <div key={filterUser.id}>
              <div
                onClick={() => toggleItem(filterUser.id)}
                className=" bg-gray-200 my-1 rounded overflow-x-auto"
              >
                <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                  <thead>
                    <tr className="">
                      <th className="whitespace-nowrap lg:w-[300px] px-4 py-2 text-left font-medium">
                        {filterUser.name}
                      </th>
                      <th className="whitespace-nowrap lg:w-[300px] px-4 py-2 text-left font-medium">
                        <strong>City</strong>
                        <br />
                        {filterUser.address.city}
                      </th>
                      <th className="whitespace-nowrap lg:w-[400px] px-4 py-2 text-left font-medium">
                        <strong>State</strong> <br />
                        {filterUser.address.street}
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-right font-medium">
                        <button className="btn">{`${openId === filterUser.id ? "Hide Details" : "Show Details"}`}</button>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
  
              <div
                className={`content overflow-x-auto ${
                  openId === filterUser.id ? "expand-content" : "collapse-content"
                }`}
              >
                <div className="shadow px-5 py-5 text-slate-900 rounded">
                  <div className="lg:w-3/4">
                    <strong>Descriptions</strong>
                    <p>
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptas provident velit quis dolore? A debitis iure ea
                        officiis sequi provident unde. In mollitia sit officia
                        doloremque odit hic vero assumenda, ullam corrupti totam
                        quaerat impedit quasi aliquid minima necessitatibus
                        distinctio, recusandae repellendus ipsam dicta debitis
                        sapiente, sequi error maxime? Consequatur!
                      </small>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-3 mt-5">
                    <div className="">
                      <strong>Contact Person</strong>
                      <h1>{filterUser.username}</h1>
                      <strong>Designation</strong>
                      <h1>{filterUser.company.bs}</h1>
                      <strong>Email:</strong>
                      <h1>{filterUser.email}</h1>
                      <strong>Phone</strong>
                      <h1>{filterUser.phone}</h1>
                    </div>
                    <div className="lg:cols-span-2">
                      <strong>Address</strong>
                      <h1>
                        {filterUser.address.street}, {filterUser.address.city},{" "}
                        {filterUser.address.zipcode}
                      </h1>
                      <strong>City</strong>
                      <h1>{filterUser.address.city}</h1>
                      <strong>State</strong>
                      <h1>{filterUser.address.street}</h1>
                      <strong>Website</strong>
                      <h1>{filterUser.website}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))) : (
            users?.map((user) => (
              <div key={user.id}>
                <div
                  onClick={() => toggleItem(user.id)}
                  className=" bg-gray-200 my-1 rounded overflow-x-auto"
                >
                  <table className="lg:min-w-full divide-y-2 divide-gray-200 text-sm">
                    <thead>
                      <tr className="">
                        <th className="whitespace-nowrap lg:w-[300px] px-4 py-2 text-left font-medium">
                          {user.name}
                        </th>
                        <th className="whitespace-nowrap lg:w-[300px] px-4 py-2 text-left font-medium">
                          <strong>City</strong>
                          <br />
                          {user.address.city}
                        </th>
                        <th className="whitespace-nowrap lg:w-[400px] px-4 py-2 text-left font-medium">
                          <strong>State</strong> <br />
                          {user.address.street}
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-right font-medium w-[200px]">
                          <button className="btn">{`${openId === user.id ? "Hide Details" : "Show Details"}`}</button>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
    
                <div
                  className={`content overflow-x-auto ${
                    openId === user.id ? "expand-content" : "collapse-content"
                  }`}
                >
                  <div className="shadow px-5 py-5 text-slate-900 rounded">
                    <div className="lg:w-3/4">
                      <strong>Descriptions</strong>
                      <p>
                        <small>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Voluptas provident velit quis dolore? A debitis iure ea
                          officiis sequi provident unde. In mollitia sit officia
                          doloremque odit hic vero assumenda, ullam corrupti totam
                          quaerat impedit quasi aliquid minima necessitatibus
                          distinctio, recusandae repellendus ipsam dicta debitis
                          sapiente, sequi error maxime? Consequatur!
                        </small>
                      </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 mt-5">
                      <div className="">
                        <strong>Contact Person</strong>
                        <h1>{user.username}</h1>
                        <strong>Designation</strong>
                        <h1>{user.company.bs}</h1>
                        <strong>Email:</strong>
                        <h1>{user.email}</h1>
                        <strong>Phone</strong>
                        <h1>{user.phone}</h1>
                      </div>
                      <div className="lg:cols-span-2">
                        <strong>Address</strong>
                        <h1>
                          {user.address.street}, {user.address.city},{" "}
                          {user.address.zipcode}
                        </h1>
                        <strong>City</strong>
                        <h1>{user.address.city}</h1>
                        <strong>State</strong>
                        <h1>{user.address.street}</h1>
                        <strong>Website</strong>
                        <h1>{user.website}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )
        }
      </div>
  );
};

export default UserList;
