import React from "react";
import { shallow } from "enzyme";
import PastOrders from "./PastOrders";

describe("PastOrders", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PastOrders />);
    expect(wrapper).toMatchSnapshot();
  });
});
