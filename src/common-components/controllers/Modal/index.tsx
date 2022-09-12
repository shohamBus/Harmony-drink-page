import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';

export type Props = {
	imgSrc: string;
	open: boolean;
	setOpen: any;
};

const modal: React.FC<Props & LocalizeContextProps> = (props: Props& LocalizeContextProps) => {
	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
	};
	const { imgSrc, open, setOpen } = props;
	// const [open, setHandler] = useState(open);
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<img id="modal-modal-title" src={imgSrc} alt={imgSrc} width="500" height="600" />
			</Box>
		</Modal>
	);
};
export default withLocalize<Props & LocalizeContextProps>(modal);
