class ShoppingCart {
  Cart = [];
  addToCart(description, price, quantity) {
    this.Cart.push({
      description: description,
      price: price,
      quantity: quantity,
    });
    return "Added item to cart!";
  }

  getCartPrice() {
    let price = 0;
    for (let item of this.Cart) {
      price += item.price * item.quantity;
    }
    return price;
  }

  removeFromCart(description, quantity) {
    if (quantity === undefined) {
      this.Cart = this.Cart.filter((e) => {
        return e.description !== description;
      });
    } else {
      const index = this.Cart.findIndex((object) => {
        return object.description === description;
      });
      this.Cart[index].quantity -= quantity;
    }
  }
}
