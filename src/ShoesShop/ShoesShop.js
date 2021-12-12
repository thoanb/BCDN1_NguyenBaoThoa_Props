import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'
import dataShoes from '../Data/dataShoes.json'

export default class ShoesShop extends Component {
    state = {
        shoesDetail: {id: 1, name: 'Adidas Prophere', alias: 'adidas-prophere', price: 350, description: 'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n', shortDescription: 'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n', quantity: 995, image: 'http://svcy3.myclass.vn/images/adidas-prophere.png'},
    }

    xemChiTiet = (shoes) => {
        this.setState({
            shoesDetail:shoes
        })
    }
    

    render() {

        return (
            <div className="container">
                <ProductList arrShoes={dataShoes} xemChiTiet={this.xemChiTiet}/>
                <Modal productDetail = {this.state.shoesDetail}/>
            </div>
        )
    }
}
