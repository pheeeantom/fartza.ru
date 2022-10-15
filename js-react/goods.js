class ProductWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = { goods: 0 };
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
		fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'getGoodsById', id: window.location.href.match("goods/(.+)#?")[1] })
		}).then(response => {
			response.json().then(body => {
				this.setState({ goods: body.goods[0] });
				//console.log(this.state.goods);
			});
		});
		//console.log(10);
	}

	render() {
		if (!this.state.goods[0]) {
			return null;
		}
		else {
			return (
				<Product id={this.state.goods[0].id} name={this.state.goods[0].name} img={this.state.goods[0].photos} price={this.state.goods[0].price} createdAt={this.state.goods[0].created_at} desc={this.state.goods[0].description} />
			);
		}
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
					    </div>
				    </div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
  <ProductWrapper />,
  document.getElementById('goods-min')
);