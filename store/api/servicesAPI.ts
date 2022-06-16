import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServicesReducer } from '../../types/reducers';

export const getServices = createAsyncThunk(
	'services/getServices',
	async (_, thunkApi) => {
		try {
			const services = await axios.get<ServicesReducer>('/api/services');

			return services;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
