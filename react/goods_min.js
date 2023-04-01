import React from 'react';
import { connect } from 'react-redux';
import { getGoodsFromAPI } from '../store/reducers/action_creators';
import { bindActionCreators } from '@reduxjs/toolkit';
import { fetchAllGoodsState, goodsAPI } from '../store/services/goods_service';
import { store } from './app';
import { setLastArgs } from '../store/reducers/goods_slice';

class GoodsMin extends React.Component {
//	unsubscribe = null;

	constructor(props) {
		super(props);
		//this.state = { lastArgs: null };
		//this.state = { goods: useSelector((state) => state.goods) };
		//this.getNew = this.getNew.bind(this);
		//this.getPopular = this.getPopular.bind(this);
  		//this.dispatch = useDispatch();
		//const subscriptionChangeState = this.props.emitter.subscribe("CHANGE", (state) => this.setState({ goods: state }));
	}

	//getNew() {
		/*const data = new FormData();
		data.append('command', 'getGoods');
		data.append('since', 0);*/
		/*fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({command: 'getNew', since: 0})
		}).then(response => {
			response.json().then(body => {
				this.setState({ goods: body.goods[0] });
			});
		});*/
		/*const searchParams = new URLSearchParams(location.search);
		this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'new' }, '/api', 'POST').then(resolve => {
			if (resolve.body.goods[0].length == 0) {
				this.props.updateGoods('Ничего не найдено!');
				return;
			}
			this.props.updateGoods(resolve.body.goods[0]);
		}).catch(reject => {
			this.props.updateGoods(reject.error);
		});*/
		
		//const searchParams = new URLSearchParams(location.search);
		//this.props.getGoodsFromAPI((searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", 0, 'new');
		
		/*const searchParams = new URLSearchParams(location.search);
		this.props.getGoodsAll({ word: ((searchParams.get('query') && searchParams.get('query').length > 1) ?
			searchParams.get('query') : ""), since: 0, sort: 'new'});*/
		//console.log(10);
	//}

	//getPopular() {
		/*const searchParams = new URLSearchParams(location.search);
		this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'popular' }, '/api', 'POST').then(resolve => {
			if (resolve.body.goods[0].length == 0) {
				this.props.updateGoods('Ничего не найдено!');
				return;
			}
			this.props.updateGoods(resolve.body.goods[0]);
		}).catch(reject => {
			this.props.updateGoods(reject.error);
		});*/
		
		//const searchParams = new URLSearchParams(location.search);
		//this.props.getGoodsFromAPI((searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", 0, 'popular');
		/*const searchParams = new URLSearchParams(location.search);
		this.props.getGoodsAll({ word: ((searchParams.get('query') && searchParams.get('query').length > 1) ?
			searchParams.get('query') : ""), since: 0, sort: 'popular'})
	}*/

	componentDidMount() {
/*
		const { fetchAllGoods } = this.props;
		// Start a subscription for the component to the cached data
		const { unsubscribe } = fetchAllGoods();
	
		// Store the unsubscribe promise for later use
		this.unsubscribe = unsubscribe;
*/


		const searchParams = new URLSearchParams(location.search);
		let lastArgs = { word: ((searchParams.get('query') && searchParams.get('query').length > 1) ?
			searchParams.get('query') : ""), since: 0};
		if (searchParams.get('sort') == 'new' || !searchParams.get('sort')) {
			this.props.fetchAllGoods({ ...lastArgs, sort: 'new' });
			this.props.setLastArgs({ ...lastArgs, sort: 'new' });
			//this.setState({ lastArgs: { ...lastArgs, sort: 'new' } });
		}
		else if (searchParams.get('sort') == 'popular') {
			this.props.fetchAllGoods({ ...lastArgs, sort: 'popular' });
			this.props.setLastArgs({ ...lastArgs, sort: 'popular' });
			//this.setState({ lastArgs: { ...lastArgs, sort: 'popular' } });
		}
	}

	/*componentDidUpdate(prevProps) {
		if (this.props.goods !== prevProps.goods)
			this.setState({goods: this.props.goods});
	}*/

	/*componentWillReceiveProps(nextProps) {
		console.log(nextProps.goods);
		if (!nextProps.goods) {
			console.log(10000000000000);
			if (!window.location.href.match("search=true")) {
				if (window.location.href.match("sort=new") || !window.location.href.match("sort")) {
					this.getNew();
				}
				else if (window.location.href.match("sort=popular")) {
					this.getPopular();
				}
			}
		}
		else {
			this.setState({goods: nextProps.goods});
		}
	}*/

	/*componentWillReceiveProps(newProps) {
		console.log(newProps.goods);
		this.setState({ goods: newProps.goods });
	}*/

