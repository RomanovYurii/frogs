import React, { useEffect, useState } from 'react';
import './Lake.styles.scss';
import FieldsRow from '../../1_tissues/FieldsRow';

const Lake = () => {
	const [fields, setFields] = useState([]);

	useEffect(() => {
		let _fields = [];
		for (let i = 0; i < 6; i++) {
			_fields.push([]);
			for (let j = 0; j < 10; j++) {
				_fields[i].push(null);
			}
		}
		setFields(_fields);
		console.log(_fields);
	}, []);

	return (
		<table id="lake">
			<thead>
				<tr>
					<th colSpan="10">Lake</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>
						<label className="frog male">
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label className="frog female">
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
				</tr>
				<tr>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
				</tr>
				<tr>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
				</tr>
				<tr>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
				</tr>
				<tr>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
				</tr>
				<tr>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox" />
						</label>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Lake;
