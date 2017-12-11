import React, { Component } from 'react';
import '../stylesheets/detail.css';
import 'bootstrap/dist/css/bootstrap.css';
import ProductController from '../../controllers/product-controller';
import DOMPurify from 'dompurify'

class Detail extends Component {
    componentDidMount() {
        const self = this;
        if (!this.props.id)
            return;

        new ProductController().getProduct(this.props.id).then((product) => {
            self.setState({
                product: product
            });
        });
    }

    render() {
        if (!this.state)
            return (<div></div>);

        if (!this.state.product)
            return (<div></div>);

        const product = this.state.product;
        return (
            <div>
                <div className="container detail">
                    <div className="product-detail">
                        <div className="detail-description">
                            <div>
                                <img src={product.item.picture} alt="" />
                            </div>
                            <div className="description">
                                <h2>Descrição do produto</h2>
                                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.item.description) }} ></div>
                            </div>
                        </div>
                        <div className="detail-buy">
                            <label className="sold-info">{`${product.item.condition === 'new' ? 'novo' : 'usado'} - ${product.item.sold_quantity} vendidos`}</label>
                            <label className="title">{product.item.title}</label>
                            <label className="price">{`$ ${product.item.price.amount}`}</label>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
