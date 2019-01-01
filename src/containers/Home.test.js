import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { expect } from "chai";

import Home from "./Home";
import Loans from "../components/Loans/Loans";
import AvailableLoansTotal from "../components/AvailableLoansTotal/AvailableLoansTotal";
import LoanInvestForm from "../components/Loans/LoanInvestForm/LoanInvestForm";
import Modal from "../components/UI/Modal/Modal";

describe("<Home />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render Loans", () => {
    expect(wrapper.find(Loans).exists()).equal(true);
  });

  it("should render AvailableLoansTotal", () => {
    expect(wrapper.find(AvailableLoansTotal).exists()).equal(true);
  });
  it("should not render LoanInvestForm", () => {
    expect(wrapper.find(LoanInvestForm).exists()).equal(false);
  });

  it("should render LoanInvestForm", function() {
    wrapper.setState({ investing: true });
    expect(wrapper.find(Modal).exists()).equal(true);
  });
});
