import React, { Component } from 'react';

import { calculatePrice } from "../actions/priceCalculator";

import h1 from "../img/h1.jpg";
import h2 from "../img/h2.jpg";
import h3 from "../img/h3.jpg";
import h4 from "../img/h4.jpg";
import h5 from "../img/h5.jpg";

export default class BooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        book1: 0,
        book2: 0,
        book3: 0,
        book4: 0,
        book5: 0,
      cartTotal: 0,
      price: 0
    }

    this.onChange = this.onChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart = () => {
    const cart = {
        book1 : this.state.book1,
        book2 : this.state.book2,
        book3 : this.state.book3,
        book4 : this.state.book4,
        book5 : this.state.book5,
      }
      const { price, quantity } = calculatePrice(cart);
      this.setState({ price: price, cartTotal: quantity });

  }

  onChange = (e) => {
     this.setState({ [e.target.name] : e.target.value });
  }

  render() {
    const books = [
      {bookName: "Harry Adventures", image: h1, inputName:"book1"},
      {bookName: "Harry's Bearded Adventures", image: h2, inputName:"book2"},
      {bookName: "Harry and the Princess", image: h3, inputName:"book3"},
      {bookName: "Harry's Adventures in Plugovia", image: h4, inputName:"book4"},
      {bookName: "Harry goes to the Beach", image: h5, inputName:"book5"}
    ]
    return (
      <div className="container">
        <div className="cart_section">
          <button
            type="button"
            className="btn btn-dark cart_total"
          >
          Cart
          <span className="badge badge-light ml-2">{this.state.cartTotal}</span>
        </button>
        <button type="button" className="btn btn-dark cart_total">
          Price
          <span className="badge badge-light ml-2">{`${this.state.price} Euro`}</span>
        </button>
        <button type="button" className="btn btn-dark cart_total" onClick={this.addToCart}>
          Add To Cart
        </button>
        </div>
        <div className="book_list">
        {
          books.map((book, index) => {
            return (
              <div className="card" key={index} >
                <img className="card-img-top img" src={book.image} alt={book.bookName} />
                <div className="card-body">
                  <p className="card-text">{book.bookName}</p>
                </div>
                <div className="card-footer">
                  <div className="input-group mb-12">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Quantity"
                      name={book.inputName}
                      onChange={this.onChange}
                      value= {book.value}
                    />
                  </div>
                </div>
              </div>
          )
        })
      }
      </div>
      </div>
    )
  }
}
