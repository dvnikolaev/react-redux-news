import React from "react";
import { connect } from "react-redux";

import './page-main.css';

const Main = ({ username }) => {
  let name = username ? username : "гость";

  return <h3>Привет, <span className="name">{name}!</span></h3>;
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.user.username,
  };
};

export default connect(mapStateToProps)(Main);
