import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { CMIdata, convertCMItoCoords } from "@/utils/cmi";
import { MenuProps } from "@/components/Menu";

const INPUTS: { [key: string]: { name: string; options: string[]; default?: string; required: boolean } } = {
	hemisphere: {
		name: "Hemisfério",
		options: ["N", "S"],
		default: "S",
		required: true,
	},
	range: {
		name: "Zona",
		options: Array.from({ length: 20 }, (_, i) => String.fromCharCode("A".charCodeAt(0) + i)),
		default: "D",
		required: true,
	},
	zone: {
		name: "Fuso",
		options: Array.from({ length: 60 }, (_, i) => (i + 1).toString()),
		default: "24",
		required: true,
	},
	firstDivision: {
		name: "1ª divisão",
		options: ["V", "X", "Y", "Z"],
		required: false,
	},
	secondDivision: {
		name: "2ª divisão",
		options: ["A", "B", "C", "D"],
		required: false,
	},
	thirdDivision: {
		name: "3ª divisão",
		options: ["I", "II", "III", "IV", "V", "VI"],
		required: false,
	},
	fourthDivision: {
		name: "4ª divisão",
		options: ["1", "2", "3", "4"],
		required: false,
	},
	fifthDivision: {
		name: "5ª divisão",
		options: ["NO", "NE", "SO", "SE"],
		required: false,
	},
};

const NULL_VALUE = "-";

export default function CIMForm(props: MenuProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
	} = useForm<CMIdata>();

	const watchFirstDivision = watch("firstDivision");
	const watchSecondDivision = watch("secondDivision");
	const watchThirdDivision = watch("thirdDivision");
	const watchFourthDivision = watch("fourthDivision");
	const watchFifthDivision = watch("fifthDivision");

	useEffect(() => {
		const isNull = (value: string | null) => !value || value == NULL_VALUE;
		if (isNull(watchFirstDivision)) setValue("secondDivision", NULL_VALUE);
		if (isNull(watchSecondDivision)) setValue("thirdDivision", NULL_VALUE);
		if (isNull(watchThirdDivision)) setValue("fourthDivision", NULL_VALUE);
		if (isNull(watchFourthDivision)) setValue("fifthDivision", NULL_VALUE);
	}, [setValue, watchFirstDivision, watchSecondDivision, watchThirdDivision, watchFourthDivision, watchFifthDivision]);

	const onSubmit = (data: CMIdata) => {
		props.setLocalArea(convertCMItoCoords(data));
		props.closePanel();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{Object.keys(INPUTS).map((inputKey) => {
				const input = INPUTS[inputKey as keyof typeof INPUTS];
				return (
					<div key={inputKey}>
						<label htmlFor={inputKey}>{input.name}</label>
						<select
							id={inputKey}
							{...register(inputKey as keyof CMIdata, { required: input.required })}
							defaultValue={input.default}>
							{!input.required && <option>{NULL_VALUE}</option>}
							{input.options.map((value) => (
								<option key={value} value={value}>
									{value}
								</option>
							))}
						</select>
						{errors[inputKey as keyof CMIdata] && <p>Necessário informar {input.name}</p>}
					</div>
				);
			})}
			<button type="submit">Ver área</button>
		</form>
	);
}
