import L from "leaflet";

export type Coordinate = number;

export class Point {
	private x: Coordinate;
	private y: Coordinate;

	constructor(x: Coordinate, y: Coordinate) {
		this.x = x;
		this.y = y;
	}

	getX(): Coordinate {
		return this.x;
	}

	getY(): Coordinate {
		return this.y;
	}

	setX(x: Coordinate): void {
		this.x = x;
	}

	setY(y: Coordinate): void {
		this.y = y;
	}

	createLeafletPoint(): L.LatLng {
		return new L.LatLng(this.y, this.x);
	}
}

export class Area {
	private topLeft: Point;
	private bottomRight: Point;

	constructor(topLeft: Point, bottomRight: Point) {
		this.topLeft = topLeft;
		this.bottomRight = bottomRight;
	}

	getTopLeft(): Point {
		return this.topLeft;
	}

	getBottomRight(): Point {
		return this.bottomRight;
	}

	setTop(coord: Coordinate) {
		this.topLeft.setY(coord);
	}

	setBottom(coord: Coordinate) {
		this.bottomRight.setY(coord);
	}

	setLeft(coord: Coordinate) {
		this.topLeft.setX(coord);
	}

	setRight(coord: Coordinate) {
		this.bottomRight.setX(coord);
	}

	createLeafletBounds(): L.LatLngBounds {
		return new L.LatLngBounds(this.topLeft.createLeafletPoint(), this.bottomRight.createLeafletPoint());
	}
}

