import { combineReducers, configureStore } from '@reduxjs/toolkit';

import apartmentsReducer from './reducers/apartmentsReducer';
import servicesReducer from './reducers/servicesReducer';

const rootReducer = combineReducers({
	services: servicesReducer,
	apartments: apartmentsReducer,
});

export const setupStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
