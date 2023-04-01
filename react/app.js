import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { setupStore } from '../store/store';
import { Provider } from 'react-redux';

export const store = setupStore();

//import emitter from "./emitter.js";

//const GoodsMin = lazy(() => import('./goods-min.js'));
const Search = lazy(() => import('./search.js'));
const NavBar = lazy(() => import('./nav/nav_bar.js'));
//const CategoriesBar = lazy(() => import('./categories.js'));
const Main = lazy(() => import('./main.js'));
//const ProductWrapper = lazy(() => import('./goods.js'));

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Что-то пошло не так.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
            <a href="/">Перейти на главную</a>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }

class App extends React.Component {

    constructor(props) {
        super(props);
        //this.state = { goods: "" };
        //this.updateGoods = this.updateGoods.bind(this);
        //this.sendAPIRequest = this.sendAPIRequest.bind(this);
        //this.getGoodsFromAPI = this.getGoodsFromAPI.bind(this);
    }

    /*updateGoods = (value) => {
        this.setState({ goods: value });
    }*/

    /*sendAPIRequest(params, uri, method) {
        let query = '';
        let headers = {};
        if (method == 'GET') {
            for (let key in params) {
                query += key + "=" + params[key] + "&";
            }
            if (query.length > 0)
                query = '?' + query.slice(0, -1);
            console.log(query);
            headers = {
                //issuedateTo=2005', {
                //10000]
                //quer?referenceyearFrom=2022
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            };
        }
        else {
            headers = {
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            };
            
        }
        return new Promise((resolve, reject) => {
            fetch(uri + query, headers).then((response) => {    // in case of 'response' - headers,  in case of 'response.json' or 'response.text' - body
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    let error = response;
                    //console.log(response);
                    throw error;    // it catches 2 lines below this line
                }
            }).catch((e) => {
                reject({error: 'Error: ' + e.status + "." + (e.message ? e.message : "")});
            }).then((response) => {
                if (!response.headers.get('content-type').startsWith('application/json')) {
                    reject({error: 'Error: ' + response.status + '. Response is not json'});
                }
                return response;
            }).then(response => {
                response.json().then(body => {
                    console.log(1);
                    resolve({body: body, params: params, response: response});
                }).catch((e) => {
                    reject({error: 'Error: ' + e.message});
                });
            });
        });
    }*/

    /*getGoodsFromAPI(word, since, sort) {
		this.sendAPIRequest({ command: 'searchGoods', word: word, since: since, sort: sort }, '/api', 'POST').then(resolve => {
			if (resolve.body.goods[0].length == 0) {
				this.updateGoods('Ничего не найдено!');
				return;
			}
			this.updateGoods(resolve.body.goods[0]);
		}).catch(reject => {
			this.updateGoods(reject.error);
		});
    }*/

    render() {
        return (
            <ErrorBoundary>
                <Provider store={store}>
                    <Router>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/" element={<div><NavBar /><Search /><Main /></div>} />
                                <Route path="/goods/:id" element={<div><NavBar /><Search /><Main /></div>} />
                            </Routes>
                        </Suspense>
                    </Router>
                </Provider>
            </ErrorBoundary>
        );
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('content')
);
root.render(<App />);