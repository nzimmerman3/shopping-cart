import React from 'react'

export default function filterBar(props) {
    return (
        <div className="filter">
            <div className="filter-result">{props.count} Products</div>
            <div className="filter-type">
                Filter {" "}
                <select value={props.filter} onChange={props.filterBy}>
                    <option value="">All</option>
                    <option value="shoe">Shoes</option>
                    <option value="shirt">Shirts</option>
                </select>
            </div>
            <div className="filter-sort">
                Sort By {" "}
                <select value={props.sort} onChange={props.sortBy}>
                    <option value="">Recent</option>
                    <option value="highest">Highest</option>
                    <option value="lowest">Lowest</option>
                    <option value="name">Name</option>
                </select>
            </div>        
        </div>
    )
}
