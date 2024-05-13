import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import AvatarAbsoluta from '../../../../assets/images/avatar-absoluta.jpeg';
import { SectionSm } from './SectionSm';
import { useState } from 'react';
import ModalSuction from './components/ModalSuction';
import ModalBathroomContainers from './components/ModalBathroomContainers';
import ModalOfficeContainers from './components/ModalOfficeContainers';
import ModalWarehouseContainers from './components/ModalWarehouseContainers';
import ModalFabril from './components/ModalFabril';

export const Section = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const [openSliderBathroomContainers, setOpenSliderBathroomContainers] =
		useState(false);
	const [openSliderSuction, setOpenSliderSuction] = useState(false);
	const [openSliderOfficeContainers, setOpenSliderOfficeContainers] =
		useState(false);
	const [openSliderWarehouseContainers, setOpenWarehouseContainers] =
		useState(false);
	const [openSliderFabril, setOpenSliderFabril] = useState(false);

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
									'linear-gradient(to right,#E0E7EF 50%, #EDF2F8 50%)',
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
									backgroundImage: `url(${AvatarAbsoluta})`,
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
										mr: 70,
										p: 0.5,
										top: -190,
										zIndex: 1,
										'&:hover': {
											background: '#99AABE',
										},
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
										fontWeight: 700,
										background: '#04194a',
										color: '#fff',
										borderRadius: '10px',
										mr: 70,
										p: 0.5,
										top: -190,
										zIndex: 1,
										'&:hover': {
											background: '#99AABE',
										},
									}}
									onClick={() =>
										setOpenSliderBathroomContainers(true)
									}
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
										fontWeight: 700,
										background: '#04194a',
										color: '#fff',
										borderRadius: '10px',
										mr: 70,
										p: 0.5,
										top: -190,
										zIndex: 1,
										'&:hover': {
											background: '#99AABE',
										},
									}}
									onClick={() =>
										setOpenSliderOfficeContainers(true)
									}
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
										fontWeight: 700,
										background: '#04194a',
										color: '#fff',
										borderRadius: '10px',
										mr: 70,
										p: 0.5,
										top: -190,
										zIndex: 1,
										'&:hover': {
											background: '#99AABE',
										},
									}}
									onClick={() =>
										setOpenWarehouseContainers(true)
									}
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
										fontWeight: 700,
										background: '#04194a',
										color: '#fff',
										borderRadius: '10px',
										mr: 70,
										p: 0.5,
										top: -190,
										zIndex: 1,
										'&:hover': {
											background: '#99AABE',
										},
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
						setOpenBathroomContainers={
							setOpenSliderBathroomContainers
						}
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
			)}
		</>
	);
};
