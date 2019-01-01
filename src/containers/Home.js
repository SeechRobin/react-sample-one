import React, { Component } from "react";

import Loans from "../components/Loans/Loans";
import AvailableLoansTotal from "../components/Loans/AvailableLoansTotal/AvailableLoansTotal";

import loans from "../data/current-loans.json";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loans: loans.loans.map(loan => {
        let {
          id = 0,
          title,
          tranche,
          available = 0,
          annualised_return = 0,
          term_remaining = 0,
          ltv = 0,
          amount = 0,
          invested = false
        } = loan;
        return {
          ...loan,
          id: Number.parseInt(id),
          title: title,
          tranche: tranche,
          available: Number.parseInt(available.replace(/,/g, "")),
          annualised_return: Number.parseFloat(annualised_return),
          term_remaining: Number.parseInt(term_remaining),
          ltv: Number.parseFloat(ltv),
          amount: Number.parseInt(amount.replace(/,/g, "")),
          invested: invested
        };
      }),
      currentSelectedLoanIndex: null,
      investing: false,
      investmentAmount: ""
    };
  }

  clickOnLoanHandler = id => {
    const currentSelectedLoanIndex = this.state.loans.findIndex(
      loan => loan.id === id
    );

    this.setState({
      currentSelectedLoanIndex: currentSelectedLoanIndex,
      investing: true
    });
  };

  render() {
    return (
      <div className="container">
        <Loans
          title="Current Loans"
          loans={this.state.loans}
          invest={this.clickOnLoanHandler}
        />
        <AvailableLoansTotal loans={this.state.loans} />
      </div>
    );
  }
}

export default Home;
