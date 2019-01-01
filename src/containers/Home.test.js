import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Home from "./Home";

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
});
