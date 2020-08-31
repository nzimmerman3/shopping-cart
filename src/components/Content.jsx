import React from "react";
import data from "../data.json";
import FilterBar from "./FilterBar";
import CartHeader from "./CartHeader";
import CartContents from "./CartContents";
import CartFooter from "./CartFooter";
import Item from "./Item";
import CheckoutForm from "./CheckoutForm";
import ProductDetails from "./ProductDetails";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data,
      sort: "",
      filter: "",
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      showCheckout: false,
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
      },
      product: null,
    };
    this.filterBy = this.filterBy.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.checkout = this.checkout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  filterBy(event) {
    if (event.target.value === "") {
      this.setState({ filter: event.target.value, products: data, sort: "" });
    } else {
      this.setState({
        filter: event.target.value,
        sort: "",
        products: data.filter((product) => product.type === event.target.value),
      });
    }
  }

  sortBy(event) {
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: state.products.sort((item1, item2) =>
        sort === "highest"
          ? item1.price < item2.price
            ? 1
            : -1
          : sort === "lowest"
          ? item1.price < item2.price
            ? -1
            : 1
          : sort === "name"
          ? item1.name > item2.name
            ? 1
            : -1
          : //default to most recent (ids assigned sequentially)
          item1.id > item2.id
          ? 1
          : -1
      ),
    }));
  }

  addToCart(product) {
    const cartItems = this.state.cartItems.slice(); //create a clone
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({
      cartItems: cartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  removeItem(removedItem) {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((item) => {
        return item.id !== removedItem.id;
      }),
    }));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(
        this.state.cartItems.filter((item) => {
          return item.id !== removedItem.id;
        })
      )
    );
  }

  checkout() {
    this.setState({
      showCheckout: true,
    });
  }

  handleChange(name, val) {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: val,
      },
    }));
  }

  openModal(item) {
    this.setState({
      product: item,
    });
  }

  closeModal() {
    this.setState({
      product: null,
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div className="row">
        <div className="col-9">
          <FilterBar
            count={this.state.products.length}
            sort={this.state.sort}
            filter={this.state.filter}
            filterBy={this.filterBy}
            sortBy={this.sortBy}
          />
          <div className="row" style={{}}>
            {this.state.products.map((item) => {
              return (
                <Item
                  item={item}
                  addToCart={this.addToCart}
                  openModal={this.openModal}
                />
              );
            })}
          </div>
        </div>
        <div className="col-3 cart">
          <CartHeader cartItems={this.state.cartItems} />
          <CartContents
            cartItems={this.state.cartItems}
            removeItem={this.removeItem}
          />
          <CartFooter
            cartItems={this.state.cartItems}
            checkout={this.checkout}
          />
          {this.state.showCheckout && (
            <CheckoutForm
              formData={this.state.formData}
              handleChange={this.handleChange}
            />
          )}
        </div>
        {product && <ProductDetails closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default Content;
