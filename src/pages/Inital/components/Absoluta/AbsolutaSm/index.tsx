/* eslint-disable import-helpers/order-imports */
import { Box, Grid } from '@mui/material';

import AbsolutaImg from '../../../../../assets/images/absoluta.png';

import './styles.css';
import { useNavigate } from 'react-router-dom';

export const AbsolutaSm = () => {
	const navigate = useNavigate();

	return (
		<Grid
			item
			xs={4}
			sm={4}
			md={4}
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					className="absolutaExpand"
					component="img"
					src={AbsolutaImg}
					sx={{
						width: '70%',
						position: 'relative',
						zIndex: 2,
						top: -240,
						right: -10,
					}}
					onClick={() => {
						setTimeout(() => {
							navigate('/absoluta');
						}, 1000);
					}}
				/>
			</Box>
		</Grid>
	);
};
