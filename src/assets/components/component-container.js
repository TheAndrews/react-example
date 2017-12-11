import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/container.scss';
import Search from './search';
import ProductList from './product-list';
import Detail from './detail';

class ComponentContainer extends Component {
	componentWillMount() {
		this.setState({
			products: [],
			categories: []
		});

	}

	addProdutcs(list) {
		this.setState({
			products: list.items,
			categories: list.categories
		});
	}

	render() {
		let s = this.state;
		return (
			<div className="component-container">
				<Search search={this.props.location.query.search} onSearch={this.addProdutcs.bind(this)} />
				<ProductList categories={s.categories} products={s.products} />
				<Detail id={this.props.params.id} />
			</div>
		);
	}
}

export default ComponentContainer;
