import { UserState } from './User';

export interface CreateResponse {
	success: boolean;
	message: string;
	data?: UserState & { id: string };
}

export interface LoginResponse {
	success: boolean;
	message: string;
	data?: {
		id: string;
		name: string;
		email: string;
		cpf: string | null;
		phone: string;
	};
}
