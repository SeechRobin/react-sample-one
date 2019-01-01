import React from "react";
import { shallow } from "enzyme";

import Loan from "./Loan";

describe("<Loan />", () => {
  let wrapper;

  beforeEach(() => {
    const defaultProps = {
      loan: {
        amount: 85754,
        annualised_return: 7.1,
        available: 31405,
        id: 5,
        invested: true,
        ltv: 48.8,
        term_remaining: 1620000,
        title: "Consectetur ipsam qui magnam minus dolore ut fugit.",
        tranche: "B"
      }
    };
    wrapper = shallow(<Loan details={defaultProps.loan} />);
  });

  it("Should render loan Title", () => {
    expect(
      wrapper.contains(
        <h2>Consectetur ipsam qui magnam minus dolore ut fugit.</h2>
      )
    ).toEqual(true);
  });

  it("Should render loan Tranche", () => {
    expect(wrapper.contains(<p>Tranche: B</p>)).toEqual(true);
  });

  it("Should render loan Available", () => {
    expect(wrapper.contains(<p>Available: £31405.00</p>)).toEqual(true);
  });

  it("Should add invested badge ", () => {
    expect(wrapper.contains(<p className="badge">Invested</p>)).toEqual(true);
  });
});
