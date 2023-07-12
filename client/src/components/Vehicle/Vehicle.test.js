import React from "react";
import { shallow } from "enzyme";
import Vehicle from "./Vehicle";

describe("Vehicle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Vehicle />);
    expect(wrapper).toMatchSnapshot();
  });
});
