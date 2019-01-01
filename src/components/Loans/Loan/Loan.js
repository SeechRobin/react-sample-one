import React from "react";

import PropTypes from "prop-types";

const loan = props => (
  <>
    <div className="loan-card" onClick={() => props.invest(props.details.id)}>
      <h2>{props.details.title}</h2>
      <p>Tranche: {props.details.tranche}</p>
      <p>Available: £{props.details.available.toFixed(2)}</p>
      {props.details.invested ? <p className="badge">Invested</p> : null}
    </div>
  </>
);

export default loan;

loan.propTypes = {
  details: PropTypes.object,
  invest: PropTypes.func
};
