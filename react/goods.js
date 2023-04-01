import React from "react";
import { connect } from "react-redux";
import { goodsAPI } from "../store/services/goods_service";

class ProductWrapper extends React.Component {
	constructor(props) {
		super(props);
		//this.state = { goods: 0 };
		this.getGoods = this.getGoods.bind(this);
	}

	componentDidMount() {
        console.log(1000);
        this.getGoods();
    }

	getGoods() {
		/*const data = new FormData();
		data.append('command', 'getGoods');
		data.append('since', 0);*/
		//let searchParams = new URLSearchParams(location.search);
		/*fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'getGoodsById', id: window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop() })
		}).then(response => {
			response.json().then(body => {
				this.setState({ goods: body.goods[0] });
				//console.log(this.state.goods);
			});
		});*/
		//id: window.location.href.match("goods/(.+)#?")[1]
		//console.log(10);
		this.props.fetchGoodsById(window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop());
	}

	render() {
		const id = window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop();
		let goods = this.props.fetchGoodsByIdState(id);
		let rows = null;
		//console.log(goods);
		if (!goods.isLoading &&
			!goods.isUninitialized) {
			if (!goods.isError) {
				goods = goods.data.goods[0][0];
				console.log(goods);
				//console.log(goods);
				rows = (<Product id={goods.id} name={goods.name} img={goods.photos} price={goods.price}
					createdAt={goods.created_at} desc={goods.description} views={goods.views} />);
			} else {
				rows = goods.error.data.error;
			}
		}
		else {
			rows = 'Подождите, идет загрузка...';
		}
		return (
			<div class="mb-3 mt-3">
				<main id="goods-min">
					{rows}
				</main>
			</div>
		);
	}
}

class Product extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		//console.log(this.props.id);
		let date = new Date(this.props.createdAt);
		let dateStr = date.toLocaleString('ru', {
	        year: 'numeric',
	        month: 'long',
	        day: 'numeric',
	        hour: 'numeric',
	        minute: 'numeric'
	      });
		let butImg = [];
		for (let i = 0; i < this.props.img.length; i++) {
			if (i == 0)
				butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide " + i}></button>);
			else
				butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} aria-label={"Slide " + i}></button>);
		}
		let img = [];
		for (let i = 0; i < this.props.img.length; i++) {
			if (i == 0)
				img.push(<div className="carousel-item active"><img className="d-block w-100" src={"/goods_photos/" + this.props.img[i]} alt={"Slide " + i}/></div>);
			else
				img.push(<div className="carousel-item"><img className="d-block w-100" src={"/goods_photos/" + this.props.img[i]} alt={"Slide " + i}/></div>);
		}
		return (
			<div>
				<div className="col-md-1 col-lg-2" style={{float: 'left'}}>&nbsp;</div>
				<div className="col-xs-12 col-sm-12 col-md-10 col-lg-8" style={{float: 'left'}}>
					<div className="my-card">
						<div id={"carouselGoodsIndicators" + this.props.id} data-bs-interval="false" className="carousel slide col-xs-12 col-sm-12 col-md-6 col-lg-6" data-bs-ride="carousel" style={{float: 'left'}}>
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
						<div className="card-body col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{float: 'left'}}>
					      <h5 className="card-title">{this.props.name}</h5>
					      <p className="card-text">{this.props.desc}</p>
					      <p className="card-text">{this.props.price + "₽"}</p>
					      <p className="card-text"><small className="text-muted">{dateStr}</small></p>
					      <p className="card-text"><small className="text-muted">Просмотры: {this.props.views}</small></p>
					    </div>
				    </div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
		fetchGoodsByIdState: (id) => goodsAPI.endpoints.fetchGoodsById.select(id)(state)
    };
}

const mapDispatchToProps = {
    fetchGoodsById: goodsAPI.endpoints.fetchGoodsById.initiate//(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductWrapper);

/*class SearchGoods extends React.Component {
	constructor(props) {
		super(props);
	}

	goToIndex(event) {
		window.open('/?search=true&query=' + document.getElementById("search").value);
	}

	render() {
		return (
			<div style={{textAlign: 'center', marginBottom: '25px'}}>
				<input type="text" class="form-control" id="search" style={{display: 'inline', width: '60vw', marginRight: '10px'}}/>
				<button type="button" class="btn btn-primary" onClick={this.goToIndex} style={{display: 'inline'}}>Найти!</button>
			</div>
		);
	}
}*/

/*ReactDOM.render(
  <ProductWrapper />,
  document.getElementById('goods-min')
);

ReactDOM.render(
  <SearchGoods />,
  document.getElementById('search-wrapper')
);*/