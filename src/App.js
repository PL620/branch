import React,{Component} from 'react';
import {Route,HashRouter as Router,Switch} from 'react-router-dom';
import Index from './pages/index/index.js';
import SearchPosition from './pages/position/search-position.js';
import Search from './pages/position/search.js';

class App extends Component{
	constructor(poprs) {
	  super(poprs);
		this.state = {
			isLogin:true
		}	
	}
	render(){
		return (
		
			<Router>
					<Switch>
						<Route path="/" component={Index} exact></Route>
						<Route path="/position" component={SearchPosition} exact></Route>
						<Route path="/search" component={Search} exact></Route>
					</Switch>
			</Router>
		
		)
	}
	
}


// function Fn(){
// 	return(
// 		
// 	)
// }
// 
// React.createClass({})
//<Fn />

export default App;
