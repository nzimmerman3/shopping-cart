import React from 'react'
import data from "../data.json"
import FilterBar from './FilterBar'
import CartHeader from './CartHeader'
import CartContents from './CartContents'
import Item from './Item';

class Items extends React.Component {
  constructor() {
    super()
    this.state = {
      products: data,
      sort: "",
      filter: "",
      cartItems: []
    }
    this.filterBy = this.filterBy.bind(this)
    this.sortBy = this.sortBy.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  filterBy(event) {
    if (event.target.value === "") {
      this.setState({ filter: event.target.value, products: data })
    }
    else {
      this.setState({
        filter: event.target.value,
        sort: "",
        products: data.filter(
          (product) => product.type === event.target.value
        )
      })
    }
  }

  sortBy(event) {
    const sort = event.target.value
    this.setState(state => ({
      sort: sort,
      products: state.products
        .sort((item1, item2) =>
          sort === "highest"
            ? item1.price < item2.price 
              ? 1 
              : -1
            :
          sort === "lowest" 
            ? item1.price < item2.price 
              ? -1 
              : 1
            :
          sort === "name"
            ? item1.name > item2.name
              ? 1
              : -1
            //default to most recent (ids assigned sequentially) 
            : item1.id > item2.id
              ? 1
              : -1
        )
    }))
  }

  addToCart(product) {
    const cartItems = this.state.cartItems.slice() //create a clone
    let alreadyInCart = false
    cartItems.forEach(item => {
      if(item.id === product.id) {
        item.count++
        alreadyInCart = true
      }
    })
    if(!alreadyInCart) {
      cartItems.push({...product, count: 1})
    }
    this.setState({
      cartItems: cartItems
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-10">
          <FilterBar
            count={this.state.products.length}
            sort={this.state.sort}
            filter={this.state.filter}
            filterBy={this.filterBy}
            sortBy={this.sortBy}
          />
          <div className="row" style={{}}>
            {this.state.products.map(item => {
              return (
                <Item item={item} addToCart={this.addToCart}/>
              )
            })}
          </div>
        </div>
        <div className="col-2">
          <CartHeader cartItems={this.state.cartItems}/>
          <CartContents cartItems={this.state.cartItems}/>
        </div>
      </div>
    )
  }
}

export default Items