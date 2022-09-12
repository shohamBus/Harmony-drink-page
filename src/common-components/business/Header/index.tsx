// import { mapStateToProps } from '@base/features/base-rba/components/RBAC';
import { AppBar, Box } from '@mui/material';
import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import './style.scss';

export interface Props{
	ImageSrc: string;
	ImageAlt: string;
}

const Header: React.FC<Props & LocalizeContextProps> = (props: Props& LocalizeContextProps) => {
	const {
		ImageAlt, ImageSrc
	} = props;
	return (
		<Box sx={{ flexGrow: 1 }} className="header">
			<AppBar sx={{ bgcolor: '#FF5757' }} position="static">
				<div className="logo">
					<img src={ImageSrc} alt={ImageAlt} width={200} height={150} />
				</div>
			</AppBar>
		</Box>
	);
};

// const mapStateToProps = (state: Props) => {

// };

export default withLocalize<Props & LocalizeContextProps>(Header);
