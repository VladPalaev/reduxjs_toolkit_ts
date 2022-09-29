import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

interface UserState {
	users: IUser[],
	isLoading: boolean,
	error: string,
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: '',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser(state, action) {
			state.users.push(action.payload)
		}
	}
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
