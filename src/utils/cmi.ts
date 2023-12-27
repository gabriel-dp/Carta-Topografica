import { Point, Area } from "@/utils/maps";

export type CMIdata = {
	hemisphere: string;
	range: string | null;
	zone: number | null;
	firstDivision: string | null;
	secondDivision: string | null;
	thirdDivision: string | null;
	fourthDivision: string | null;
	fifthDivision: string | null;
};

function getCharValue(str: string): number {
	const valueA = "A".charCodeAt(0);
	return str.charCodeAt(0) - valueA;
}

function enhancePrecision(area: Area, quadrant: number, Htotal: number, Vtotal: number) {
	const diffHorizontal = Math.abs(area.getTopLeft().getX() - area.getBottomRight().getX());
	const diffVertical = Math.abs(area.getTopLeft().getY() - area.getBottomRight().getY());

	area.setLeft(area.getTopLeft().getX() + (((quadrant - 1) % Htotal) * diffHorizontal) / Htotal);
	area.setRight(area.getBottomRight().getX() - ((Htotal - ((quadrant - 1) % Htotal) - 1) * diffHorizontal) / Htotal);
	area.setTop(area.getTopLeft().getY() - (Math.floor((quadrant - 1) / Htotal) * diffVertical) / Vtotal);
	area.setBottom(
		area.getBottomRight().getY() + ((Vtotal - Math.floor((quadrant - 1) / Htotal) - 1) * diffVertical) / Vtotal
	);
}

export function convertCMItoCoords(props: CMIdata): Area | undefined {
	const area = new Area(new Point(-180, 90), new Point(180, -90));

	switch (props.hemisphere) {
		case "N":
			area.setBottom(0);
			if (props.range) {
				area.setTop(4 * (getCharValue(props.range) + 1));
				area.setBottom(4 * getCharValue(props.range));
			}
			break;
		case "S":
			area.setTop(0);
			if (props.range) {
				area.setTop(-4 * getCharValue(props.range));
				area.setBottom(-4 * (getCharValue(props.range) + 1));
			}
			break;
	}

	if (props.zone) {
		area.setLeft((props.zone - 31) * 6);
		area.setRight((props.zone - 30) * 6);
	}

	switch (props.firstDivision) {
		case "V":
			enhancePrecision(area, 1, 2, 2);
			break;
		case "X":
			enhancePrecision(area, 2, 2, 2);
			break;
		case "Y":
			enhancePrecision(area, 3, 2, 2);
			break;
		case "Z":
			enhancePrecision(area, 4, 2, 2);
			break;
	}

	switch (props.secondDivision) {
		case "A":
			enhancePrecision(area, 1, 2, 2);
			break;
		case "B":
			enhancePrecision(area, 2, 2, 2);
			break;
		case "C":
			enhancePrecision(area, 3, 2, 2);
			break;
		case "D":
			enhancePrecision(area, 4, 2, 2);
			break;
	}

	switch (props.thirdDivision) {
		case "I":
			enhancePrecision(area, 1, 3, 2);
			break;
		case "II":
			enhancePrecision(area, 2, 3, 2);
			break;
		case "III":
			enhancePrecision(area, 3, 3, 2);
			break;
		case "IV":
			enhancePrecision(area, 4, 3, 2);
			break;
		case "V":
			enhancePrecision(area, 5, 3, 2);
			break;
		case "VI":
			enhancePrecision(area, 6, 3, 2);
			break;
	}

	switch (props.fourthDivision) {
		case "1":
			enhancePrecision(area, 1, 2, 2);
			break;
		case "2":
			enhancePrecision(area, 2, 2, 2);
			break;
		case "3":
			enhancePrecision(area, 3, 2, 2);
			break;
		case "4":
			enhancePrecision(area, 4, 2, 2);
			break;
	}

	switch (props.fifthDivision) {
		case "NO":
			enhancePrecision(area, 1, 2, 2);
			break;
		case "NE":
			enhancePrecision(area, 2, 2, 2);
			break;
		case "SO":
			enhancePrecision(area, 3, 2, 2);
			break;
		case "SE":
			enhancePrecision(area, 4, 2, 2);
			break;
	}

	return area;
}

