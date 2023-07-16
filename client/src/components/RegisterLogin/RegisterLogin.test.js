import React from "react";
import { shallow } from "enzyme";
import RegisterLogin from "./RegisterLogin";

describe("RegisterLogin", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RegisterLogin />);
    expect(wrapper).toMatchSnapshot();
  });
});
