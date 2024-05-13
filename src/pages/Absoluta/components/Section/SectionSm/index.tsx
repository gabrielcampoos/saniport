import { Box, Button, Grid, Typography } from '@mui/material';
import AvatarAbsoluta from '../../../../../assets/images/avatar-absoluta.jpeg';
import { useState } from 'react';
import ModalPortatil from '../components/ModalSuction';
import ModalLuxo from '../components/ModalBathroomContainers';
import ModalContainer from '../components/ModalOfficeContainers';
import ModalSuction from '../components/ModalSuction';
import ModalOfficeContainers from '../components/ModalOfficeContainers';
import ModalBathroomContainers from '../components/ModalBathroomContainers';
import ModalWarehouseContainers from '../components/ModalWarehouseContainers';
import ModalFabril from '../components/ModalFabril';

export const SectionSm = () => {
	const [openSliderBathroomContainers, setOpenSliderBathroomContainers] =
		useState(false);
	const [openSliderOfficeContainers, setOpenSliderOfficeContainers] =
		useState(false);
	const [openSliderSuction, setOpenSliderSuction] = useState(false);
	const [openSliderWarehouseContainers, setOpenWarehouseContainers] =
		useState(false);
	const [openSliderFabril, setOpenSliderFabril] = useState(false);
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					mt: 2,
					background:
						'linear-gradient(to right, #F7FCFF 20%, #E2E9EF 80%)',
				}}
			>
				<Grid
					container
					spacing={{ xs: 2, sm: 2, md: 4 }}
					columns={{ xs: 12, sm: 12, md: 12 }}
					sx={{
						width: '100%',
						height: '90%',
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
							backgroundImage: `url(${AvatarAbsoluta})`,
							backgroundPosition: '45% 100%',
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
								top: -150,
							}}
							onClick={() => setOpenSliderSuction(true)}
						>
							<Typography
								sx={{
									fontSize: '14px',
								}}
							>
								Tanques de Sucção
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
								top: -150,
							}}
							onClick={() => setOpenSliderOfficeContainers(true)}
						>
							<Typography
								sx={{
									fontSize: '14px',
								}}
							>
								Containers Escritório
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
								top: -150,
							}}
							onClick={() => setOpenSliderOfficeContainers(true)}
						>
							<Typography
								sx={{
									fontSize: '14px',
								}}
							>
								Containers Banheiros
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
								top: -150,
							}}
							onClick={() => setOpenWarehouseContainers(true)}
						>
							<Typography
								sx={{
									fontSize: '14px',
								}}
							>
								Containers Almoxarifado
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
								top: -150,
							}}
							onClick={() => setOpenSliderFabril(true)}
						>
							<Typography
								sx={{
									fontSize: '14px',
								}}
							>
								Fabril
							</Typography>
						</Button>
					</Grid>
				</Grid>
			</Box>
			<ModalSuction
				openSuction={openSliderSuction}
				setOpenSuction={setOpenSliderSuction}
			/>

			<ModalBathroomContainers
				openBathroomContainers={openSliderBathroomContainers}
				setOpenBathroomContainers={setOpenSliderBathroomContainers}
			/>

			<ModalOfficeContainers
				openOfficeContainers={openSliderOfficeContainers}
				setOpenOfficeContainers={setOpenSliderOfficeContainers}
			/>
			<ModalWarehouseContainers
				openWarehouse={openSliderWarehouseContainers}
				setOpenWarehouse={setOpenWarehouseContainers}
			/>
			<ModalFabril
				openFabril={openSliderFabril}
				setOpenFabril={setOpenSliderFabril}
			/>
		</>
	);
};
