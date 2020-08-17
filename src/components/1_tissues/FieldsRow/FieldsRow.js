import React from 'react';
import './FieldsRow.styles.scss';

const FieldsRow = ({ fields }) => {
	return (
		<tr>
			{fields.map((Field, idx) => (
				<Field key={idx} />
			))}
		</tr>
	);
};

export default FieldsRow;
