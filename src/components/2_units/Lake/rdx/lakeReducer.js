import { Frog, FROGS_GENDERS, FROGS_PROPERTIES } from '../Lake.constants';

const CLICK_ON_FIELD = 'CLICK_ON_FIELD';
const SET_LAKE = 'SET_LAKE';
const JUMP = 'JUMP';
const REPRODUCE = 'REPRODUCE';

export const jump = () => ({
	type: JUMP,
});

export const reproduce = () => ({
	type: REPRODUCE,
});

export const clickOnField = (row, col) => {
	return {
		type: CLICK_ON_FIELD,
		payload: { row, col },
	};
};

export const setLake = (payload) => {
	return {
		type: SET_LAKE,
		payload,
	};
};

const initialState = {
	lake: [],
	selected: [],
};

export default (state = initialState, action) => {
	const { payload, type } = action;

	switch (type) {
		case SET_LAKE:
			return { ...state, lake: payload };
		case CLICK_ON_FIELD:
			let CLICK_ON_FIELD_selected = [...state.selected];
			let CLICK_ON_FIELD_lake = [...state.lake];
			let field = CLICK_ON_FIELD_lake[payload.row][payload.col];

			if (state.selected.length === 2 && !field.isChecked) {
				return state;
			}
			if (field.isFrog) {
				field.setIsChecked(!field.isChecked);
			} else {
				field.isChecked = !field.isChecked;
			}

			CLICK_ON_FIELD_lake[payload.row][payload.col] = field;

			if (field.isChecked) {
				CLICK_ON_FIELD_selected.push(payload);
			} else {
				for (let i = 0; i < CLICK_ON_FIELD_selected.length; i++) {
					if (
						payload.row === CLICK_ON_FIELD_selected[i].row &&
						payload.col === CLICK_ON_FIELD_selected[i].col
					) {
						CLICK_ON_FIELD_selected.splice(i, 1);
					}
				}
			}

			return {
				lake: CLICK_ON_FIELD_lake,
				selected: CLICK_ON_FIELD_selected,
			};
		case JUMP:
			let JUMP_lake = state.lake;
			let frogCoords = null;
			let emptyCoords = null;

			for (let field of state.selected) {
				if (JUMP_lake[field.row][field.col].isFrog) frogCoords = field;
				else emptyCoords = field;
			}

			if (!frogCoords || !emptyCoords) {
				console.warn('coords do not exist', frogCoords, emptyCoords);
				return state;
			}

			let frog = JUMP_lake[frogCoords.row][frogCoords.col];
			const jumpLength = frog.gender === FROGS_GENDERS.MALE ? 3 : 2;

			let afterJumpRow = -1;
			if (emptyCoords.row > frogCoords.row)
				afterJumpRow = frogCoords.row + jumpLength;
			else if (emptyCoords.row < frogCoords.row)
				afterJumpRow = frogCoords.row - jumpLength;
			else afterJumpRow = frogCoords.row;

			let afterJumpCol = -1;
			if (emptyCoords.col > frogCoords.col)
				afterJumpCol = frogCoords.col + jumpLength;
			else if (emptyCoords.col < frogCoords.col)
				afterJumpCol = frogCoords.col - jumpLength;
			else afterJumpCol = frogCoords.col;

			let frogCoordsAfterJump = {
				row: afterJumpRow,
				col: afterJumpCol,
			};

			if (
				frogCoordsAfterJump.row !== emptyCoords.row ||
				frogCoordsAfterJump.col !== emptyCoords.col
			) {
				console.warn('cannot jump', frogCoordsAfterJump, emptyCoords);
				return state;
			}

			frog.setCoordinates(emptyCoords.row, emptyCoords.col);
			JUMP_lake[emptyCoords.row][emptyCoords.col] = frog;
			JUMP_lake[frogCoords.row][frogCoords.col] = {
				...frogCoords,
				isChecked: true,
			};

			return { ...state, lake: JUMP_lake };
		case REPRODUCE:
			let REPRODUCE_lake = [...state.lake];
			let motherFrog = null;
			let fatherFrog = null;

			for (let fieldCoords of state.selected) {
				const field = REPRODUCE_lake[fieldCoords.row][fieldCoords.col];
				if (!field.isFrog) return state;

				if (field.gender === FROGS_GENDERS.MALE) fatherFrog = field;
				else motherFrog = field;
			}

			if (!motherFrog || !fatherFrog) return state;
			if (
				!(
					(motherFrog.row === fatherFrog.row &&
						(motherFrog.col - 1 === fatherFrog.col ||
							motherFrog.col + 1 === fatherFrog.col)) ||
					(motherFrog.col === fatherFrog.col &&
						(motherFrog.row - 1 === fatherFrog.row ||
							motherFrog.row + 1 === fatherFrog.row))
				)
			)
				return state;

			const babyFrog = new Frog();
			babyFrog.setGender(Frog.getRandom(FROGS_PROPERTIES.GENDER));
			babyFrog.inheritParents(motherFrog, fatherFrog);

			for (let i = motherFrog.row + 1; i >= motherFrog.row - 1; i--) {
				if (i >= 0 && i < 6) {
					for (
						let j = motherFrog.col + 1;
						j >= motherFrog.col - 1;
						j--
					) {
						if (j >= 0 && j < 10) {
							if (!REPRODUCE_lake[i][j].isFrog) {
								babyFrog.setCoordinates(i, j);
							}
						}
					}
				}
			}

			if (!(babyFrog.row >= 0)) {
				console.warn('no row exception', babyFrog.row);
				return state;
			}
			REPRODUCE_lake[babyFrog.row][babyFrog.col] = babyFrog;

			return { ...state, lake: REPRODUCE_lake };

		default:
			return state;
	}
};
