import React, { Component } from "react";

import Modal from "../components/UI/Modal/Modal";
import Loans from "../components/Loans/Loans";
import LoanInvestForm from "../components/Loans/LoanInvestForm/LoanInvestForm";
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

  investCancelHandler = () => {
    this.setState({ investing: false });
  };

  investButtonHandler = event => {
    event.preventDefault();
    const submitted = this.updateLoansState();
    if (submitted) {
      this.setState({ investing: false, investmentAmount: "" });
    }
  };

  investChangeHandler = event => {
    this.setState({ investmentAmount: event.target.value });
  };

  updateLoansState() {
    let loans = this.state.loans;
    const { investmentAmount, currentSelectedLoanIndex } = this.state;
    const available = loans[currentSelectedLoanIndex].available;

    if (available >= investmentAmount) {
      loans[currentSelectedLoanIndex].available = available - investmentAmount;
      loans[currentSelectedLoanIndex].invested = true;
      this.setState({ loans: loans });
    }
    return true;
  }

  render() {
    const loanInvestForm = (
      <LoanInvestForm
        submit={this.investButtonHandler}
        value={this.state.investmentAmount}
        change={this.investChangeHandler}
        loan={this.state.loans[this.state.currentSelectedLoanIndex]}
      />
    );
    return (
      <div className="container">
        <Modal
          show={this.state.investing}
          modalClosed={this.investCancelHandler}
        >
          {this.state.investing ? loanInvestForm : null}
        </Modal>
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
