import React from "react";

import Nav from './nav';
import { links } from "./links";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.output = this.output.bind(this);
    let active = [true];
    for (let i = 1; i < links.length; i++) {
      active.push(false);
    }
    this.state = {isActive: active};
    /*let params = new URLSearchParams(new URL(window.location.href).search);
    let sort;
    for(let pair of params.entries()) {
      if (pair[0] == 'sort') {
          sort = pair[1];
      }
    }*/
    /*if (!sort || sort == 'new') {
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
    this.state = {isActive: active};*/
  }

  componentDidMount() {
    //let [searchParams, setSearchParams] = useSearchParams();
    const searchParams = new URLSearchParams(location.search);
    let sort = searchParams.get('sort');
    if (sort == 'popular') {
        let active = [];
        for (let i = 0; i < links.length; i++) {
          active.push(false);
        }
        active[2] = true;
        this.setState({isActive: active});
    }
  }

  output = num => {
    let active = [];
    for (let i = 0; i < links.length; i++) {
      active.push(false);
    }
    active[num] = true;
    this.setState({ isActive : active});
  }

  render() {
    let rows = [];
    for (let i = 0; i < links.length; i++) {
      rows.push(<Nav isActive={this.state.isActive[i]} name={links[i]} func={this.output} updateGoods={this.props.updateGoods} getGoodsFromAPI={this.props.getGoodsFromAPI} />);
    }
    let tiles;
    if (!this.props.disableTiles) {
      tiles = (<div>
                <div className="d-md-none" style={{width: '100vw'}}></div>
                  <nav>
                    <ul className="nav nav-pills d-block d-sm-block d-md-flex" id="nav">

                      <span>
                        {rows}
                        <LogReg/>
                      </span>

                    </ul>
                  </nav>
                </div>);
    }
    return (
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom px-5">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
              <span className="fs-4">FARTZA</span>
          </a>

          {tiles}
      </header>
    );
  }
}

class LogReg extends React.Component {
  constructor(props) {
      super(props);
      this.state = {logout: false, confirm: null, nick: null};
  }
  componentDidMount() {
      /*fetch('/api', {
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
        });*/
  }
  render() {
      console.log(this.state);
      if (!this.state.logout) {
        return (
        <li className="nav-item d-block d-sm-block d-md-inline-block px-3"><a href="#" className="nav-link" id="logreg">Вход/Регистрация</a></li>
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