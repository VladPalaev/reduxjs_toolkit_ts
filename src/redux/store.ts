import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/userSlice';

const store = configureStore({
	reducer: {
		user,
	}
});

export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;