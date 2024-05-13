import { Close } from '@mui/icons-material';
import {
	Box,
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	IconButton,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { User } from '../../../../store/types/User';
import { createUser } from '../../../../store/modules/User/userSlice';
import { FormLogin } from '../FormLogin';

export interface ModalSignUpUserProps {
	openModalSignUp: boolean;
	changeOpenModalSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSignUpUser = ({
	openModalSignUp,
	changeOpenModalSignUp,
}: ModalSignUpUserProps) => {
	const [open, setChangeOpen] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [cpf, setCpf] = useState<string | null>(null);
	const [phone, setPhone] = useState('');
	const [userLogged, setUserLogged] = useState(false);

	const userState = useAppSelector((state) => state.users);

	const dispatch = useAppDispatch();

	const handleClose = () => {
		changeOpenModalSignUp(false);
	};

	const user: User = {
		name,
		email,
		cpf,
		phone,
	};

	const handleSignupUser = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		if (!ev.currentTarget.checkValidity()) {
			return;
		}

		dispatch(createUser(user));
		setTimeout(() => {
			setName('');
			setCpf('');
			setPhone('');
			handleClose();
		}, 3000);
	};

	return (
		<>
			<Dialog
				open={openModalSignUp}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<Close />
				</IconButton>
				<DialogTitle
					id="alert-dialog-title"
					sx={{
						p: 4,
					}}
				>
					{
						'Descubra mais! Cadastre-se agora e conheça o maior portal de banheiros portáteis do Brasil'
					}
				</DialogTitle>
				<Divider />
				<Box component="form" onSubmit={handleSignupUser}>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							<TextField
								label="Qual seu nome?"
								type="text"
								fullWidth
								sx={{ marginY: 3 }}
								onChange={(event) => {
									setName(event.currentTarget.value);
								}}
								required
								value={name}
							/>
							<TextField
								label="Qual seu e-mail?"
								type="email"
								fullWidth
								sx={{ marginY: 3 }}
								onChange={(event) => {
									setEmail(event.currentTarget.value);
								}}
								required
								value={email}
							/>
							<TextField
								label="CPF (opcional)"
								type="text"
								fullWidth
								sx={{ marginY: 3 }}
								onChange={(event) => {
									setCpf(event.currentTarget.value);
								}}
								value={cpf}
							/>
							<TextField
								label="Qual seu telefone / ZAP"
								type="text"
								fullWidth
								sx={{ marginY: 3 }}
								onChange={(event) => {
									setPhone(event.currentTarget.value);
								}}
								required
								inputProps={{ minLength: 6 }}
								value={phone}
							/>
						</DialogContentText>
					</DialogContent>
					<Divider />
					<DialogActions
						sx={{
							paddingY: 3,
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Button
							type="button"
							variant="outlined"
							onClick={() => handleClose()}
						>
							Cancelar
						</Button>
						<Button
							type="submit"
							variant="contained"
							autoFocus
							startIcon={
								userState.loading ? (
									<CircularProgress color="inherit" />
								) : (
									<></>
								)
							}
						>
							Cadastrar
						</Button>
					</DialogActions>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							mb: 3,
						}}
					>
						<Typography
							variant="caption"
							sx={{
								fontSize: '15px',
								textAlign: 'center',
							}}
						>
							Já é cadastrado?{' '}
							<Link
								component="button"
								type="button"
								sx={{
									textDecoration: 'none',
									fontWeight: 'bold',
									fontSize: '1rem',
									color: '#0000ee',
								}}
								onClick={() => setChangeOpen(true)}
							>
								Faça login!
							</Link>
						</Typography>
					</Box>
				</Box>
			</Dialog>
			{userLogged === true ? (
				changeOpenModalSignUp(false)
			) : (
				<FormLogin
					open={open}
					changeOpen={setChangeOpen}
					userLogged={userLogged}
					setUserLogged={setUserLogged}
				/>
			)}
		</>
	);
};
