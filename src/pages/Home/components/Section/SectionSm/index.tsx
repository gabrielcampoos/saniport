import { Box, Button, Grid, Typography } from '@mui/material';
import AvatarSaniport from '../../../../../assets/images/avatar-saniport.jpeg.png';
import { useState } from 'react';
import ModalPortatil from '../ModalPortatil';
import ModalLuxo from '../ModalLuxo';
import ModalContainer from '../ModalContainer';

export const SectionSm = () => {
	const [openSliderLuxo, setOpenSliderLuxo] = useState(false);
	const [openSliderPortatil, setOpenSliderPortatil] = useState(false);
	const [openSliderContainer, setOpenSliderContainer] = useState(false);

	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '84%',
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
					}}
				>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							gap: 3,
							backgroundImage: `url(${AvatarSaniport})`,
							backgroundPosition: '70% 100%',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}
					>
						<Button
							sx={{
								alignSelf: 'flex-start',
								fontWeight: 700,
								background: '#04194a',
								color: '#fff',
								borderRadius: '10px',
								p: 0.5,
								ml: 1,
								top: -110,
							}}
							onClick={() => setOpenSliderPortatil(true)}
						>
							<Typography
								sx={{
									fontSize: '14px',
								}}
							>
								Sanitários Portáteis
							</Typography>
						</Button>
						<Button
							sx={{
								alignSelf: 'flex-start',
								fontWeight: 700,
								background: '#04194a',
								color: '#fff',
								borderRadius: '10px',
								p: 0.5,
								ml: 1,
								top: -110,
							}}
							onClick={() => setOpenSliderLuxo(true)}
						>
							<Typography
								sx={{
									fontSize: '14px',
								}}
							>
								Sanitários de Luxo
							</Typography>
						</Button>

						<Button
							sx={{
								alignSelf: 'flex-start',
								fontWeight: 700,
								background: '#04194a',
								color: '#fff',
								borderRadius: '10px',
								p: 0.5,
								ml: 1,
								top: -110,
							}}
							onClick={() => setOpenSliderContainer(true)}
						>
							<Typography
								sx={{
									fontSize: '14px',
								}}
							>
								Locação de Containers
							</Typography>
						</Button>
					</Grid>
				</Grid>
			</Box>
			<ModalPortatil
				openPortatil={openSliderPortatil}
				setOpenPortatil={setOpenSliderPortatil}
			/>
			<ModalLuxo
				openLuxo={openSliderLuxo}
				setOpenLuxo={setOpenSliderLuxo}
			/>
			<ModalContainer
				openContainer={openSliderContainer}
				setOpenContainer={setOpenSliderContainer}
			/>
		</>
	);
};
