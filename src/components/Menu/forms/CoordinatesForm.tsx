import { useForm, SubmitHandler } from "react-hook-form";

import { MenuProps } from "@/components/Menu";
import { Point } from "@/utils/maps";

interface FormData {
	latitude: string;
	longitude: string;
}

export default function CoordinatesForm(props: MenuProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data) => {
		props.setLocalArea(undefined);
		props.setLocalPoint(new Point(parseFloat(data.latitude), parseFloat(data.longitude)));
		props.closePanel();
	};

	// Custom function to set value with precision to 6 decimal places
	const setValueWithPrecision = (name: keyof FormData, value: string) => {
		setValue(name, parseFloat(value).toFixed(6));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="latitude">Latitude</label>
				<input
					type="number"
					step="0.000001"
					id="latitude"
					{...register("latitude", {
						required: "Latitude is required",
						pattern: {
							value: /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/,
							message: "Enter a valid latitude with 6 decimal places",
						},
					})}
					onBlur={(e) => setValueWithPrecision("latitude", e.target.value)}
				/>
				{errors.latitude && <p>{errors.latitude.message}</p>}
			</div>

			<div>
				<label htmlFor="longitude">Longitude</label>
				<input
					type="number"
					step="0.000001"
					id="longitude"
					{...register("longitude", {
						required: "Longitude is required",
						pattern: {
							value: /^-?((1?[0-7]?|[1-9])?\d(\.\d{1,6})?|180(\.0{1,6})?)$/,
							message: "Enter a valid longitude with 6 decimal places",
						},
					})}
					onBlur={(e) => setValueWithPrecision("longitude", e.target.value)}
				/>
				{errors.longitude && <p>{errors.longitude.message}</p>}
			</div>

			<button type="submit">Submit</button>
		</form>
	);
}

