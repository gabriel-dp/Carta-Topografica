import { useState } from "react";

import Map from "@/components/Map";
import Menu from "@/components/Menu";

import { Arrow, MainContainer, Panel, PanelButton } from "./styles";
import { Point, Area } from "@/utils/maps";

export default function Home() {
	const [localPoint, setLocalPoint] = useState<Point | undefined>();
	const [localArea, setLocalArea] = useState<Area | undefined>();

	const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
	const handlePanelButtonClick = () => setIsPanelOpen((isOpen) => !isOpen);
	const closePanel = () => setIsPanelOpen(false);

	return (
		<MainContainer>
			<Map localPoint={localPoint} localArea={localArea} />
			<Panel $isopen={isPanelOpen.toString()}>
				<PanelButton onClick={handlePanelButtonClick}>
					<Arrow />
				</PanelButton>
				<Menu setLocalPoint={setLocalPoint} setLocalArea={setLocalArea} closePanel={closePanel} />
			</Panel>
		</MainContainer>
	);
}

