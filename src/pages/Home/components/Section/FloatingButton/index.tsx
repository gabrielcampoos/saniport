import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import Fab from '@mui/material/Fab';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../../../store/modules/User/userSlice';
import { useEffect } from 'react';

export default function FloatingActionButtonSize() {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const userLogged = localStorage.getItem('userLogged');

	useEffect(() => {}, [userLogged]);

	return (
		<>
			{(smDown && !userLogged && (
				<>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							position: 'fixed',
							zIndex: '999999999',
							right: '0',
							bottom: '0',
						}}
					>
						<Button
							onClick={() => {
								dispatch(logoutUser());
								localStorage.clear();
								navigate('/');
							}}
						>
							Inicio
						</Button>

						<Fab
							color="success"
							aria-label="add"
							size="small"
							href="https://api.whatsapp.com/send/?phone=5518998200820&text=Oi%2C+Ol%C3%A1+Telecom+%21+Eu+gostaria+de+pedir+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"
						>
							<WhatsAppIcon fontSize="small" />
						</Fab>
					</Box>
				</>
			)) || (
				<>
					<Fab
						color="success"
						aria-label="add"
						size={smDown ? 'small' : 'large'}
						href="https://api.whatsapp.com/send/?phone=5518998200820&text=Oi%2C+Ol%C3%A1+Telecom+%21+Eu+gostaria+de+pedir+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"
						sx={{
							position: 'fixed',
							zIndex: '999999999',
							right: '0',
							bottom: '0',
							marginRight: '1rem',
							marginBottom: '1rem',
						}}
					>
						<WhatsAppIcon fontSize={smDown ? 'small' : 'large'} />
					</Fab>
				</>
			)}
		</>
	);
}
