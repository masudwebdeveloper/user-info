import React from "react";

const UserList = ({users, loading}) => {
  if (loading) {
    return <h1 className="mt-10 ml-20">Loading ... </h1>;
  }
  return (
    <div>
      {users.length > 0 &&
        users.map((user) => (
          <div key={user.id} className="collapse mt-2 rounded">
            <input type="checkbox" className="peer" />
            <div class="overflow-x-auto collapse-title bg-gray-200 peer-checked:bg-gray-200 peer-checked:text-black">
              <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                  <tr className="">
                    <th class="whitespace-nowrap w-[400px] px-4 py-2 text-left font-medium">
                      {user.name}
                    </th>
                    <th class="whitespace-nowrap w-[300px] px-4 py-2 text-left font-medium">
                      <strong>City</strong>
                      <br />
                      {user.address.city}
                    </th>
                    <th class="whitespace-nowrap w-[300px] px-4 py-2 text-left font-medium">
                      <strong>State</strong> <br />
                      {user.address.street}
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 text-left font-medium">
                      <button className="btn">Show Details</button>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>

            <div className="collapse-content text-primary-content peer-checked:bg-gray-200 peer-checked:text-secondary-content">
              <div className="bg-white shadow px-5 py-5 text-slate-900 rounded">
                <div className="w-3/4">
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
                <div className="grid grid-cols-3 mt-5">
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
                  <div className="cols-span-2">
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
        ))}
    </div>
  );
};

export default UserList;
