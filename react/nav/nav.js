import React from "react";

import { connect } from "react-redux";
import { setLastArgs } from "../../store/reducers/goods_slice";
import { goodsAPI } from "../../store/services/goods_service";

import { links } from "./links";

class Nav extends React.Component {
    constructor(props) {
        super(props);

        //this.state = { lastArgs: null };

        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let num;
        for (let i = 0; i < links.length; i++) {
            if (this.props.name == links[i]) {
                num = i;
            }
        }
        this.props.func(num);
        //let [searchParams, setSearchParams] = useSearchParams();
        const searchParams = new URLSearchParams(location.search);
        let lastArgs = { word: ((searchParams.get('query') && searchParams.get('query').length > 1) ?
			searchParams.get('query') : ""), since: 0};
        if (this.props.name == "Популярные") {
            /*const url = new URL(window.location);
            url.searchParams.set('sort', 'popular');
            window.history.pushState({}, '', url);
            window.location.reload();*/
            searchParams.set('sort', 'popular');
            window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);
            /*this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'popular' }, '/api', 'POST').then(resolve => {
                if (resolve.body.goods[0].length == 0) {
                this.props.updateGoods('Ничего не найдено!');
                return;
                }
                this.props.updateGoods(resolve.body.goods[0]);
            }).catch(reject => {
                this.props.updateGoods(reject.error);
            });*/
            this.props.fetchAllGoods({ ...lastArgs, sort: 'popular' });
			this.props.setLastArgs({ ...lastArgs, sort: 'popular' });
        }
        else if (this.props.name == "Новые") {
            /*const url = new URL(window.location);
            url.searchParams.set('sort', 'new');
            window.history.pushState({}, '', url);
            window.location.reload();*/
            searchParams.set('sort', 'new');
            window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);
            /*this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'new' }, '/api', 'POST').then(resolve => {
                if (resolve.body.goods[0].length == 0) {
                this.props.updateGoods('Ничего не найдено!');
                return;
                }
                this.props.updateGoods(resolve.body.goods[0]);
            }).catch(reject => {
                this.props.updateGoods(reject.error);
            });*/
            this.props.fetchAllGoods({ ...lastArgs, sort: 'new' });
			this.props.setLastArgs({ ...lastArgs, sort: 'new' });
        }
    }

    render() {
        let ariaCurrent = this.props.isActive ? "page" : null;
        let className = 'nav-link';
        if (this.props.isActive) {
            className += ' active';
        }
        return (
            <li className="nav-item d-block d-sm-block d-md-inline-block"><a href="#" className={className} aria-current={ariaCurrent} onClick={this.handleClick}>{this.props.name}</a></li>
        );
    }
}

/*const mapStateToProps = (state) => {
    return {
		fetchAllGoodsState: (args) => goodsAPI.endpoints.fetchAllGoods.select(args)(state),
		lastArgs: state.goodsReducer.lastArgs
    };
}*/

const mapDispatchToProps = {
    fetchAllGoods: goodsAPI.endpoints.fetchAllGoods.initiate,//(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
	setLastArgs: setLastArgs
}

export default connect(null, mapDispatchToProps)(Nav);