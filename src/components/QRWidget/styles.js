import styled from 'styled-components'

export const WidgetContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const StepContainer = styled.main`
	display: flex;
	flex-direction: column;
	min-height: 300px;
	min-width: 340px;
	justify-content: space-evenly;
	padding: 0 10px;

	label {
		font-size: 20px;
		font-weight: bold;
		display: flex;
		flex-direction: column;

		p {
			margin: 5px 0;

			button {
				padding: 0;
			}
		}
	}

	input,
	select {
		font-size: 20px;
		min-width: 100%;
		padding: 3px;
	}
`

export const StepControls = styled.footer`
	margin: 20px 0;
	padding: 10px 5px;
	display: flex;
	justify-content: space-evenly;

	button {
		width: 150px;
		height: 30px;
		font-weight: bold;
		text-transform: uppercase;
	}
`