import { Box, Button, Grid } from '@mui/material';
import Logo from '../../../../../assets/images/logo.png';
import { BackgroundWaveSm } from '../../Footer/BackgroundWave/BackgroundWaveSm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { logoutUser } from '../../../../../store/modules/User/userSlice';
import { ModalSignUpUser } from '../../ModalSignUpUser';
import { ModalSendEmail } from '../../ModalSendEmail';

export const AppbarSm = () => {
	const [openModalSignUp, setChangeOpenModalSignUp] = useState(false);
	const [openModalSendEmail, changeOpenModalSendEmail] = useState(false);

	const loggedUser = localStorage.getItem('userLogged');
	const stateUser = useAppSelector((user) => user.users);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '50px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						width: '100%',
						position: 'absolute',
						background: '#77be43',
						zIndex: 1,
					}}
				>
					<BackgroundWaveSm />
				</Box>
				<Grid
					container
					spacing={{ xs: 2, sm: 2, md: 4 }}
					columns={{ xs: 12, sm: 12, md: 12 }}
					sx={{
						zIndex: 2,
					}}
				>
					<Grid
						item
						xs={2}
						sm={2}
						md={6}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: '50px',
								background: '#fff',
								borderRadius: '100px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Box
								component="img"
								src={Logo}
								sx={{
									width: '100%',
								}}
								onClick={() => {
									dispatch(logoutUser());
									localStorage.clear();
									navigate('/');
								}}
							/>
						</Box>
					</Grid>

					<Grid
						item
						xs={10}
						sm={10}
						md={6}
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								listStyle: 'none',
								display: 'flex',
								justifySelf: 'center',
								alignItems: 'center',
								color: '#05194a',
								fontWeight: 700,
							}}
						>
							<Button
								sx={{
									color: '#fff',
									fontWeight: 700,
									fontSize: '.5rem',
								}}
								onClick={() => setChangeOpenModalSignUp(true)}
							>
								{loggedUser ? (
									<li>Olá {loggedUser}</li>
								) : (
									<li>Cadastro</li>
								)}
							</Button>
							<Button
								sx={{
									color: '#fff',
									fontWeight: 700,
									fontSize: '.5rem',
								}}
								onClick={() => {
									changeOpenModalSendEmail(true);
								}}
							>
								<li>Solicitar Retirada</li>
							</Button>

							<Button
								href="https://nfsaniport.com"
								sx={{
									color: '#fff',
									fontWeight: 700,
									fontSize: '0.5rem',
								}}
							>
								<li>Nfe</li>
							</Button>

							<Button
								sx={{
									color: '#fff',
									fontWeight: 700,
									fontSize: '0.5rem',
								}}
							>
								<a
									href={`https://api.whatsapp.com/send/?phone=5518998200820&text=Nome: ${stateUser.user.name}%0DCPF: ${stateUser.user.cpf}%0DTelefone: ${stateUser.user.phone}&type=phone_number&app_absent=0`}
									style={{
										textDecoration: 'none',
										color: '#fff',
									}}
								>
									<li>Contato</li>
								</a>
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<ModalSignUpUser
				openModalSignUp={openModalSignUp}
				changeOpenModalSignUp={setChangeOpenModalSignUp}
			/>
			<ModalSendEmail
				openModalSendEmail={openModalSendEmail}
				changeOpenModalSendEmail={changeOpenModalSendEmail}
			/>
		</>
	);
};
