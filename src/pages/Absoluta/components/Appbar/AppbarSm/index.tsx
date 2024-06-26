import { Box, Button, Grid } from '@mui/material';
import Logo from '../../../../../assets/images/absoluta.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { logoutUser } from '../../../../../store/modules/User/userSlice';
import { ModalSignUpUser } from '../../../../Home/components/ModalSignUpUser';

export const AppbarSm = () => {
	const [openModalSignUp, setChangeOpenModalSignUp] = useState(false);

	const loggedUser = localStorage.getItem('userLogged');
	const stateUser = useAppSelector((user) => user.users);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

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
				></Box>
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

					<Grid item xs={9} sm={9} md={6}>
						<Box
							component="ul"
							sx={{
								listStyle: 'none',
								display: 'flex',
								justifyContent: 'space-evenly',
								alignItems: 'center',
								color: '#05194a',
								fontWeight: 700,
								fontSize: '20px',
							}}
						>
							<Button
								sx={{
									color: '#000',
									fontWeight: 700,
									fontSize: '1rem',
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
									color: '#000',
									fontWeight: 700,
									fontSize: '1rem',
								}}
							>
								<a
									href={`https://api.whatsapp.com/send/?phone=5518998200820&text=Nome: ${stateUser.user.name}%0DCPF: ${stateUser.user.cpf}%0DTelefone: ${stateUser.user.phone}&type=phone_number&app_absent=0`}
									style={{
										textDecoration: 'none',
										color: '#000',
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
		</>
	);
};
