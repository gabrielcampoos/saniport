import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import SliderWarehouseContainers from '../SliderWarehouseContainers';

interface ModalProps {
	openWarehouse: boolean;
	setOpenWarehouse: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalWarehouseContainers({
	openWarehouse,
	setOpenWarehouse,
}: ModalProps) {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const handleClose = () => {
		setOpenWarehouse(false);
	};

	return (
		<React.Fragment>
			<Dialog
				open={openWarehouse}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{'Container Almoxarifado'}
				</DialogTitle>
				<DialogContent>
					<SliderWarehouseContainers />
				</DialogContent>
				<DialogActions>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						{(smDown && (
							<>
								<Typography
									sx={{
										flex: 1.5,
										fontWeight: 500,
										fontSize: '0.8rem',
									}}
								>
									Nos siga no instagram
								</Typography>
							</>
						)) || (
							<>
								<Typography
									sx={{
										flex: 1,
										fontWeight: 500,
									}}
								>
									Nos siga no instagram
								</Typography>
							</>
						)}
						<IconButton
							sx={{
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center',
							}}
						>
							<a href="https://www.instagram.com/banheiroquimicoaluguel">
								<InstagramIcon
									color="error"
									fontSize="medium"
								/>
							</a>
						</IconButton>
						<Button
							onClick={handleClose}
							autoFocus
							sx={{
								flex: 1,
								display: 'flex',
								justifyContent: 'flex-end',
								alignItems: 'center',
							}}
						>
							Voltar
						</Button>
					</Box>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
