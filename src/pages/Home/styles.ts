import styled from "styled-components";

export const MainContainer = styled.div`
	width: 100%;
	height: 100dvh;
	position: relative;
	overflow: hidden;
`;

interface PanelI {
	$isopen: string;
}

export const Panel = styled.div<PanelI>`
	width: 100%;
	background-color: ${(props) => props.theme.background};
	border-radius: 1.5rem 1.5rem 0 0;
	padding: 1.5rem 0;
	padding-bottom: 0;
	filter: drop-shadow(0 0 1rem #00000044);
	transition: all 0.5s ease-in-out;

	z-index: 1;
	position: absolute;
	top: ${(props) => (props.$isopen == "true" ? "5rem;" : "calc(100% - 1.5rem)")};
	bottom: 0;
	left: 0;

	.arrow {
		transform: rotate(${(props) => (props.$isopen == "true" ? 45 : 225)}deg);
	}
`;

export const PanelButton = styled.button`
	border: none;
	border-radius: 1rem 1rem 0 0;
	background-color: inherit;
	transition: all 0.25s ease-in-out;
	cursor: pointer;

	padding: 1.25rem 3rem 2rem 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	position: absolute;
	bottom: calc(100% - 1.25rem);
	left: 50%;
	transform: translate(-50%, 0.25rem);

	&:hover {
		background-color: inherit;
	}
`;

export const Arrow = styled.div.attrs({
	className: "arrow",
})`
	border: solid ${(props) => props.theme.primary};
	border-width: 0 3px 3px 0;
	display: inline-block;
	padding: 3px;
	transition: all 0.25s ease-in-out;
`;

