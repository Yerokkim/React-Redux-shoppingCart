import React, { useState } from "react";

const ProductItem = () => {
  const [users, setUser] = useState([
    { id: 1, name: "jenny" },
    { id: 2, name: "tom" },
    { id: 3, name: "juan" },
  ]);
  const removeUser = (user) => {
    //this is filter way
    // let newList = users.filter((x) => x.id !== user.id);
    // setUser([...newList]);

    users.splice(users.indexOf(user), 1);
    setUser([...users]);
  };
  return (
    <div>
      {users &&
        users.map((x) => (
          <div key={x.id}>
            <li>{x.name}</li>
            <button onClick={() => removeUser(x)}>remove</button>
          </div>
        ))}
    </div>
  );
};

export default ProductItem;
