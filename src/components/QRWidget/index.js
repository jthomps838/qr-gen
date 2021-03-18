import React, { useState, useEffect } from 'react'
import {NavigationButtons} from '../ButtonGroups'
import BasicSettings from '../BasicSettings'
import BrandingSettings from '../BrandingSettings'
import LogoSettings from '../LogoSettings'
import ReviewSettings from '../ReviewSettings'
import { WidgetContainer, StepContainer, StepControls } from './styles'

export const QRWidget = ({
	setGeneratorObject,
	generatorObject,
	setConfirmed,
}) => {
	const [widgetStep, setWidgetStep] = useState(0)
	const [lastStep, setLastStep] = useState(false)

	useEffect(() => {
		if (widgetStep === widgets.length - 1) {
			setLastStep(true)
		}
		if (widgetStep >= widgets.length) {
			setWidgetStep(widgetStep - 1)
			setLastStep(false)
		} else if (widgetStep < 0) {
			setWidgetStep(0)
			setLastStep(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [widgetStep])

	const widgets = [
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
			<StepContainer>{widgets[widgetStep]}</StepContainer>
			<StepControls>
				{lastStep ? 
				<NavigationButtons 
				downCB={() => {
					setLastStep(false)
					setWidgetStep(widgetStep - 1)
				}} 
				downDisabled={widgetStep === 0} 
				upCB={() => setConfirmed('confirmed')} 
				upDisabled={widgetStep >= widgets.length} 
				upText='confirm'
				/>
				:
				<NavigationButtons 
					downCB={(e) => {
						e.preventDefault()
						setLastStep(false)
						setWidgetStep(widgetStep - 1)
					}} 
					downDisabled={widgetStep === 0} 
					upCB={(e) => {
						e.preventDefault()
						setWidgetStep(widgetStep + 1)}} 
					upDisabled={widgetStep >= widgets.length} 
					/>}
			</StepControls>
		</WidgetContainer>
	)
}

export default QRWidget
