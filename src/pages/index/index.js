
import React ,{Component} from 'react';

import TopHead from '@/components/top-head.js';
import BottomBar from '@/components/bottombar.js';
import {} from 'react-router-dom';
import './index.less';
import BMap from 'BMap';
import { Icon } from 'antd';
import {connect} from 'react-redux';



class Index extends Component{
	constructor(poprs) {
	    super(poprs);
		this.parentFnCenter = this.parentFnCenter.bind(this);
		this.state = {
			isLogin:false,
			cityInfo:{}
		}	
	}
	render(){
		let obj = {
			Left:()=>{
				return (
					<div>
						<Icon type="search" />
					</div>
				)
			},
			Right:()=>{
				return (
					<div>
						{this.state.isLogin?<Icon type="user" />:<span>登录|注册</span>}		
					</div>
				)
			},
			title:this.props.cityInfo.name
		}


		return (
			<div>
				<TopHead obj={{...obj}} leftFn={this.parentFnLeft} RigthFn={this.parentFnRight} CenterFn={this.parentFnCenter}></TopHead>
				<BottomBar isSelected={0} />
			</div>
		)
	}
	
	parentFnLeft(){
		alert('父')
	}
	parentFnRight(){
		alert('父有')
	}
	parentFnCenter(){
		this.props.history.push({
			pathname:'/position'
		})
		
	}
	componentDidMount(){
		
		var _self = this;
		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r){
			var point = new BMap.Point(r.longitude,r.latitude);
			var geoc = new BMap.Geocoder();  
			geoc.getLocation(point, (rs)=>{
				
				let adder = {
					"pinyin":"guangzhou",
					"is_map":true,
					"longitude":rs.point.lng,
					"latitude":rs.point.lat,
					"sort":6,
					"area_code":"020",
					"abbr":"GZ",
					"name":rs.addressComponents.city,
					"id":4	
				}
				_self.props.changCity(adder)
				
			})
			
		},{enableHighAccuracy: true});
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
})(Index);
