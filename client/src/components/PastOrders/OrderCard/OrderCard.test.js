import React from "react";
import { shallow } from "enzyme";
import OrderCard from "./OrderCard";

describe("OrderCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<OrderCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
