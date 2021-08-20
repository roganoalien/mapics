import { createSlice } from '@reduxjs/toolkit';

export const titleSlice = createSlice({
	name: 'title',
	initialState: {
		text: 'Mis sitios',
		has_buttons: true,
		add_button: true,
		other_buttons: false
	},
	reducers: {
		updateTitle: (state, action) => {
			state.text = action.payload.text;
			state.has_buttons = action.payload.has_buttons || false;
			state.add_button = action.payload.add_button || false;
			state.other_buttons = action.payload.other_buttons || false;
		},
		resetTitle: (state) => {
			state.text = 'Mis sitios';
			state.has_buttons = true;
			state.add_button = true;
			state.other_buttons = false;
		}
	}
});

export const { updateTitle, resetTitle } = titleSlice.actions;

export default titleSlice.reducer;
