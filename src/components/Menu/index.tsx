import { useState } from "react";

import { Point, Area } from "@/utils/maps";

import CoordinatesForm from "./forms/CoordinatesForm";
import CIMForm from "./forms/CIMForm";
import { MenuContainer, OptionsMenu, Option } from "./styles";

export interface MenuProps {
	setLocalPoint: React.Dispatch<React.SetStateAction<Point | undefined>>;
	setLocalArea: React.Dispatch<React.SetStateAction<Area | undefined>>;
	closePanel: () => void;
}

const OPTIONS: { [key: string]: (props: MenuProps) => JSX.Element } = {
	"Coordenadas ": CoordinatesForm,
	"Carta ao milionésimo": CIMForm,
};

export default function Menu(props: MenuProps) {
	const [selectedOption, setSelectedOption] = useState<keyof typeof OPTIONS>(Object.keys(OPTIONS)[0]);

	const handleOptionClick = (option: keyof typeof OPTIONS) => {
		setSelectedOption(option);
	};

	const SelectedComponent = OPTIONS[selectedOption];

	return (
		<MenuContainer>
			<OptionsMenu>
				{Object.keys(OPTIONS).map((option) => (
					<Option
						key={option}
						onClick={() => handleOptionClick(option)}
						$selected={(selectedOption == option).toString()}>
						{option}
					</Option>
				))}
			</OptionsMenu>
			<hr />
			{<SelectedComponent {...props} />}
		</MenuContainer>
	);
}

