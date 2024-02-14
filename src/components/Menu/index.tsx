import { Area } from "@/utils/maps";

import CIMForm from "./forms/CIMForm";
import { MenuContainer } from "./styles";

export interface MenuProps {
	setLocalArea: React.Dispatch<React.SetStateAction<Area | undefined>>;
	closePanel: () => void;
}

export default function Menu(props: MenuProps) {
	return (
		<MenuContainer>
			<h1>Carta Internacional do Mundo ao Milionésimo</h1>
			<hr />
			<CIMForm {...props} />
			<hr />
			<p className="author">
				<span>Desenvolvido por</span>
				&nbsp;
				<span>Antonio Meira e</span>
				&nbsp;
				<span>
					<a href="https://gabriel-dp.github.io/" target="_blank" rel="noreferrer">
						Gabriel Meira
					</a>
				</span>
			</p>
		</MenuContainer>
	);
}
