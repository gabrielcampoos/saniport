export interface User {
	name: string;
	email: string;
	cpf: string | null;
	phone: string;
}

export interface UserState {
	name: string;
	email: string;
	cpf: string | null;
	phone: string;
	isLogged: boolean;
}
