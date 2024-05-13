import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ContextState } from '../../types/Context';

const initialState: ContextState = {
	isOpen: false,
	context: 'create',
};

export const contextSlice = createSlice({
	name: 'contextoModal',
	initialState,
	reducers: {
		showModal: (state, action: PayloadAction<'create'>) => {
			return {
				isOpen: true,
				context: action.payload,
			};
		},
		hideModal: (state) => {
			return {
				...state,
				isOpen: false,
			};
		},
	},
});

export const { hideModal, showModal } = contextSlice.actions;

export default contextSlice.reducer;
