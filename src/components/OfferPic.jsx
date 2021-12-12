import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';
function OfferPic({ icon, text }) {
	return (
		<React.Fragment>
			<div>
				<FontAwesomeIcon
					style={{
						fontSize: '5em',
						// margin: '20px',
						padding: '30px',
						backgroundColor: '#B09CDB',
						borderRadius: '50%'
					}}
					icon={icon}
				/>
			</div>
		</React.Fragment>
	);
}

export default OfferPic;
