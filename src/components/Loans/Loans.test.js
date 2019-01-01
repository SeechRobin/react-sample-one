import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Loans from "./Loans";
import Loan from "./Loan/Loan";

describe("<Loans />", () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      loan: [
        {
          amount: 85754,
          annualised_return: 7.1,
          available: 31405,
          id: 5,
          invested: false,
          ltv: 48.8,
          term_remaining: 1620000,
          title: "Consectetur ipsam qui magnam minus dolore ut fugit.",
          tranche: "B"
        }
      ]
    };
    wrapper = shallow(<Loans loans={props.loan} title="Current Loans" />);
  });

  it("Should contain a loan", () => {
    expect(wrapper.find(Loan)).to.have.length(1);
  });

  it("Should render the heading passed in", () => {
    expect(wrapper.contains(<h1>Current Loans</h1>)).equal(true);
  });
});
