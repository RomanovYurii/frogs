import React from 'react';
import logo from '../../../logo.svg';
import './App.styles.scss';

function App() {
	return (
		<>
			<div className="description">
				Below is a lake with dimensions 10x6 fields. Frogs are marked as green rectangles. Frog with a small
				blue rectangle is a male; with a purple rectangle female.<br/><br/>

				<strong>Acceptance criteria:</strong><br/>
				<ul>
					<li>Each frog can jump on an empty field (select the frog, the empty field and click the jump
						button)
					</li>
					<li>A male frog can jump 3 fields (also diagonal)</li>
					<li>A female frog can jump 2 fields (also diagonal)</li>
					<li>Each frog should have two characteristics (array of two elements: tall, short, fat, slim)</li>
					<li>Two frogs different genders, adjacent can reproduce (select one frog a male, one female and
						click the reproduce button)
					</li>
					<li>The new frog should be placed in the first available space adjacent to the mother</li>
					<li>The new frog should have one characteristic from mother and one from father</li>
					<li>You can use PureJS, AngularJS, ReactJS to solve this one. It's up to you</li>
					<li>Please don't spend more than 5 hours on this task.</li>
				</ul>

				<strong>Good Luck :)</strong>
			</div>

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
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label className="frog female">
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
				</tr>
				<tr>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
				</tr>
				<tr>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
				</tr>
				<tr>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
				</tr>
				<tr>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
				</tr>
				<tr>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
						</label>
					</td>
					<td>
						<label>
							<input type="checkbox"/>
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
				<button type="button" id="jump">Jump</button>
				<button type="button" id="reproduce">Reproduce</button>
			</div>
			</>
	);
}

export default App;
