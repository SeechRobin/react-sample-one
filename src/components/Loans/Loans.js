import React from "react";
import PropTypes from "prop-types";

import Loan from "./Loan/Loan";

const loans = props => (
  <>
    <h1>{props.title}</h1>
    {props.loans.map(loanDetails => (
      <Loan key={loanDetails.id} details={loanDetails} invest={props.invest} />
    ))}
  </>
);
export default loans;

loans.propTypes = {
  title: PropTypes.string,
  loans: PropTypes.array
};
