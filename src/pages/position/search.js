import React,{Component} from 'react';
import BottomBar from '@/components/bottombar.js';



class Search extends Component{
	constructor(poprs) {
	  super(poprs);
		this.state = {
			
		}	
	}
	render(){
		return (
		
			<div>
				搜索页面
			
				<BottomBar isSelected={1} />
			</div>
		
		)
	}
	
}
export default Search;
