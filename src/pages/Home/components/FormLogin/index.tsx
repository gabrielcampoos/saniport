import {
	Box,
	Button,
	Dialog,
	DialogActions,
	CircularProgress,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	IconButton,
	TextField,
} from '@mui/material';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { showNotification } from '../../../../store/modules/Notification/notificationSlice';
import { loginUser } from '../../../../store/modules/User/userSlice';
import { Close } from '@mui/icons-material';

export interface ModalFormLoginProps {
	open: boolean;
	changeOpen: React.Dispatch<React.SetStateAction<boolean>>;
	userLogged: boolean;
	setUserLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormLogin = ({
	open,
	changeOpen,
	userLogged,
	setUserLogged,
}: ModalFormLoginProps) => {
	const [email, setEmail] = useState('');

	const userState = useAppSelector((state) => state.users);

	const dispatch = useAppDispatch();

	const handleClose = () => {
		changeOpen(false);
	};

	const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		if (!email) {
			dispatch(
				showNotification({
					success: false,
					message: 'Usuário não cadastrado.',
				}),
			);

			return;
		}

		const login = {
			email: email,
		};

		dispatch(loginUser(login));

		setTimeout(() => {
			setUserLogged(true);
			handleClose();
		}, 5000);
	};

	return (
		<>
			<Dialog
				open={open}
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
				<DialogTitle id="alert-dialog-title">{'Login'}</DialogTitle>
				<Divider />
				<Box component="form" onSubmit={handleSubmit}>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							<TextField
								label="E-mail"
								type="text"
								fullWidth
								sx={{ marginY: 3 }}
								onChange={(event) => {
									setEmail(event.currentTarget.value);
								}}
								required
								value={email}
							/>
						</DialogContentText>
					</DialogContent>
					<Divider />
					<DialogActions
						sx={{
							paddingY: 3,
						}}
					>
						<Button
							type="button"
							variant="outlined"
							onClick={handleClose}
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
							Login
						</Button>
					</DialogActions>
				</Box>
			</Dialog>
		</>
	);
};
