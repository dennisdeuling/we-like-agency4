import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function OfferPic({ icon, text }) {
	return (
		<React.Fragment>
			<div
				style={{
					marginTop: '20px',
					width: '150px',
					height: '150px',
					backgroundColor: '#B09CDB',
					borderRadius: '50%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<FontAwesomeIcon
					style={{
						fontSize: '5em'
					}}
					icon={icon}
				/>
			</div>
		</React.Fragment>
	);
}

export default OfferPic;
