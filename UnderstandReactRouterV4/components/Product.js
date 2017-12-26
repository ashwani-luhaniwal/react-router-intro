import React from 'react';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        /**
         * The "find" method is used to search the array for an object with an id property that equals
         * "match.params.productId". If the product exists, the "productData" is displayed. If not
         * "Product doesn't exist" message is rendered.
         */
        var product = this.props.data.find(p => p.id == this.props.match.params.productId);
        var productData;
        if (product) {
            productData = <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h4>{product.status}</h4>
            </div>;
        } else {
            productData = <h2>Sorry, Product doesn't exist</h2>;
        }

        return (
            <div>
                <div>
                    {productData}
                </div>
            </div>
        );
    }
}