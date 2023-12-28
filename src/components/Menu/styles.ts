import styled from "styled-components";

export const MenuContainer = styled.div`
	max-height: 100%;
	width: 100%;
	overflow-y: auto;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	hr {
		width: min(100%, 20rem);
		height: 1px;
		border: none;
		border-top: 1px solid ${(props) => props.theme.primary};
	}

	form {
		text-overflow: ellipsis;
		width: min(100%, 12.5rem);

		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 0.5rem;

		div {
			display: flex;
			flex-direction: column;
		}

		input {
			padding: 0.25rem;

			/* Remove number input arrows */
			&[type="number"]::-webkit-inner-spin-button,
			&[type="number"]::-webkit-outer-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}

			/* Firefox */
			&[type="number"] {
				appearance: textfield;
				-moz-appearance: textfield;
			}
		}

		select {
			padding: 0.25rem;
		}

		p {
			color: #f00;
			font-size: 0.75rem;
		}

		button {
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

