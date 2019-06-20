
import React ,{Component} from 'react';
import TopHead from '@/components/top-head.js';
import { Icon } from 'antd';
import './less/search-position.less';
import api from '@/api/api.js';
import {connect} from 'react-redux';



class SearchPosition extends Component{
	constructor(poprs) {
	    super(poprs);
		this.state = {
			isLogin:true,
			cityInfo:{},
			hotCity:[],
			allCity:[]
		}
	}
	render(){
		
		let obj={
			Right:()=>{
				return (
					<div>
						{this.state.isLogin?<Icon type="user" />:<span>登录|注册</span>}		
					</div>
				)
			}
		}
		
		
		let arr = this.state.hotCity.map((item,index)=>{
			return (
				<li key={index}>
					<span onTouchStart={()=>{
						this.btnNav(item)
					}}>{item.name}</span>
				</li>
			)
		})
		
		let arrList = Object.keys(this.state.allCity).sort();
		let list = [];
		arrList.forEach((item,index)=>{
			list.push({
				name:item,
				citys:this.state.allCity[item]
			})
		})
		
		
		let newList = list.map((item,index)=>{
			let liList = item.citys.map((somItem,sonIndex)=>{
				return (
					<li key={sonIndex}>
							<span onTouchStart={()=>{
						this.btnNav(somItem)
					}}>{somItem.name}</span>
					</li>
				)
			})
			return (
				<div key={index}>
					<h3> {item.name}{index==0?<span>(按字母排序)</span>:''}</h3>
					<ul >
						{liList}
					</ul>
				</div>
			)
		})
		
		return (
			<div>
				<TopHead obj={{...obj}} ></TopHead>
				<div className="nowCity">
					<div className="item1">
						<span>当前定位城市:</span>
						<span>定位不准时，请在城市列表中选择</span>
					</div>
					<div className="item2">
						<span>{this.props.cityInfo.name}</span>
						<span>
							<Icon type="right" />
						</span>
					</div>
				</div>
				<div className="hotCity">
					<h3>热门城市</h3>
					<ul>
						{arr}
					</ul>
				</div>
				<div className="sort">
					{newList}
				</div>
			</div>		
		)
	}
	componentDidMount(){
		
		
		
		// 获取热门城市
		api.hotCity().then((data)=>{
			this.setState({
				hotCity:data
			})
		})	
		
		
		// 获取所有城市
		api.allCity().then((data)=>{
			this.setState({
				allCity:data
			})
		})	
	}
	btnNav(item){
		
		this.props.changCity(item);
		this.props.history.push({
			pathname:'/searchInfoPosition',
			
		})
		
	}
}

export default connect(function(state){
	
	var str = JSON.stringify(state);
	console.log(str)
	return JSON.parse(str); 
},function(dispatch){
	return {
		changCity(info){
			
			dispatch({
				type:'changCity',
				cityInfo:info
			})
		}
	}
})(SearchPosition);
