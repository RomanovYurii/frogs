import React, { useEffect, useState } from 'react';
import './Field.styles.scss';
import { useDispatch } from 'react-redux';
import { clickOnField } from '../../2_units/Lake/rdx/lakeReducer';

const Field = ({ value }) => {
	const dispatch = useDispatch();
	const [className, setClassName] = useState('');

	useEffect(() => {
		if (value.isFrog) {
			setClassName('frog ' + value.getGender());
		} else {
			setClassName('');
		}
	}, [value]);

	return (
		<td>
			<label className={className}>
				<input
					type="checkbox"
					checked={value.isChecked}
					onChange={() => {
						dispatch(clickOnField(value.row, value.col));
					}}
				/>
				{value.isFrog && (
					<>
						<span className={'weight ' + value.weight}>
							{value.weight}
						</span>

						<span className={'height ' + value.height}>
							{value.height}
						</span>
					</>
				)}
			</label>
		</td>
	);
};

export default Field;
