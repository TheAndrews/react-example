import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/product.css';

class Product extends Component {
    render() {
        const product = this.props.product;
        return (
            <li className="product-li">
                <div className="product-image">
                    <a href={`/items/${product.id}`}><img src={product.picture} alt="" /></a>
                </div>
                <div className="product-info">
                    <label className="price">{`$ ${product.price.amount}`}</label><br />
                    <a href={`/items/${product.id}`}><label className="title" >{product.title}</label></a>
                </div>
                <div className="product-state">
                    <label>{product.state_name}</label>
                </div>
                {this.props.product.name}
            </li>
        );
    }
}

export default Product;
