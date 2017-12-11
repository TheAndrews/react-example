class ProductController {
    searchProducts(search) {
        return new Promise((resolve, reject) => {
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + search,
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                let items = [];
                let categories = [];
                responseJson.filters.forEach((filter, i) => {
                    filter.values.forEach((value, i) => {
                        value.path_from_root.forEach((path, i) => {
                            categories.push(path.name);        
                        });
                    });
                });

                for(let i = 0; i < 4; i++) {
                    const result = responseJson.results[i];
                    items.push({
                        id: result.id,
                        title: result.title,
                        price: {
                            currency: result.currency_id,
                            amount: result.price,
                            decimals: 2
                        },
                        picture: result.thumbnail,
                        condition: result.condition,
                        free_shipping: result.shipping.free_shipping,
                        state_name: result.address.state_name
                    });
                }

                const products = {
                    author: {
                        name: 'Andrews',
                        lastname: 'Wu'
                    },
                    categories: categories,
                    items: items
                 }
                return resolve(products);
            })
            .catch((error) => {
                console.error(error);
            });
        });
    }

    getProduct(id) {
        return new Promise((resolve, reject) => {
            const promises = [];
            promises.push(this.getProductDetail(id));
            promises.push(this.getProductDetailDescription(id));
            promises.push(this.getProductPicture(id));
            resolve(Promise.all(promises).then((result) => {
                const product = {
                    author: {
                        name: 'Andrews',
                        lastname: 'Wu'
                    },                    
                    item: this.buildProduct(result[0], result[1], result[2])
                 };

                return product;
            }));
        });
    }

    getProductDetail(id) {
        return new Promise((resolve, reject) => {
            fetch('https://api.mercadolibre.com/items/' + id,
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {                
                return resolve(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
        });
    }

    getProductDetailDescription(id) {
        return new Promise((resolve, reject) => {
            fetch('https://api.mercadolibre.com/items/' + id + '/description',
            {
                method: 'GET'
            })
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (!responseJson.text)
                    return resolve(responseJson.plain_text);    
                else
                    return resolve(responseJson.text);
            })
            .catch((error) => {
                console.error(error);
            });
        });
    }
    
    getProductPicture(id) {
        return new Promise((resolve, reject) => {
            fetch('https://api.mercadolibre.com/items/' + id,
            {
                method: 'GET'
            })
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                return resolve(responseJson.pictures);
            })
            .catch((error) => {
                console.error(error);
            });
        });
    }

    buildProduct(result, description, pics){
        let item = {
            id: result.id,
            title: result.title,
            price: {
                currency: result.currency_id,
                amount: result.price,
                decimals: 2
            },
            picture: pics[0].url,
            condition: result.condition,
            free_shipping: result.shipping.free_shipping,
            sold_quantity: result.sold_quantity,
            description: description
        };
        return item;
    }
    
}


module.exports = ProductController;