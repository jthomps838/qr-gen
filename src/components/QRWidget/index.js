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
	min-height: 200px;
	min-width: 340px;
	justify-content: space-evenly;
	padding: 0 10px;
`

const StepControls = styled.footer`
	border: 1px solid #33ff00;
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

export const QRWidget = ({ setGeneratorObject, generatorObject }) => {
	const [widgetStep, setWidgetStep] = useState(0)

	useEffect(() => {
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
		/>,
	]
	return (
		<WidgetContainer>
			<StepContainer>{widgetComponents[widgetStep]}</StepContainer>
			<StepControls>
				<button
					onClick={() => setWidgetStep(widgetStep - 1)}
					disabled={widgetStep === 0}
				>
					Back
				</button>
				<button
					onClick={() => setWidgetStep(widgetStep + 1)}
					disabled={widgetStep >= widgetComponents.length}
				>
					Next
				</button>
			</StepControls>
		</WidgetContainer>
	)
}

export default QRWidget
