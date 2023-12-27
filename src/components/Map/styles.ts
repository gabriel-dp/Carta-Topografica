import styled from "styled-components";

export const MainMapContainer = styled.div`
	width: 100%;
	height: 100%;

	.leaflet-container {
		z-index: 0;
		width: 100%;
		height: 100%;
	}

	.remove-marker {
		font-size: 0.75rem;
		padding: 0.125rem 0.5rem;
		cursor: pointer;
		margin-top: 0.35rem;
	}
`;

