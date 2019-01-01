import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import LoanInvestForm from "./LoanInvestForm";

describe("<Loan />", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      submit: function() {},
      value: "100",
      change: function() {},
      loan: {
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
    };
    wrapper = shallow(<LoanInvestForm {...props} />);
  });

  it("should contain an Invest button", () => {
    expect(wrapper.find("button").exists()).equal(true);
    expect(wrapper.find("button").text()).equal("Invest");
  });

  it("Should render loan Title", () => {
    expect(
      wrapper.contains(
        <h2>Consectetur ipsam qui magnam minus dolore ut fugit.</h2>
      )
    ).equal(true);
  });
});
