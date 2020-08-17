import React from 'react';
import logo from '../../../logo.svg';
import './App.styles.scss';
import Description from '../../0_cells/Description';

function App() {
	return (
		<>
			<Description />

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
				<button type="button" id="jump">
					Jump
				</button>
				<button type="button" id="reproduce">
					Reproduce
				</button>
			</div>
		</>
	);
}

export default App;