	render() {
		/*let rows = [];
		let rowsGroups = [];
		let j = 0;
		for (let i = 0; i < this.state.goods.length; i++) {
			rows.push(<Card name={this.state.goods[i].name} img={this.state.goods[i].photos} price={this.state.goods[i].price} createdAt={this.state.goods[i].created_at} />);
			j++;
			if (j == 3 || i == this.state.goods.length - 1) {
				j = 0;
				rowsGroups.push(<div className="card-group">{rows}</div>);
				rows = [];
			}
		}
		return (
			<div>
			  {rowsGroups}
			</div>
		);*/
		//console.log(this.state.goods);
		let rows = [];
		//let fetchAllGoodsState = goodsAPI.endpoints.fetchAllGoods;
		//console.log(fetchAllGoodsState.select(this.state.lastArgs)(store.getState()));
		//console.log(fetchAllGoodsState);
		//console.log(this.state.lastArgs);
		console.log(this.props.fetchAllGoodsState(this.props.lastArgs));
		//console.log(fetchAllGoodsState(store.getState()));
		if (!this.props.fetchAllGoodsState(this.props.lastArgs).isLoading &&
			!this.props.fetchAllGoodsState(this.props.lastArgs).isUninitialized) {
			if (!this.props.fetchAllGoodsState(this.props.lastArgs).isError) {
				let goods = this.props.fetchAllGoodsState(this.props.lastArgs).data.goods[0];
				//console.log(goods);
				for (let i = 0; i < goods.length; i++)
					rows.push(<Card id={goods[i].id} name={goods[i].name} img={goods[i].photos} price={goods[i].price}
						createdAt={goods[i].created_at} />);
			} else {
				rows = this.props.fetchAllGoodsState(this.props.lastArgs).error.data.error;
			}
		}
		else {
			rows = 'Подождите, идет загрузка...';
		}
		//console.log(this.props.lastArgs);
		return (
			<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9 mb-3 mt-3">
				<main id="goods-min">
			  		{rows}
				</main>
			</div>
		);
	}
}

class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let date = new Date(this.props.createdAt);
		let dateStr = date.toLocaleString('ru', {
	        year: 'numeric',
	        month: 'long',
	        day: 'numeric',
	        hour: 'numeric',
	        minute: 'numeric'
	      });
		let butImg = [];
		//console.log(this.props.img);
		for (let i = 0; i < this.props.img.length; i++) {
			if (i == 0)
				butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide " + i}></button>);
			else
				butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} aria-label={"Slide " + i}></button>);
		}
		let img = [];
		for (let i = 0; i < this.props.img.length; i++) {
			if (i == 0)
				img.push(<div className="carousel-item active"><img className="d-block w-100" src={"goods_photos/" + this.props.img[i]} alt={"Slide " + i}/></div>);
			else
				img.push(<div className="carousel-item"><img className="d-block w-100" src={"goods_photos/" + this.props.img[i]} alt={"Slide " + i}/></div>);
		}
		return (
			<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3"  style={{float: 'left', height: '450px'}}>
				<div className="card m-1">
					<div id={"carouselGoodsIndicators" + this.props.id} data-bs-interval="false" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-indicators">
						{butImg}
					</div>
					<div className="carousel-inner">
						{img}
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
					</div>
					<div className="card-body">
					<a href={"/goods/" + this.props.id} target="_blank" style={{color: "black"}}><h5 className="card-title">{this.props.name.length > 45 ? this.props.name.substring(0, 45) + "..." : this.props.name}</h5></a>
					<p className="card-text">{this.props.price + "₽"}</p>
					<p className="card-text"><small className="text-muted">{dateStr}</small></p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
		fetchAllGoodsState: (args) => goodsAPI.endpoints.fetchAllGoods.select(args)(state),
		lastArgs: state.goodsReducer.lastArgs
    };
}

/*goods: state.goodsReducer.goods,
isLoading: state.goodsReducer.isLoading,
error: state.goodsReducer.error*/

/*const mapDispatchToProps =  (dispatch) => {
  return {
    getGoodsAll: (word, since, sort) => dispatch(getGoodsFromAPI(word, since, sort))
  }
}*/

const mapDispatchToProps = {
    fetchAllGoods: goodsAPI.endpoints.fetchAllGoods.initiate,//(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
	setLastArgs: setLastArgs
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsMin);

