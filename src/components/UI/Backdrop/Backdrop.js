import React from "react";

import PropTypes from "prop-types";

const backdrop = props =>
  props.show ? <div className="backdrop" onClick={props.clicked} /> : null;

export default backdrop;

backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func
};
