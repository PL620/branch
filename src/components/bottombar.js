
import React ,{Component} from 'react';
import { TabBar } from 'antd-mobile';
import './less/bottom-bar.less';

// 底部导航
class BottomBar extends Component{
	constructor(poprs) {
	    super(poprs);
		
		this.state = {}
	}
	render(){
		return (
			<div className="footer">
					<TabBar
						barTintColor="#fff" 
						unselectedTintColor="#414141"
						tintColor="#3191e8"
						tabBarPosition="top"
					>
						<TabBar.Item title="外卖" 
							icon={
								<div style={{
									width: '37px',
									height: '37px',
									background:`url(${require('images/nav1.png')})`,
									backgroundSize:'100%'}}
								  />
							}
							
							selectedIcon={
								<div style={{
									width: '37px',
									height: '37px',
									background: `url(${require('images/nav1_actived.png')})`,
									backgroundSize:'100%'}}
								/>
							}
							selected={this.props.isSelected === 0}
							onPress={()=>{
								window.location.hash = '/';
							}}
						/>
						<TabBar.Item title="搜索" 
							icon={
								<div style={{
									width: '37px',
									height: '37px',
									background: `url(${require('images/nav2.png')})`,
									backgroundSize:'100%'}}
								  />
							}
							selectedIcon={
								<div style={{
									width: '37px',
									height: '37px',
									background: `url(${require('images/nav2_actived.png')})`,
									backgroundSize:'100%'}}
								/>
							}
							selected={this.props.isSelected === 1}
							onPress={()=>{
								window.location.hash = '/search';
							}}
						/>
						<TabBar.Item title="订单" 
							icon={
								<div style={{
									width: '37px',
									height: '37px',
									background: `url(${require('images/nav3.png')})`,
									backgroundSize:'100%'}}
								  />
							}
							selectedIcon={
								<div style={{
									width: '37px',
									height: '37px',
									background: `url(${require('images/nav3_actived.png')})`,
									backgroundSize:'100%'}}
								/>
							}
							selected={this.props.isSelected === 2}
							onPress={()=>{
								//window.location.hash = '/search';
								alert(1)
								
							}}
						/>
						<TabBar.Item title="我的" 
						icon={
							<div style={{
								width: '37px',
								height: '37px',
								background: `url(${require('images/nav4.png')})`,
								backgroundSize:'100%'}}
							  />
						}
						selectedIcon={
							<div style={{
								width: '37px',
								height: '37px',
								background: `url(${require('images/nav4_actived.png')})`,
								backgroundSize:'100%'}}
							/>
						}
						selected={this.props.isSelected === 3}
						onPress={()=>{
							//window.location.hash = '/search';
							
						}}
						/>
					</TabBar>
			</div>				
			
		)
	}
	
}
export default BottomBar;