import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slider from '../Slider';

interface ModalProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ open, setOpen }: ModalProps) {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{'Sanitários Portáteis'}
				</DialogTitle>
				<DialogContent>
					<Slider />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button onClick={handleClose} autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
