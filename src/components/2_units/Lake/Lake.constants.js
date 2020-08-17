export const FROGS_PROPERTIES = {
	HEIGHT: 'height',
	WEIGHT: 'weight',
	GENDER: 'gender',
};

export const FROGS_WEIGHTS = {
	FAT: 'fat',
	SLIM: 'slim',
};
export const FROGS_HEIGHTS = {
	TALL: 'tall',
	SHORT: 'short',
};
export const FROGS_GENDERS = {
	MALE: 'male',
	FEMALE: 'female',
};

export class Frog {
	gender;
	weight;
	height;
	row;
	col;

	constructor() {
		this.isChecked = false;
		this.isFrog = true;
	}

	static getRandom(property) {
		let timestamp = Date.now();
		let rand = Math.floor(Math.random() * timestamp);
		rand <= timestamp / 2 ? (rand = 0) : (rand = 1);

		switch (property) {
			case FROGS_PROPERTIES.WEIGHT:
				return Object.values(FROGS_WEIGHTS)[rand];
			case FROGS_PROPERTIES.HEIGHT:
				return Object.values(FROGS_HEIGHTS)[rand];
			case FROGS_PROPERTIES.GENDER:
				return Object.values(FROGS_GENDERS)[rand];
			default:
				return;
		}
	}

	setCoordinates(row, col) {
		this.row = row;
		this.col = col;
	}

	setGender(gender) {
		this.gender = gender;
	}

	setWeight(weight) {
		this.weight = weight;
	}

	setHeight(height) {
		this.height = height;
	}

	setIsChecked(isChecked) {
		this.isChecked = isChecked;
	}

	getGender() {
		return this.gender;
	}

	getCharacteristics() {
		// this one just to fulfill the requirements
		return [this.weight, this.height];
	}

	inheritParents(...parents) {
		let timestamp = Date.now();
		let rand1 = Math.floor(Math.random() * timestamp);
		rand1 <= timestamp / 2 ? (rand1 = 0) : (rand1 = 1);
		let rand2 = (rand1 - 1) * (rand1 - 1);

		this.weight = parents[rand1].weight;
		this.height = parents[rand2].height;
	}
}
