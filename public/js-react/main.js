var links = [
  "Подписки",
  "Новые",
  "Популярные"
];

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    var active = [true];
    for (var i = 1; i < links.length; i++) {
      active.push(false);
    }
    this.state = {isActive: active};
    this.output = this.output.bind(this);
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
  }

  render() {
    var ariaCurrent = this.props.isActive ? "page" : null;
    var className = 'nav-link';
    if (this.props.isActive) {
      className += ' active';
    }
    return (
      <li className="nav-item"><a href="#" className={className} aria-current={ariaCurrent} onClick={this.handleClick}>{this.props.name}</a></li>
    );
  }
}

class LogReg extends React.Component {
  render() {
    return (
      <li className="nav-item px-2"><a href="#" className="nav-link" id="logreg">Вход/Регистрация</a></li>
    );
  }
}

ReactDOM.render(
  <NavBar />,
  document.getElementById('nav')
);