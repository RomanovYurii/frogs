import React from 'react';
import './FieldsRow.styles.scss';
import Field from '../../0_cells/Field';

const FieldsRow = ({ fields }) => {
	return (
		<tr>
			{fields.map((value, idx) => (
				<Field key={idx} value={value} />
			))}
		</tr>
	);
};

export default FieldsRow;
