import React from "react";

import GoodsMin from './goods_min.js';
import CategoriesBar from './categories.js';
import ProductWrapper from'./goods.js';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        //console.log(this.props.goods);
        if (this.props.goods || window.location.pathname === "/") {
            return (
                <div className="row">
                    <CategoriesBar />
                    <GoodsMin />
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