import React, { Component } from 'react';
import '../stylesheets/search.css';
import 'bootstrap/dist/css/bootstrap.css';
import ProductController from '../../controllers/product-controller';

class Search extends Component {

  componentWillMount(){
    this.setState({
      search: ''
    });
  }

  componentDidMount(){
    if (!this.props.search)
      return;

    this.search(this.props.search);
  }

  search(text) {     
    this.getProducts(text);
  };

  handleChange (e) {
    this.setState({
      search: e.target.value
    });
  }

  getProducts(search) {
    const props = this.props;
    new ProductController().searchProducts(search).then((products) => {
      props.onSearch(products);
    });    
  }

  handleKeyPress(e){
    if (e.key === 'Enter') {      
      document.getElementById('search-link').click();
    }
  }

  render() {
    if (!this.state)
      return <div></div>;

    return (
      <div className="search">
        <header className="search-header">
          <a href="/" className="header-logo">Mercado Livre Brasil - Onde comprar e vender de Tudo</a>
          <div className="div-search">
            <input id="input-search" value={this.state.search} onKeyPress={this.handleKeyPress} onChange={(e) => {this.handleChange(e)}} type="text" placeholder="Nunca dejes de buscar"></input>
            <button id="btn-search" className="nav-search-btn">
              <a id="search-link" href={`/items?search=${this.state ? this.state.search : ''}`}>
                <i className="glyphicon glyphicon-search"></i>
              </a>
            </button>
          </div>
        </header>
      </div>
    );
  }
}
//onClick={() => this.search()} 
export default Search;
