import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// This accepts a string identifier/action and a payload creater callback

// Payload creater callback performs the actual async logic
export const getUsers = createAsyncThunk(
	"users/getUsers",
	async (dispatch, getState) => {
		return await fetch('https://jsonplaceholder.typicode.com/users').then(
			res => res.json()
		)
	}
);

const usersSlice = createSlice({
	name: 'user',
	initialState: {
		users: [],
		status: null
	},
	reducers: {

	}, // success and failed are the two action types defined here
	extraReducers: {
		[getUsers.fulfilled]: (state, action) => {
			state.status = 'success';
			state.users.push(action.payload)
		},
		[getUsers.pending]: (state, action) => {
			state.status = 'pending';
		}
	},
})

export default usersSlice.reducer