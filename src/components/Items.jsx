import React from 'react'
import data from "../data.json"
import { Link, BrowserRouter } from 'react-router-dom';
import {formatCurrency, formatDescription} from "../util"
import FilterBar from './FilterBar'

class Items extends React.Component {
    constructor() {
        super()
        this.state = {
            products: data,
            sort: "",
            filter: ""
        }
        this.filterBy = this.filterBy.bind(this)
    }
     filterBy(event) {
        // return this.state.products.filter(item => {item.type === type})
        console.log(event.target.value)
        if (event.target.value === "") {
            this.setState({ filter: event.target.value, products: data})
        }
        else {
            this.setState({
                filter: event.target.value,
                products: data.filter(
                    (product) => product.type === event.target.value
                )
            })
        }
    }

    render() {
        return (
            <div>
                <FilterBar 
                    count={this.state.products.length}
                    sort={this.state.sort}
                    filter={this.state.filter}
                    filterBy={this.filterBy}
                />
                <div className="row" style={{}}>
                    {this.state.products.map(item => {
                        return (
                            <div className="col col-sm-3 d-flex" style={{"min-width": "25%"}}>
                                <div className="card">
                                    <div className="clickable">
                                        <img className="card-img-top" src={item.image} alt={item.name}/>
                                        <BrowserRouter>
                                            <Link to="/clickable" className="stretched-link"></Link>
                                        </BrowserRouter>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{formatDescription(item.description, 70)}</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="card-text card-price">{formatCurrency(item.price)}</h5>
                                            </div>
                                            <div className="col text-right">
                                                <BrowserRouter>
                                                    <Link to="/product" className="btn btn-primary">Add to cart</Link>
                                                </BrowserRouter>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Items