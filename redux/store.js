import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './slices/slice.title';
// import alertReducer from './slices/alertSlice';
// import cartReducer from './slices/cartSlice';
// import confirmReducer from './slices/confirmSlice';
// import kitReducer from './slices/kitSlice';
// import userReducer from './slices/userSlice';

export default configureStore({
	reducer: {
		title: titleReducer
	}
});
