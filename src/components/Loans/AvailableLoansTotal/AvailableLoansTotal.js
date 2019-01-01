import React, { Component } from "react";

import PropTypes from "prop-types";

class AvailableLoansTotal extends Component {
  calculateAvailableLoansTotal = loans => {
    const sum = loans.reduce((total, loan) => {
      const amount = loan.available;
      return total + amount;
    }, 0);
    return sum;
  };

  render() {
    const { loans } = this.props;
    const availableLoansTotal = this.calculateAvailableLoansTotal(loans);
    return (
      <div className="available-loans-total">
        <h2>
          Total Amount Of Possible Investments: £
          {availableLoansTotal.toFixed(2)}
        </h2>
      </div>
    );
  }
}

export default AvailableLoansTotal;

AvailableLoansTotal.propTypes = {
  loans: PropTypes.array
};
