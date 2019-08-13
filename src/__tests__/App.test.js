import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";


import App from "../App";
import BookList from "../components/BooksList";

describe('app renders without crashing', () => {
  const app = shallow(<App />);

  it("renders the header correctly", () => {
    const header = <h5>Harry's Adventure Series</h5>;
    expect(app.contains(header)).toEqual(true);
  });

  it("renders the footer correctly", () => {
    const footer = <footer className="card-footer text-light bg-dark">
      <p className="text-center">2019</p>
    </footer>;
    expect(app.contains(footer)).toEqual(true);
  });

  it("renders the bookList component", () => {
    const bookList = <BookList />;
    expect(app.contains(bookList)).toEqual(true);
  });
});


describe('testing app with snapshot', () => {
  const app = shallow(<App />);
  it('must match snapshot', () => {
    expect(toJSON(app)).toMatchSnapshot()
  })
})