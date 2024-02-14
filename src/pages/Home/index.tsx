import { useState } from "react";

import { Area } from "@/utils/maps";
import Map from "@/components/Map";
import Menu from "@/components/Menu";

import { Arrow, MainContainer, Panel, PanelButton } from "./styles";

export default function Home() {
	const [localArea, setLocalArea] = useState<Area | undefined>();

	const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
	const handlePanelButtonClick = () => setIsPanelOpen((isOpen) => !isOpen);
	const closePanel = () => setIsPanelOpen(false);

	return (
		<MainContainer>
			<Map localArea={localArea} />
			<Panel $isopen={isPanelOpen.toString()}>
				<PanelButton onClick={handlePanelButtonClick}>
					<Arrow />
				</PanelButton>
				<Menu setLocalArea={setLocalArea} closePanel={closePanel} />
			</Panel>
		</MainContainer>
	);
}
