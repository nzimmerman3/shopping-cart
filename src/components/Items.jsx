import React from 'react'
import data from "../data.json"
import { Link, BrowserRouter } from 'react-router-dom';
import {formatCurrency, formatDescription} from "../util"

class Items extends React.Component {
    constructor() {
        super()
        this.state = {
            products: data,
            size: "",
            sort: ""
        }
    }
    render() {
        return (
            <div>
                <div className="row" style={{}}>
                    {this.state.products.map(item => {
                        return (
                            <div className="col col-sm-3 d-flex">
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