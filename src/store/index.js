
import {createStore} from 'redux';

let obj = {
	cityInfo:{},
	
}


function reducer(state=obj,action){
	
	
	switch(action.type){
		case 'changCity':
			var newObj = Object.assign({},state,{
				cityInfo:action.cityInfo
			})
			var str = JSON.stringify(newObj);
			
			return JSON.parse(str);
			break;
		default:
			return state;
		
	}
}

let store = createStore(reducer);

export default store;