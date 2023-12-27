import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { CMIdata, convertCMItoCoords } from "@/utils/cmi";
import { MenuProps } from "@/components/Menu";

export default function CIMForm(props: MenuProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
	} = useForm<CMIdata>();

	const onSubmit = (data: CMIdata) => {
		props.setLocalPoint(undefined);
		props.setLocalArea(convertCMItoCoords(data));
		props.closePanel();
	};

	const watchRange = watch("range");
	const watchZone = watch("zone");
	const watchFirstDivision = watch("firstDivision");
	const watchSecondDivision = watch("secondDivision");
	const watchThirdDivision = watch("thirdDivision");
	const watchFourthDivision = watch("fourthDivision");
	const watchFifthDivision = watch("fifthDivision");

	useEffect(() => {
		if (!watchRange) setValue("zone", null);
		if (!watchZone) setValue("firstDivision", null);
		if (!watchFirstDivision) setValue("secondDivision", null);
		if (!watchSecondDivision) setValue("thirdDivision", null);
		if (!watchThirdDivision) setValue("fourthDivision", null);
		if (!watchFourthDivision) setValue("fifthDivision", null);
	}, [
		setValue,
		watchRange,
		watchZone,
		watchFirstDivision,
		watchSecondDivision,
		watchThirdDivision,
		watchFourthDivision,
		watchFifthDivision,
	]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="hemisphere">Hemisfério</label>
				<select id="hemisphere" {...register("hemisphere", { required: "Hemisphere is required" })}>
					<option value="N">N</option>
					<option value="S">S</option>
				</select>
				{errors.hemisphere && <p>{errors.hemisphere.message}</p>}
			</div>

			<div>
				<label htmlFor="range">Faixa</label>
				<select id="range" {...register("range")}>
					<option value="">-</option>
					{Array.from({ length: 20 }, (_, i) => String.fromCharCode("A".charCodeAt(0) + i)).map((letter) => (
						<option key={letter} value={letter}>
							{letter}
						</option>
					))}
				</select>
				{errors.range && <p>{errors.range.message}</p>}
			</div>

			<div>
				<label htmlFor="zone">Fuso</label>
				<input
					type="number"
					id="zone"
					{...register("zone", {
						min: { value: 1, message: "Enter a number between 1 and 60" },
						max: { value: 60, message: "Enter a number between 1 and 60" },
					})}
				/>
				{errors.zone && <p>{errors.zone.message}</p>}
			</div>

			<div>
				<label htmlFor="firstDivision">Primeira divisão</label>
				<select id="firstDivision" {...register("firstDivision")}>
					<option value="">-</option>
					<option value="V">V</option>
					<option value="X">X</option>
					<option value="Y">Y</option>
					<option value="Z">Z</option>
				</select>
				{errors.firstDivision && <p>{errors.firstDivision.message}</p>}
			</div>

			<div>
				<label htmlFor="secondDivision">Segunda divisão</label>
				<select id="secondDivision" {...register("secondDivision")}>
					<option value="">-</option>
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
					<option value="D">D</option>
				</select>
				{errors.secondDivision && <p>{errors.secondDivision.message}</p>}
			</div>

			<div>
				<label htmlFor="thirdDivision">Terceira divisão</label>
				<select id="thirdDivision" {...register("thirdDivision")}>
					<option value="">-</option>
					<option value="I">I</option>
					<option value="II">II</option>
					<option value="III">III</option>
					<option value="IV">IV</option>
					<option value="V">V</option>
					<option value="VI">VI</option>
				</select>
				{errors.thirdDivision && <p>{errors.thirdDivision.message}</p>}
			</div>

			<div>
				<label htmlFor="fourthDivision">Quarta divisão</label>
				<select id="fourthDivision" {...register("fourthDivision")}>
					<option value="">-</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>
				{errors.fourthDivision && <p>{errors.fourthDivision.message}</p>}
			</div>

			<div>
				<label htmlFor="fifthDivision">Quinta divisão</label>
				<select id="fifthDivision" {...register("fifthDivision")}>
					<option value="">-</option>
					<option value="NO">NO</option>
					<option value="NE">NE</option>
					<option value="SO">SO</option>
					<option value="SE">SE</option>
				</select>
				{errors.fifthDivision && <p>{errors.fifthDivision.message}</p>}
			</div>

			<button type="submit">Submit</button>
		</form>
	);
}