/*ReactDOM.render(
  <GoodsMin />,
  document.getElementById('goods-min')
);

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.getGoods = this.getGoods.bind(this);
		this.getGoodsURL = this.getGoodsURL.bind(this);
	}

	componentDidMount() {
        if (window.location.href.match("search=true")) {
        	let params = new URLSearchParams(new URL(window.location.href).search);
			let query;
			let sort;
			for(let pair of params.entries()) {
			  if (pair[0] == 'query') {
			  	query = pair[1];
			  }
			  else if (pair[0] == 'sort') {
			  	sort = pair[1];
			  }
			}
        	document.getElementById("search").value = query;
			this.getGoodsURL(query, 0, sort);
		}
    }

	getGoodsURL(query, since, sort) {
		fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'searchGoods', word: query, since: since, sort: sort })
		}).then(response => {
			response.json().then(body => {
				emitter.emit("CHANGE", body.goods[0]);
			});
		});
	}*/

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

	/*getGoods(event) {
		const url = new URL(window.location);
		url.searchParams.set('search', 'true');
		url.searchParams.set('query', document.getElementById("search").value);
		window.history.pushState({}, '', url);
		window.location.reload();
	}

	render() {
		return (
			<div style={{textAlign: 'center', marginBottom: '25px'}}>
				<input type="text" class="form-control" id="search" style={{display: 'inline', width: '60vw', marginRight: '10px'}}/>
				<button type="button" class="btn btn-primary" onClick={this.getGoods} style={{display: 'inline'}}>Найти!</button>
			</div>
		);
	}
}

ReactDOM.render(
  <Search />,
  document.getElementById('search-wrapper')
);

var links = [
  "Новые",
  "Подписки",
  "Популярные"
];

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.output = this.output.bind(this);
    let params = new URLSearchParams(new URL(window.location.href).search);
	let sort;
	for(let pair of params.entries()) {
	  if (pair[0] == 'sort') {
	  	sort = pair[1];
	  }
	}
	if (!sort || sort == 'new') {
		var active = [true];
	    for (var i = 1; i < links.length; i++) {
	      active.push(false);
	    }
	}
	else if (sort == 'popular') {
		var active = [];
	    for (var i = 0; i < links.length; i++) {
	      active.push(false);
	    }
	    active[2] = true;
	}
	this.state = {isActive: active};
  }

  output = num => {
    var active = [];
    for (var i = 0; i < links.length; i++) {
      active.push(false);
    }
    active[num] = true;
    this.setState({ isActive : active});
  }

  render() {
    var rows = [];
    for (var i = 0; i < links.length; i++) {
      rows.push(<Nav isActive={this.state.isActive[i]} name={links[i]} func={this.output}/>);
    }
    return (
      <span>
        {rows}
        <LogReg/>
      </span>
    );
  }
}

class Nav extends React.Component {
  constructor(props) {
    super(props);

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var num;
    for (var i = 0; i < links.length; i++) {
      if (this.props.name == links[i]) {
        num = i;
      }
    }
    this.props.func(num);
    if (this.props.name == "Популярные") {
      const url = new URL(window.location);
	  url.searchParams.set('sort', 'popular');
	  window.history.pushState({}, '', url);
	  window.location.reload();
    }
    else if (this.props.name == "Новые") {
      const url = new URL(window.location);
	  url.searchParams.set('sort', 'new');
	  window.history.pushState({}, '', url);
	  window.location.reload();
    }
  }

  render() {
    var ariaCurrent = this.props.isActive ? "page" : null;
    var className = 'nav-link';
    if (this.props.isActive) {
      className += ' active';
    }
    return (
      <li className="nav-item d-block d-sm-block d-md-inline-block"><a href="#" className={className} aria-current={ariaCurrent} onClick={this.handleClick}>{this.props.name}</a></li>
    );
  }
}

class LogReg extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {logout: false, confirm: null, nick: null};
  }
  componentDidMount() {
  	fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'isLoggedIn' })
		}).then(response => {
			response.json().then(body => {
				this.setState({logout: body.logout, confirm: body.confirm, nick: body.nick});
			});
		});
  }
  render() {
  	console.log(this.state);
  	if (!this.state.logout) {
  	  return (
	    <li className="nav-item d-block d-sm-block d-md-inline-block px-3"><a href="/logreg" className="nav-link" id="logreg">Вход/Регистрация</a></li>
	  );
  	}
    else {
      return (
      	<div className="dropdown d-block d-sm-block d-md-inline-block px-3">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            {this.state.nick} {this.state.confirm ? "(осуществлен вход)" : "(требуется подтверждение почты)"}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.state.confirm ? <li><a className="dropdown-item" href="/goods/create">Продать</a></li> : ''}
            {this.state.confirm ? <li><a className="dropdown-item" href="#">Создано</a></li> : ''}
            <li><a className="dropdown-item" href="#">Настройки</a></li>
            <li><a className="dropdown-item" href="/logout">Выйти</a></li>
          </ul>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <NavBar />,
  document.getElementById('nav')
);*/