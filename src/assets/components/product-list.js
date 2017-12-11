import React, { Component } from 'react';
import Breadcrumb from './breadcrumb';
import Product from './product';
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/product.css';

class ProductList extends Component {
	render() {
		return (
			<div>
				<Breadcrumb categories={this.props.categories} />
				<div className="container product-list">
					<ul>{
						this.props.products.map((product, i) => {
							return <Product key={product.id} product={product} />;
						})
					}
					</ul>
				</div>
			</div>
		);
	}
}

export default ProductList;
