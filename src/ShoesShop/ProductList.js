import React, { Component } from 'react'
import ProductShoes from './ProductShoes'

export default class ProductList extends Component {
    renderShoesList = () => {
        let{arrShoes,xemChiTiet} = this.props;
        return arrShoes.map((shoes, index) => {
            return <div className="col-4 p-3" key={index}>
                <ProductShoes sp={shoes} xem={xemChiTiet}/>
            </div>
        })
    }

    render() {
        console.log(this.props.arrShoes)
        return (
            <div>
                <div className="row">
                    {this.renderShoesList()}
                </div>
            </div>
        )
    }
}
