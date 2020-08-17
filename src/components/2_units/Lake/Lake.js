import React, { useEffect, useState } from 'react';
import './Lake.styles.scss';
import FieldsRow from '../../1_tissues/FieldsRow';
import {
	Frog,
	FROGS_GENDERS,
	FROGS_HEIGHTS,
	FROGS_WEIGHTS,
} from './Lake.constants';
import { useDispatch, useSelector } from 'react-redux';
import { setLake } from './rdx/lakeReducer';

const Lake = () => {
	const dispatch = useDispatch();
	const { lake } = useSelector((store) => store.lakeReducer);
	const [firstLoad, setFirstLoad] = useState(true);

	useEffect(() => {
		const setupLake = () => {
			let _lake = [];

			for (let i = 0; i < 6; i++) {
				_lake.push([]);
				for (let j = 0; j < 10; j++) {
					_lake[i].push({
						row: i,
						col: j,
						isChecked: false,
					});
				}
			}

			const firstFrog = new Frog();
			firstFrog.setGender(FROGS_GENDERS.MALE);
			firstFrog.setHeight(FROGS_HEIGHTS.TALL);
			firstFrog.setWeight(FROGS_WEIGHTS.FAT);
			firstFrog.setCoordinates(0, 0);

			_lake[0][0] = firstFrog;

			const secondFrog = new Frog();
			secondFrog.setGender(FROGS_GENDERS.FEMALE);
			secondFrog.setHeight(FROGS_HEIGHTS.SHORT);
			secondFrog.setWeight(FROGS_WEIGHTS.SLIM);
			secondFrog.setCoordinates(0, 1);

			_lake[0][1] = secondFrog;

			dispatch(setLake(_lake));
			setFirstLoad(false);
		};

		if (firstLoad) setupLake();
	}, [lake, firstLoad, dispatch]);

	return (
		<table id="lake">
			<thead>
				<tr>
					<th colSpan="10">Lake</th>
				</tr>
			</thead>

			<tbody>
				{lake.map((row, idx) => (
					<FieldsRow fields={row} key={idx} />
				))}
			</tbody>
		</table>
	);
};

export default Lake;
