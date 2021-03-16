import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BasicSettings from '../BasicSettings'
import BrandingSettings from '../BrandingSettings'
import LogoSettings from '../LogoSettings'
import ReviewSettings from '../ReviewSettings'

const WidgetContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const StepContainer = styled.main`
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

const StepControls = styled.footer`
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

export const QRWidget = ({
	setGeneratorObject,
	generatorObject,
	setConfirmed,
}) => {
	const [widgetStep, setWidgetStep] = useState(0)
	const [lastStep, setLastStep] = useState(false)

	useEffect(() => {
		if (widgetStep === widgetComponents.length - 1) {
			setLastStep(true)
		}
		if (widgetStep >= widgetComponents.length) {
			setWidgetStep(widgetStep - 1)
		} else if (widgetStep < 0) {
			setWidgetStep(0)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [widgetStep])

	const widgetComponents = [
		<BasicSettings
			setGeneratorObject={setGeneratorObject}
			generatorObject={generatorObject}
		/>,
		<BrandingSettings
			setGeneratorObject={setGeneratorObject}
			generatorObject={generatorObject}
		/>,
		<LogoSettings
			setGeneratorObject={setGeneratorObject}
			generatorObject={generatorObject}
		/>,
		<ReviewSettings
			generatorObject={generatorObject}
			setWidgetStep={setWidgetStep}
			setLastStep={() => setLastStep(false)}
		/>,
	]
	return (
		<WidgetContainer>
			<StepContainer>{widgetComponents[widgetStep]}</StepContainer>
			<StepControls>
				<button
					onClick={() => {
						setLastStep(false)
						setWidgetStep(widgetStep - 1)
					}}
					disabled={widgetStep === 0}
				>
					Back
				</button>
				{lastStep ? (
					<button onClick={() => setConfirmed(true)}>Confirm</button>
				) : (
					<button
						onClick={() => setWidgetStep(widgetStep + 1)}
						disabled={widgetStep >= widgetComponents.length}
					>
						Next
					</button>
				)}
			</StepControls>
		</WidgetContainer>
	)
}

export default QRWidget
