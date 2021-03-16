import React, { useState } from 'react'
import QRCode from 'qrcode.react'
import QRWidget from '../QRWidget'
import PDFDocument from '../PDFDocument'
import PDFSettings from '../PDFSettings'
import {
	GeneratorWrapper,
	CodeWrapper,
	Warning,
	BackButton,
	PDFWrapper,
} from './styles'

const defaultGeneratorObject = {
	title: 'practice title',
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

const defaultPdfSettings = {
	displayUrl: false,
}

const CodeGenerator = ({
	qr_url = 'https://www.google.com',
	settings = defaultGeneratorObject,
}) => {
	const [generatorObject, setGeneratorObject] = useState(settings)
	const [confirmed, setConfirmed] = useState(false)
	const [pdfSettings, setPdfSettings] = useState(defaultPdfSettings)
	const {
		size,
		bgColor,
		fgColor,
		includeMargin,
		imageSettings,
	} = generatorObject

	return (
		<>
			{!confirmed ? (
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
							setConfirmed={setConfirmed}
						/>
					</GeneratorWrapper>
					<Warning>
						Above is ONLY an example, try to access using camera before
						PRINTING.
					</Warning>
				</>
			) : (
				<>
					<PDFWrapper>
						<PDFDocument
							generatorObject={generatorObject}
							qr_url={qr_url}
							pdfSettings={pdfSettings}
						/>
						<PDFSettings settings={pdfSettings} setSettings={setPdfSettings} />
					</PDFWrapper>
					<BackButton onClick={() => setConfirmed(false)}>Back</BackButton>
				</>
			)}
		</>
	)
}

export default CodeGenerator
