import React from "react";
import { connect } from "react-redux";

const Header = ({ amount, users }) => {
  return (
    <div>
      <h1>Header{amount}</h1>

      <div>
        <ul>
          {users.map((x) => (
            <li>{x.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    amount: state.items.amount,
    users: state.items.users,
  };
};

export default connect(mapStateToProps)(Header);
