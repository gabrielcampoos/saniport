import { Box, Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import Logo from '../../../../assets/images/logo.png';
import { BackgroundWave } from '../Footer/BackgroundWave';
import { AppbarSm } from './AppbarSm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ModalSignUpUser } from '../ModalSignUpUser';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { logoutUser } from '../../../../store/modules/User/userSlice';

export const Appbar = () => {
	const [openModalSignUp, setChangeOpenModalSignUp] = useState(false);

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const loggedUser = localStorage.getItem('userLogged');
	const stateUser = useAppSelector((user) => user.users);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return (
		<>
			{(smDown && (
				<>
					<AppbarSm />
				</>
			)) || (
				<>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							mb: 3,
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
							<BackgroundWave />
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
								xs={3}
								sm={3}
								md={2}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Button
									sx={{
										color: '#fff',
										fontSize: '20px',
									}}
									onClick={() => navigate('/')}
								>
									Início
								</Button>
							</Grid>
							<Grid
								item
								xs={3}
								sm={3}
								md={5}
								sx={{
									display: 'flex',
									justifyContent: 'flex-start',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '60px',
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
									/>
								</Box>
							</Grid>

							<Grid item xs={9} sm={9} md={5}>
								<Box
									component="ul"
									sx={{
										listStyle: 'none',
										display: 'flex',
										justifyContent: 'space-evenly',
										alignItems: 'center',
										color: '#fff',
										fontWeight: 700,
										fontSize: '20px',
									}}
								>
									<Button
										sx={{
											color: '#fff',
											fontWeight: 700,
											fontSize: '1rem',
										}}
										onClick={() =>
											setChangeOpenModalSignUp(true)
										}
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
											fontSize: '1rem',
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
									<Button
										sx={{
											color: '#fff',
											fontWeight: 700,
											fontSize: '1rem',
										}}
										onClick={() => {
											dispatch(logoutUser());
											localStorage.clear();
											location.reload();
										}}
									>
										<li>Sair</li>
									</Button>
								</Box>
							</Grid>
						</Grid>
					</Box>
					<ModalSignUpUser
						openModalSignUp={openModalSignUp}
						changeOpenModalSignUp={setChangeOpenModalSignUp}
					/>
				</>
			)}
		</>
	);
};
