import React, { Component } from 'react';
import '../stylesheets/product.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './product';

class ProductList extends Component {
  render() {
    return (
      <div className="container product-list">
        <ul>{
              this.props.products.map((product, i) => {
                  return <Product key={product.id} product={product} />;
              })
            }
        </ul>
      </div>
    );
  }
}

export default ProductList;
