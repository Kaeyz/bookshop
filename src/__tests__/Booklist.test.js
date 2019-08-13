import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";


import BookList from "../components/BooksList";

describe('testing bookList with snapshot', () => {
  const bookList = shallow(<BookList />);

  it('must match snapshot', () => {
    expect(toJSON(bookList)).toMatchSnapshot()
  })
})