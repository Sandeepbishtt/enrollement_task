import {createSlice} from '@reduxjs/toolkit'


const Slice = createSlice({
	name:'data',
	initialState:{
		data:[],
	},
	reducers:{
		addData:(state,action) => {
             return {
             	...state,
             	data:state.data.concat(action.payload)
                 
             }
		},
		editValue:(state,action) => {
             return {
             	...state,
             	data:state.data.filter((val,index) => index !== action.payload.id).concat(action.payload.value)
                 
             }
		}
	}



})

export const {addData,editValue} = Slice.actions

export const fetchData = (state) => state.data.data


export default Slice