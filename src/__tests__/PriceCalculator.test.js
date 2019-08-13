import calculatePrice from "../actions/priceCalculator";


describe('calculate price and quantity function test', () => {
  const cart = {
    book1: 2,
    book2: 2,
    book3: 2,
    book4: 1,
    book5: 1,
  };
  it('return price of 51.6 and quantity of 8', () => {
    const {price, quantity} = calculatePrice(cart);
    expect(quantity).toEqual(8);
    expect(price).toEqual("51.60");
  });
});
