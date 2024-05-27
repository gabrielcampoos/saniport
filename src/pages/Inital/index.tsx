import { Box, Button, Grid, useMediaQuery, useTheme } from '@mui/material';

import { Absoluta } from './components/Absoluta';
import { Appbar } from './components/Appbar';
import { Avatar } from './components/Avatar';
import { Saniport } from './components/Saniport';
import { Footer } from './components/Footer';
import { useNavigate } from 'react-router-dom';

export const Inital = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const navigate = useNavigate();

	return (
		<>
			{(smDown && (
				<>
					<Box
						sx={{
							width: '100%',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Grid
							container
							spacing={{ xs: 0, sm: 0, md: 0 }}
							columns={{ xs: 12, sm: 12, md: 13 }}
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Box
								sx={{
									width: '100%',
									pt: 1,
									pb: 1,
									display: 'flex',
									justifyContent: 'flex-end',
									alignItems: 'center',
								}}
							>
								<Button
									variant="contained"
									sx={{
										color: '#fff',
										background: '#2D3091',
										display: 'block',
										fontWeight: 700,
										fontSize: '.6rem',
									}}
									onClick={() => {
										navigate('/saniport');
									}}
								>
									Solicitar Retirada
								</Button>
							</Box>
							<Box
								sx={{
									width: '100%',
									height: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									position: 'relative',
									background:
										'linear-gradient(to bottom, #D6D7D9 40%, #05194A 48%)',
								}}
							>
								<Saniport />

								<Avatar />

								<Absoluta />
							</Box>
							<Footer />
						</Grid>
					</Box>
				</>
			)) || (
				<>
					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 0 }}
						columns={{ xs: 12, sm: 12, md: 13 }}
						sx={{
							width: '100%',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							background: '#DADBDD',
						}}
					>
						<Appbar />

						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								position: 'relative',
								top: -70,
							}}
						>
							<Saniport />

							<Avatar />

							<Absoluta />
						</Box>
					</Grid>
				</>
			)}
		</>
	);
};
