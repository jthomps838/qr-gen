import React, { useState } from 'react'
import styled from 'styled-components'
import QRCode from 'qrcode.react'
import QRWidget from '../QRWidget'

const GeneratorWrapper = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	margin: 50px auto;
	max-width: 800px;
	min-height: 400px;
`

const CodeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`

const Warning = styled.p`
	color: red;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
`

const defaultGeneratorObject = {
	size: 128,
	bgColor: '#000000',
	fgColor: '#ffffff',
	includeMargin: false,
	imageSettings: {
		src: 'none',
		width: 0,
		height: 0,
		excavate: true,
	},
}

const CodeGenerator = ({
	qr_url = 'https://www.google.com',
	settings = defaultGeneratorObject,
}) => {
	const [generatorObject, setGeneratorObject] = useState(settings)
	const {
		size,
		bgColor,
		fgColor,
		includeMargin,
		imageSettings,
	} = generatorObject

	return (
		<>
			<GeneratorWrapper>
				<CodeWrapper>
					<QRCode
						value={qr_url}
						renderAs='svg'
						size={size}
						bgColor={bgColor}
						fgColor={fgColor}
						includeMargin={includeMargin}
						imageSettings={imageSettings}
					/>
				</CodeWrapper>
				<QRWidget
					setGeneratorObject={setGeneratorObject}
					generatorObject={generatorObject}
				/>
			</GeneratorWrapper>
			<Warning>
				Above is ONLY an example, try to access using camera before PRINTING.
			</Warning>
		</>
	)
}

export default CodeGenerator
