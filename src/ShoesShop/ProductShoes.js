import React, { Component } from 'react'

export default class ProductShoes extends Component {
    render() {
        let {sp,xem} = this.props;
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={sp.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{sp.name}</h5>
                    <p className="card-text">{sp.price}</p>
                    <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => {
                        xem(sp)
                    }}>Details</a>
                </div>
            </div>
        )
    }
}
