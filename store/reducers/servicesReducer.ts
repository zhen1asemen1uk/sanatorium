import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ServicesReducer } from '../../types/reducers';
import { getServices } from '../api/servicesAPI';

const initialState: ServicesReducer = {
	services: [
		{
			id: 1,
			name: 'Басейн на вулиці',
			cost: 0,
			description: 'Басейн з водою на вулиці',
		},
		{
			id: 2,
			name: 'Басейн в приміщенні',
			cost: 300,
			description: 'Басейн з водою в приміщенні',
		},
		{
			id: 3,
			name: 'Тринажерна зала',
			cost: 300,
			description: 'Басейн з водою в приміщенні',
		},
		{
			id: 4,
			name: 'Сольові шахти',
			cost: 300,
			description: 'Басейн з водою в приміщенні',
		},
		{
			id: 5,
			name: 'Масаж',
			cost: 300,
			description: 'Басейн з водою в приміщенні',
		},
	],
	isLoading: false,
	isError: false,
};

const servicesReducer = createSlice({
	name: 'services',
	initialState,
	reducers: {},
	extraReducers: {
		[getServices.pending.type]: (state) => {
			state.isLoading = true;
		},
		[getServices.fulfilled.type]: (
			state,
			action: PayloadAction<ServicesReducer>
		) => {
			state.services = action.payload.services;
			state.isLoading = false;
			state.isError = false;
		},
		[getServices.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.isError = action.payload;
		},
	},
});

export default servicesReducer.reducer;
