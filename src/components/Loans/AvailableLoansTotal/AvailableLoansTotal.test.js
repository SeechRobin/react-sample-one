import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import AvailableLoansTotal from "./AvailableLoansTotal";

describe("<AvailableLoansTotal />", () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      loans: [
        {
          amount: 85754,
          annualised_return: 8.6,
          available: 11959,
          id: 1,
          invested: false,
          ltv: 48.8,
          term_remaining: 864000,
          title: "Voluptate et sed tempora qui quisquam.",
          tranche: "A"
        },
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
    wrapper = shallow(<AvailableLoansTotal {...props} />);
  });

  it("Should return the crrect total", () => {
    expect(
      wrapper.contains(<h2>Total Amount Of Possible Investments: £43364.00</h2>)
    ).equal(true);
  });
});
