import React from "react";
import { connect } from "react-redux";
import { setLastArgs } from "../store/reducers/goods_slice";
import { goodsAPI } from "../store/services/goods_service";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.getGoods = this.getGoods.bind(this);
		this.getGoodsURL = this.getGoodsURL.bind(this);
		this.getGoodsEnter = this.getGoodsEnter.bind(this);
		this.reset = this.reset.bind(this);
	}

	componentDidMount() {
		let searchParams = new URLSearchParams(location.search);
        if (searchParams.get('query') && searchParams.get('query').length > 1) {
        	/*let params = new URLSearchParams(new URL(window.location.href).search);
			let query;
			let sort;
			for(let pair of params.entries()) {
			  if (pair[0] == 'query') {
			  	query = pair[1];
			  }
			  else if (pair[0] == 'sort') {
			  	sort = pair[1];
			  }
			}*/
			let searchParams = new URLSearchParams(location.search);
			let query = searchParams.get('query');
			//let sort = searchParams.get('sort');
        	document.getElementById("search").value = query;
			//this.getGoodsURL(query, 0, sort);
		}
    }

	getGoodsURL(query, since, sort) {
		/*fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'searchGoods', word: query, since: since, sort: sort })
		}).then(response => {
			response.json().then(body => {
				this.props.updateGoods(body.goods[0]);
			});
		});*/
		/*this.props.sendAPIRequest({ command: 'searchGoods', word: query, since: since, sort: sort }, '/api', 'POST').then(resolve => {
			if (resolve.body.goods[0].length == 0) {
				this.props.updateGoods('Ничего не найдено!');
				return;
			}
			this.props.updateGoods(resolve.body.goods[0]);
		}).catch(reject => {
			this.props.updateGoods(reject.error);
		});*/
		sort = sort ?? 'new';
		this.props.fetchAllGoods({ word: query, since, sort });
		this.props.setLastArgs({ word: query, since, sort });
	}

	/*getGoods(event) {
		fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'searchGoods', word: document.getElementById("search").value, since: 0 })
		}).then(response => {
			response.json().then(body => {
				emitter.emit("CHANGE", body.goods[0]);
			});
		});
	}*/

	getGoods(event) {
		/*const url = new URL(window.location);
		url.searchParams.set('search', 'true');
		url.searchParams.set('query', document.getElementById("search").value);
        url.pathname = "/";
		window.history.pushState({}, '', url);*/
		if (document.getElementById("search").value.length > 1) {
			let searchParams = new URLSearchParams(location.search);
			searchParams.set('query', document.getElementById("search").value);
			window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);
			//window.location.reload();
			/*let params = new URLSearchParams(new URL(window.location.href).search);
			let sort;
			for(let pair of params.entries()) {
				if (pair[0] == 'sort') {
					sort = pair[1];
				}
			}*/
			let sort = searchParams.get('sort');
			this.getGoodsURL(document.getElementById("search").value, 0, sort);
		}
	}

	getGoodsEnter(event) {
		if (event.keyCode == 13) {
			this.getGoods(event);
		}
	}

	reset(event) {
		let searchParams = new URLSearchParams(location.search);
		searchParams.set('query', '');
		window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);
		document.getElementById("search").value = "";
		let sort = searchParams.get('sort');
		this.getGoodsURL("", 0, sort);
	}

	render() {
		return (
            <div id="search-wrapper" className="border-bottom">
                <div style={{textAlign: 'center', marginBottom: '25px'}}>
                    <input type="text" className="form-control" id="search" style={{display: 'inline', width: '60vw', marginRight: '10px', verticalAlign: 'middle'}} onKeyUp={this.getGoodsEnter} />
                    <button type="button" className="btn btn-primary" onClick={this.getGoods} style={{display: 'inline', verticalAlign: 'middle'}}>Найти!</button>
					<button type="button" className="link-secondary res" onClick={this.reset} style={{display: 'inline', verticalAlign: 'middle'}}>Сбросить</button>
				</div>
            </div>
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

export default connect(null, mapDispatchToProps)(Search);