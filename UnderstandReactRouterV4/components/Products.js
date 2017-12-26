import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Product from './Product';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        // Create an array of <li> items for each product
        // var data = this.productData;
        const productData = [
            {
                id: 1,
                name: 'NIKE Liteforce Blue Sneakers',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
                status: 'Available'
            },
            {
                id: 2,
                name: 'Stylised Flip Flops and Slippers',
                description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor',
                status: 'Out of Stock'
            },
            {
                id: 3,
                name: 'ADIDAS Adispree Running Shoes',
                description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
                status: 'Available'
            },
            {
                id: 4,
                name: 'ADIDAS Mid Sneakers',
                description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
                status: 'Out of Stock'
            }
        ];

        // Created list of <Link>s using productData.id and stored it in linkList
        var linkList = productData.map( (product) => {
            return (
                <li key={product.id}>
                    <Link to={`${this.props.match.url}/${product.id}`}>
                        {product.name}
                    </Link>
                </li>
            );
        });
        return (
            <div>
                <h3>Products</h3>
                <ul>{linkList}</ul>

                <Switch>
                    {/* 
                        You may have expected component={Product} instead of inline render function. The problem
                        is that we need to pass down "productData" to Product component along with all the
                        existing props. Although there are other ways you can do this, I find this method to be 
                        the easiest {...props} uses the ES6's spread syntax to pass the whole props object
                        to the component.
                    */}
                    <Route path={`${this.props.match.url}/:productId`} render={ (props) => <Product data={productData} {...props} /> } />
                    <Route exact path={this.props.match.url} render={ () => (<div>Please select a product.</div>) } />
                </Switch>
            </div>
        );
    }
}