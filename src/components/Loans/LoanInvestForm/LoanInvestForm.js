import React from "react";
import PropTypes from "prop-types";

const loanInvest = props => (
  <>
    <form onSubmit={props.submit}>
      <h2>{props.loan.title}</h2>
      <p> Available to invest: £{props.loan.available}</p>
      <input
        className="input"
        type="number"
        placeholder="Enter amount £0.00"
        value={props.value}
        onChange={props.change}
      />

      <button className="button" type="submit" disabled={!props.value}>
        Invest
      </button>
    </form>
  </>
);

export default loanInvest;

loanInvest.propTypes = {
  submit: PropTypes.func,
  loan: PropTypes.object,
  value: PropTypes.string,
  change: PropTypes.func
};
