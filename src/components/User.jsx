import React from "react";

function User({ currentUsers }) {
  return (
    <div className="">
      {currentUsers.map((user) => (
        <div key={user.login.uuid} className="flex">
          <img src={user.picture.thumbnail} alt={user.name.first} />
          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <p>{user.email}</p>
          <p>
            {user.location.city}, {user.location.country}
          </p>
        </div>
      ))}
    </div>
  );
}

export default User;
