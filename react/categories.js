import React from "react";

var categories = {
	"Статьи": [
		"Новинки","Тренды","Коллаборации"
	],
	"Одежда": [
		"Б/У","Российское","ХендМейд","Обувь","Верх","Низ", "Головные уборы"
	]
};

export default class CategoriesBar extends React.Component {
	constructor(props) {
		super(props);
		var active = [];
	    for (var i = 0; i < Object.keys(categories).length; i++) {
	      active.push(false);
	    }
	    this.state = {isActive: active};
		this.output = this.output.bind(this);
	}

	output = num => {
	    var active = [];
	    for (var i = 0; i < Object.keys(categories).length; i++) {
	      active.push(false);
	    }
	    active[num] = !this.state.isActive[num];
	    this.setState({ isActive : active});
	}

	render() {
		var rows = [];
	    for (var i = 0; i < Object.keys(categories).length; i++) {
	      rows.push(<Category isActive={this.state.isActive[i]} name={Object.keys(categories)[i]} links={categories[Object.keys(categories)[i]]} func={this.output}/>);
	    }
		return (
			<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 mt-3">
				<div className="d-flex flex-column p-3 bg-light">
					<aside id="categories">
						<div className="dropdown">
							{rows}
						</div>
					</aside>
				</div>
			</div>
		);
	}
}

class Category extends React.Component {
	constructor(props) {
		super(props);
		var active = [];
	    for (var i = 0; i < categories[this.props.name].length; i++) {
	      active.push(false);
	    }
	    this.state = {isActive: active};
		this.handleClick = this.handleClick.bind(this);
		this.output = this.output.bind(this);
	}

	getNum() {
	    for (var i = 0; i < Object.keys(categories).length; i++) {
	      if (this.props.name == Object.keys(categories)[i]) {
	        return i;
	      }
	    }
	}

	handleClick() {
	    var num = this.getNum();
	    this.props.func(num);
  	}

  	output = num => {
	    var active = [];
	    for (var i = 0; i < categories[this.props.name].length; i++) {
	      active.push(false);
	    }
	    active[num] = true;
	    this.setState({ isActive : active});
	}

	render() {
		var display = 'none';
		if (this.props.isActive) {
			display = 'block';
		}
		var rows = [];
	    for (var i = 0; i < this.props.links.length; i++) {
	      rows.push(<Link isActive={this.state.isActive[i]} name={this.props.links[i]} num={i} func={this.output}/>);
	    }
		return (
			<div>
				<button onClick={this.handleClick} className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.props.isActive}>
				  {this.props.name}
				</button>
				<div style={{display: display}} className="px-2">
				  {rows}
				</div>
			</div>
		);
	}
}

class Link extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.func(this.props.num);
	}

	render() {
		var classLink = "dropdown-item";
		if (this.props.isActive) {
			classLink += " active";
		}
		return ( <a className={classLink} href="#" onClick={this.handleClick}>{this.props.name}</a> );
	}
}

/*ReactDOM.render(
  <CategoriesBar />,
  document.getElementById('categories')
);*/