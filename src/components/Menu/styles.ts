import styled from "styled-components";

export const MenuContainer = styled.div`
	max-height: 100%;
	width: 100%;
	overflow-y: auto;
	padding: 1rem 1.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	h1 {
		max-width: 20rem;
		font-size: 1.5rem;
		text-align: center;
		color: ${(props) => props.theme.primary};
	}

	hr {
		width: min(100%, 22rem);
		height: 1px;
		border: none;
		border-top: 1px solid ${(props) => props.theme.primary};
	}

	.author {
		max-width: 100%;
		font-size: 0.875rem;
		text-align: center;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		span {
			white-space: nowrap;
		}

		a {
			color: ${(props) => props.theme.primary};
			text-decoration: none;
		}
	}

	form {
		text-overflow: ellipsis;
		width: min(100%, 15rem);

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		row-gap: 0.5rem;
		column-gap: 1rem;

		div {
			flex: 1;
			display: flex;
			flex-direction: column;
			white-space: nowrap;
		}

		input {
			padding: 0.25rem;
		}

		select {
			padding: 0.25rem;
			cursor: pointer;
		}

		p {
			color: #f00;
			font-size: 0.75rem;
		}

		button {
			width: 100%;
			margin-top: 1rem;
			border-radius: 0.5rem;
			border: none;
			padding: 0.5rem;
			background-color: ${(props) => props.theme.primary};
			color: ${(props) => props.theme.primaryText};
			cursor: pointer;
			transition: all 0.25s ease-in-out;

			&:hover {
				background-color: ${(props) => props.theme.primaryHighlight};
			}
		}
	}
`;

export const OptionsMenu = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
`;

interface OptionI {
	$selected: string;
}

export const Option = styled.button<OptionI>`
	flex-grow: 1;
	padding: 0.5rem 1rem;
	background-color: ${(props) => (props.$selected == "true" ? props.theme.primary : props.theme.primaryText)};
	color: ${(props) => (props.$selected == "true" ? props.theme.primaryText : props.theme.primary)};
	border: 1px solid ${(props) => props.theme.primary};
	border-radius: 0.5rem;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		background-color: ${(props) => props.theme.primaryHighlight};
		color: ${(props) => props.theme.primaryText};
	}
`;
