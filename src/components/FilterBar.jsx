import React from 'react'

export default function filterBar(props) {
    return (
        <div className="filter">
            <div className="filter-result">{props.count} Products</div>
            <div className="filter-type">
                Filter {" "}
                <select value={props.filter} onChange={props.filterBy}>
                    <option value="">ALL</option>
                    <option value="shoe">SHOES</option>
                    <option value="shirt">SHIRTS</option>
                </select>
               
            </div>        
        </div>
    )
}
