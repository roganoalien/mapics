import { createSlice } from '@reduxjs/toolkit';

export const toastSlice = createSlice({
	name: 'toast',
	initialState: {
		type: null,
		text: '',
		button: ''
	},
	reducers: {
		showToast: (state, action) => {
			state.type = action.payload.type;
			state.text = action.payload.text;
			state.button = action.payload.button;
		},
		resetToast: (state) => {
			state.type = null;
			state.text = '';
			state.button = '';
		}
	}
});

export const { showToast, resetToast } = toastSlice.actions;

export default toastSlice.reducer;
