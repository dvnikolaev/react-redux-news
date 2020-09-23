import React from "react";

import { connect } from "react-redux";

const Main = ({ username }) => {
  let name = username ? username : "Гость";

  return <h3>Привет, <span className="name">{name}!</span></h3>;
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapStateToProps)(Main);
