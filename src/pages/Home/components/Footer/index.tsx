import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Mapa from '../../../../assets/images/mapa-footer.png';
import { FooterSm } from './FooterSm';

export const Footer = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<FooterSm />
				</>
			)) || (
				<>
					<Box
						component="footer"
						sx={{
							width: '100%',
							background: '#122D46',
						}}
					>
						<Box
							sx={{
								width: '100%',
								height: '8px',
								background: '#122D46',
								position: 'relative',
								top: -15,
							}}
						></Box>
						<Grid
							container
							spacing={{ xs: 2, sm: 2, md: 4 }}
							columns={{ xs: 12, sm: 12, md: 12 }}
							sx={{
								width: '100%',
							}}
						>
							<Grid
								item
								xs={7}
								sm={7}
								md={6}
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
									gap: 2,
								}}
							>
								<Typography
									sx={{
										color: '#fff',
										fontSize: '18px',
										fontWeight: 700,
									}}
								>
									Nos siga nas redes sociais
								</Typography>

								<Box
									sx={{
										width: '100%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<IconButton>
										<FacebookIcon
											color="primary"
											fontSize="large"
										/>
									</IconButton>

									<IconButton>
										<a href="https://www.instagram.com/banheiroquimicoaluguel">
											<InstagramIcon
												color="error"
												fontSize="large"
											/>
										</a>
									</IconButton>
								</Box>
							</Grid>

							<Grid
								item
								xs={5}
								sm={5}
								md={6}
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Box
									component="img"
									src={Mapa}
									sx={{
										background: 'transparent',
									}}
								/>
							</Grid>
						</Grid>
					</Box>
				</>
			)}
		</>
	);
};
