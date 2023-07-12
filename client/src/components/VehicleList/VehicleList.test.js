import React from "react";
import { shallow } from "enzyme";
import VehicleList from "./VehicleList";

describe("VehicleList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<VehicleList />);
    expect(wrapper).toMatchSnapshot();
  });
});
