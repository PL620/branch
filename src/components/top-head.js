import React ,{Component} from 'react';
import './less/top-head.less';


class TopHead extends Component{
	constructor(poprs) {
	    super(poprs);
		this.search = this.search.bind(this);
		this.adder = this.adder.bind(this);
		this.user = this.user.bind(this);
		this.state = {}
	}
	render(){
		return (
			<div className="header-nav">
				<div className="left" onTouchStart={this.search}>
					{this.props.obj.Left?<this.props.obj.Left />:''}
				</div>
				<div className="center">
					<span onTouchStart={this.adder}>{this.props.obj.title}</span>
				</div>
				<div className="right" onTouchStart={this.user}>
					{this.props.obj.Right?<this.props.obj.Right />:''}
				</div>
			</div>
		)
	}
	search(){
		if(this.props.leftFn&&typeof this.props.leftFn == 'function'){
			this.props.leftFn();
		}
	}
	adder(){
		if(this.props.CenterFn&&typeof this.props.CenterFn == 'function'){
			this.props.CenterFn();
		}	
	}
	user(){
		if(this.props.RigthFn&&typeof this.props.RigthFn == 'function'){
			this.props.RigthFn();
		}		
	}
}

export default TopHead;
