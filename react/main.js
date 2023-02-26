import React from "react";

import GoodsMin from './goods-min.js';
import CategoriesBar from './categories.js';
import ProductWrapper from'./goods.js';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.goods);
        if (this.props.goods || window.location.pathname === "/") {
            return (
                <div className="row">
                    <CategoriesBar />
                    <GoodsMin goods={this.props.goods} updateGoods={this.props.updateGoods} getGoodsFromAPI={this.props.getGoodsFromAPI} />
                </div>
            );
        }
        else {
            return (
                <ProductWrapper />
            );
        }
    }
}