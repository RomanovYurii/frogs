import React from 'react';
import './Legend.styles.scss';
import { useDispatch } from 'react-redux';
import { jump, reproduce } from '../Lake/rdx/lakeReducer';

const Legend = () => {
	const dispatch = useDispatch();

	return (
		<div className="legend">
			<h3>Legend</h3>
			<ul>
				<li>
					<span className="frog male"></span>
					<strong>Frog male</strong>
				</li>
				<li>
					<span className="frog female"></span>
					<strong>Frog female</strong>
				</li>
			</ul>

			<h3>Actions</h3>

			<button type="button" id="jump" onClick={() => dispatch(jump())}>
				Jump
			</button>

			<button
				type="button"
				id="reproduce"
				onClick={() => dispatch(reproduce())}
			>
				Reproduce
			</button>
		</div>
	);
};

export default Legend;
