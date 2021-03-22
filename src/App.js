import styled from 'styled-components'
import React, { useState } from 'react'
import QRWizard from './views/QRWizard'
import PDFPreview from './views/PDFPreview'
import QRPRintWrapper from './views/QRPrintWrapper'

const AppWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
`

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

const defaultEstablishment = {
	phone: '555-555-5555',
	address: '123 Lucky Street,  Atlanta, GA 30075',
}

const defaultPdfSettings = {
	displayUrl: true,
	displayPhone: true,
	displayAddress: true,
}

export const confirmedLevels = ['open', 'progress', 'confirmed', 'pdf']

function App({
	qr_url = 'https://www.google.com',
	settings = defaultGeneratorObject,
}) {
	const [generatorObject, setGeneratorObject] = useState(settings)
	const [confirmed, setConfirmed] = useState(confirmedLevels[0])
	const [pdfSettings, setPdfSettings] = useState(defaultPdfSettings)
	const [establishment, setEstablishment] = useState(defaultEstablishment)
	
	switch (confirmed) {
		case 'pdf':
			return (
				<PDFPreview
					generatorObject={generatorObject}
					qr_url={qr_url}
					pdfSettings={pdfSettings}
					setPdfSettings={setPdfSettings}
					setConfirmed={setConfirmed}
					establishment={establishment}
				/>
			)
		case 'confirmed':
			return <QRPRintWrapper 
				setConfirmed={setConfirmed} 
				generatorObject={generatorObject} 
				qr_url={qr_url}
				setGeneratorObject={setGeneratorObject} 
				pdfSettings={pdfSettings}
				establishment={establishment}
				/>
		default:
			return (
				<QRWizard
					generatorObject={generatorObject}
					setGeneratorObject={setGeneratorObject}
					setConfirmed={setConfirmed}
					qr_url={qr_url}
				/>
			)
	}
}

export default App
