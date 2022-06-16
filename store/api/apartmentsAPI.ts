import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApartmentsReducer } from '../../types/reducers';

export const getApartments = createAsyncThunk(
	'apartments/getApartments',
	async (_, thunkApi) => {
		try {
			const apartments = await axios.get<ApartmentsReducer>(
				'/api/apartments'
			);

			return apartments;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
