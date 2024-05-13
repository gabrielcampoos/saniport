import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import AvatarSaniport from '../../../../assets/images/avatar-saniport.jpeg.png';
import { SectionSm } from './SectionSm';
import ModalLuxo from './ModalLuxo';
import { useState } from 'react';
import ModalPortatil from './ModalPortatil';
import ModalContainer from './ModalContainer';

export const Section = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const [openSliderLuxo, setOpenSliderLuxo] = useState(false);
	const [openSliderPortatil, setOpenSliderPortatil] = useState(false);
	const [openSliderContainer, setOpenSliderContainer] = useState(false);

	return (
		<>
			{(smDown && (
				<>
					<SectionSm />
				</>
			)) || (
				<>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							mt: 2,
						}}
					>
						<Grid
							container
							spacing={{ xs: 2, sm: 2, md: 4 }}
							columns={{ xs: 12, sm: 12, md: 12 }}
							sx={{
								width: '100%',
								height: '100%',
								background:
									'linear-gradient(to right,#A1B1C1 50%, #DBE0E4 50%)',
							}}
						>
							<Grid
								item
								xs={12}
								sm={12}
								md={12}
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
									gap: 3,
									backgroundImage: `url(${AvatarSaniport})`,
									backgroundPosition: 'center',
									backgroundSize: '70% 100%',
									backgroundRepeat: 'no-repeat',
								}}
							>
								<Button
									sx={{
										fontWeight: 700,
										background: '#04194a',
										color: '#fff',
										borderRadius: '10px',
										mr: 15,
										p: 0.5,
										top: -110,
										zIndex: 1,
									}}
									onClick={() => setOpenSliderPortatil(true)}
								>
									<Typography
										sx={{
											fontSize: '17px',
										}}
									>
										Sanitários Portáteis
									</Typography>
								</Button>
								<Button
									sx={{
										fontWeight: 700,
										background: '#04194a',
										color: '#fff',
										borderRadius: '10px',
										mr: 15,
										p: 0.5,
										top: -110,
									}}
									onClick={() => setOpenSliderLuxo(true)}
								>
									<Typography
										sx={{
											fontSize: '17px',
										}}
									>
										Sanitários de Luxo
									</Typography>
								</Button>

								<Button
									sx={{
										fontWeight: 700,
										background: '#04194a',
										color: '#fff',
										borderRadius: '10px',
										mr: 15,
										p: 0.5,
										top: -110,
									}}
									onClick={() => setOpenSliderContainer(true)}
								>
									<Typography
										sx={{
											fontSize: '17px',
										}}
									>
										Locação de Containers
									</Typography>
								</Button>
							</Grid>
						</Grid>
					</Box>
					<ModalLuxo
						openLuxo={openSliderLuxo}
						setOpenLuxo={setOpenSliderLuxo}
					/>
					<ModalPortatil
						openPortatil={openSliderPortatil}
						setOpenPortatil={setOpenSliderPortatil}
					/>
					<ModalContainer
						openContainer={openSliderContainer}
						setOpenContainer={setOpenSliderContainer}
					/>
				</>
			)}
		</>
	);
};
