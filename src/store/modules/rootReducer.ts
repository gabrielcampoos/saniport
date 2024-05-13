import { combineReducers } from '@reduxjs/toolkit';

import modalContextSlice from './ModalContext/modalContextSlice';
import loadingSlice from './Loading/loadingSlice';
import notificationSlice from './Notification/notificationSlice';
import userSlice from './User/userSlice';

const rootReducer = combineReducers({
	notification: notificationSlice,
	users: userSlice,
	loading: loadingSlice,
	context: modalContextSlice,
});

export default rootReducer;
