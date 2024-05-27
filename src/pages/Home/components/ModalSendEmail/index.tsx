import { Close } from '@mui/icons-material';
import {
	Box,
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	IconButton,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { FormLogin } from '../FormLogin';
import emailjs from '@emailjs/browser';

export interface ModalSendEmailProps {
	openModalSendEmail: boolean;
	changeOpenModalSendEmail: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSendEmail = ({
	openModalSendEmail,
	changeOpenModalSendEmail,
}: ModalSendEmailProps) => {
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [work_location, setWork_location] = useState('');
	const [phone, setPhone] = useState('');

	const handleClose = () => {
		changeOpenModalSendEmail(false);
	};

	const handleSendEmail = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		const templateParams = {
			from_name: name,
			company: company,
			work_location: work_location,
			phone: phone,
		};

		emailjs
			.send(
				'service_v74s6eo',
				'template_gkx59mi',
				templateParams,
				'lbXoO67x851UAjzK8',
			)
			.then(
				(response) => {
					console.log(
						'E-mail enviado',
						response.status,
						response.text,
					);
				},
				(error: any) => {
					console.log('Error', error);
				},
			);
		handleClose();
	};

	return (
		<>
			<Dialog
				open={openModalSendEmail}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<Close />
				</IconButton>
				<DialogTitle
					id="alert-dialog-title"
					sx={{
						p: 4,
					}}
				>
					{'Nos informe seu nome e telefone.'}
				</DialogTitle>
				<Divider />
				<Box component="form" onSubmit={handleSendEmail}>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							<TextField
								label="Qual seu nome?"
								type="text"
								fullWidth
								sx={{ marginY: 3 }}
								onChange={(event) => {
									setName(event.currentTarget.value);
								}}
								required
								value={name}
							/>
							<TextField
								label="Nome da empresa?"
								type="text"
								fullWidth
								sx={{ marginY: 3 }}
								onChange={(event) => {
									setCompany(event.currentTarget.value);
								}}
								required
								value={company}
							/>
							<TextField
								label="Qual o local da obra?"
								type="text"
								fullWidth
								sx={{ marginY: 3 }}
								onChange={(event) => {
									setWork_location(event.currentTarget.value);
								}}
								required
								value={work_location}
							/>
							<TextField
								label="Qual seu telefone?"
								type="text"
								fullWidth
								sx={{ marginY: 3 }}
								onChange={(event) => {
									setPhone(event.currentTarget.value);
								}}
								required
								value={phone}
							/>
						</DialogContentText>
					</DialogContent>
					<Divider />
					<DialogActions
						sx={{
							paddingY: 3,
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Button
							type="button"
							variant="outlined"
							onClick={() => handleClose()}
						>
							Cancelar
						</Button>
						<Button type="submit" variant="contained" autoFocus>
							Solicitar
						</Button>
					</DialogActions>
				</Box>
			</Dialog>
		</>
	);
};
