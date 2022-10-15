function eventEmitter() {
  let events = {};
  return {
    subscribe: (name, cb) => {
      (events[name] || (events[name] = [])).push(cb);
      return {
        unsubscribe: () => {
          events[name] && events[name].splice(events[name].indexOf(cb), 1);
        }
      };
    },
    emit: (name, data) => {
      (events[name] || []).forEach(fn => fn(data));
    }
  };
}

const emitter = eventEmitter();

class GoodsMin extends React.Component {
	constructor(props) {
		super(props);
		this.state = { goods: 0 };
		this.getGoods = this.getGoods.bind(this);
		this.getGoods();
		const subscriptionChangeState = emitter.subscribe("CHANGE", (state) => this.setState({ goods: state }));
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
		    body: JSON.stringify({command: 'getGoods', since: 0})
		}).then(response => {
			response.json().then(body => {
				this.setState({ goods: body.goods[0] });
			});
		});
		//console.log(10);
	}

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
		console.log(this.state.goods);
		let rows = [];
		for (let i = 0; i < this.state.goods.length; i++)
			rows.push(<Card id={this.state.goods[i].id} name={this.state.goods[i].name} img={this.state.goods[i].photos} price={this.state.goods[i].price} createdAt={this.state.goods[i].created_at} />);
		return (
			<div>
			  {rows}
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
		for (let i = 0; i < this.props.img.length; i++) {
			if (i == 0)
				butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} class="active" aria-current="true" aria-label={"Slide " + i}></button>);
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
			<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3"  style={{float: 'left'}}>
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
				      <a href={"/goods/" + this.props.id}><h5 className="card-title">{this.props.name}</h5></a>
				      <p className="card-text">{this.props.price + "₽"}</p>
				      <p className="card-text"><small className="text-muted">{dateStr}</small></p>
				    </div>
			    </div>
			</div>
		);
	}
}

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.getGoods = this.getGoods.bind(this);
	}

	getGoods(event) {
		/*const data = new FormData();
		data.append('command', 'getGoods');
		data.append('since', 0);*/
		fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'searchGoods', word: document.getElementById("search").value })
		}).then(response => {
			response.json().then(body => {
				emitter.emit("CHANGE", body.goods[0]);
				//console.log(this.state.goods);
			});
		});
		//console.log(10);
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
  <GoodsMin />,
  document.getElementById('goods-min')
);

ReactDOM.render(
  <Search />,
  document.getElementById('search-wrapper')
);