import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { showNotification } from '../Notification/notificationSlice';
import { User } from '../../types/User';
import serviceApi from '../../../configs/services/api';
import { CreateResponse, LoginResponse } from '../../types/RequestResponse';

export interface LoggedUser {
	id: string;
	name: string;
	email: string;
	isLogged: boolean;
}

const initialState = {
	user: {
		id: '',
		name: '',
		email: '',
		cpf: '',
		phone: '',
		isLogged: false,
	},

	loading: false,
};

export const createUser = createAsyncThunk(
	'user/create',
	async (user: User, { dispatch }) => {
		try {
			const response = await serviceApi.post('/user', user);

			const responseApi = response.data as CreateResponse;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success ? true : false,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as CreateResponse;

				dispatch(
					showNotification({
						message: response.message,
						success: response.success,
					}),
				);

				return response;
			}

			return {
				success: false,
				message: 'Erro inesperado.',
			};
		}
	},
);

export const loginUser = createAsyncThunk(
	'user/login',
	async (login: Omit<User, 'name' | 'cpf' | 'phone'>, { dispatch }) => {
		try {
			const response = await serviceApi.post('/login', login);

			const responseApi = response.data as LoginResponse;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as LoginResponse;

				dispatch(
					showNotification({
						message: response.message,
						success: response.success,
					}),
				);

				return response;
			}

			return {
				success: false,
				message: 'Erro inesperado.',
			};
		}
	},
);

export const getUser = createAsyncThunk(
	'user/getUser',
	async (_, { dispatch }) => {
		try {
			const response = await serviceApi.get('/getDataUser');

			const responseApi = response.data as LoginResponse;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as LoginResponse;

				dispatch(
					showNotification({
						message: response.message,
						success: response.success,
					}),
				);

				return response;
			}

			return {
				success: false,
				message: 'Erro inesperado.',
			};
		}
	},
);

export const userSlice = createSlice({
	name: 'usuario',
	initialState: initialState,
	reducers: {
		setUser: (state, action) => {
			return {
				...state,
				user: {
					id: action.payload.id,
					name: action.payload.name,
					email: action.payload.email,
					cpf: action.payload.cpf,
					phone: action.payload.phone,
					isLogged: true,
				},
			};
		},
		logoutUser: () => {
			return initialState;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createUser.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});
		builder.addCase(createUser.fulfilled, (state, action) => {
			const payload = action.payload as CreateResponse;

			if (payload.success && payload.data) {
				localStorage.setItem('userLogged', payload.data.name);

				return {
					user: {
						id: payload.data?.id,
						name: payload.data?.name,
						email: payload.data?.email,
						cpf: payload.data?.cpf ?? '',
						phone: payload.data?.phone,
						isLogged: false,
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return {
					...state,
					loading: false,
				};
			}
		});
		builder.addCase(createUser.rejected, (state) => {
			return {
				...state,
				loading: false,
			};
		});

		builder.addCase(loginUser.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(loginUser.fulfilled, (state, action) => {
			const payload = action.payload as LoginResponse;

			if (payload.success && payload.data) {
				localStorage.setItem('userLogged', payload.data.name);

				return {
					user: {
						id: payload.data.id,
						name: payload.data.name,
						email: payload.data.email,
						cpf: payload.data.cpf ?? '',
						phone: payload.data.phone,
						isLogged: true,
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return initialState;
			}
		});
		builder.addCase(loginUser.rejected, () => {
			return initialState;
		});

		builder.addCase(getUser.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(getUser.fulfilled, (state, action) => {
			const payload = action.payload as LoginResponse;

			if (payload.success && payload.data) {
				return {
					user: {
						id: payload.data.id,
						name: payload.data.name,
						email: payload.data.email,
						cpf: payload.data.cpf ?? '',
						phone: payload.data.phone,
						isLogged: true,
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return initialState;
			}
		});

		builder.addCase(getUser.rejected, () => {
			return initialState;
		});
	},
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
