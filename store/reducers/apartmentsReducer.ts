import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApartmentsReducer } from '../../types/reducers';
import { getApartments } from '../api/apartmentsAPI';

const initialState: ApartmentsReducer = {
	apartments: [
		{
			id: 1,
			name: 'Супер економ',
			cost: 0,
			description: 'Басейн з водою на вулиці',
		},
		{
			id: 2,
			name: 'Економ',
			cost: 0,
			description: 'Басейн з водою на вулиці',
		},
		{
			id: 3,
			name: 'Середній',
			cost: 0,
			description: 'Басейн з водою на вулиці',
		},
		{
			id: 4,
			name: 'Люкс',
			cost: 300,
			description: 'Басейн з водою в приміщенні',
		},
		{
			id: 5,
			name: 'Супер Люкс',
			cost: 300,
			description: 'Басейн з водою в приміщенні',
		},
		{
			id: 6,
			name: 'Пентхаус',
			cost: 300,
			description: 'Басейн з водою в приміщенні',
		},
	],
	isLoading: false,
	isError: false,
};

const apartmentsReducer = createSlice({
	name: 'apartments',
	initialState,
	reducers: {},
	extraReducers: {
		[getApartments.pending.type]: (state) => {
			state.isLoading = true;
		},
		[getApartments.fulfilled.type]: (
			state,
			action: PayloadAction<ApartmentsReducer>
		) => {
			state.apartments = action.payload.apartments;
			state.isLoading = false;
			state.isError = false;
		},
		[getApartments.rejected.type]: (
			state,
			action: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.isError = action.payload;
		},
	},
});

export default apartmentsReducer.reducer;
