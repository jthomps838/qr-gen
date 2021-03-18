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

const defaultPdfSettings = {
	displayUrl: false,
}

export const confirmedLevels = ['open', 'progress', 'confirmed', 'pdf']

function App({
	qr_url = 'https://www.google.com',
	settings = defaultGeneratorObject,
}) {
	const [generatorObject, setGeneratorObject] = useState(settings)
	const [confirmed, setConfirmed] = useState(confirmedLevels[0])
	const [pdfSettings, setPdfSettings] = useState(defaultPdfSettings)
	console.log(confirmed)
	switch (confirmed) {
		case 'pdf':
			return <PDFPreview
			generatorObject={generatorObject} qr_url={qr_url} pdfSettings={pdfSettings} setPdfSettings={setPdfSettings} setConfirmed={setConfirmed}
			/>
		case 'confirmed':
			return <QRPRintWrapper setConfirmed={setConfirmed} />
		default:
			return <QRWizard generatorObject={generatorObject} setGeneratorObject={setGeneratorObject} setConfirmed={setConfirmed} qr_url={qr_url} />

	}
}

export default App
