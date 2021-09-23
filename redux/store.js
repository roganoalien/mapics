import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './slices/slice.title';
import toastReducer from './slices/slice.toast';

export default configureStore({
	reducer: {
		title: titleReducer,
		toast: toastReducer
	}
});
