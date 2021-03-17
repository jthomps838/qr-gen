import React from 'react'
import PDFDocument from '../../components/PDFDocument'
import PDFSettings from '../../components/PDFSettings'
import {
	BackButton,
	PDFWrapper,
} from '../../styles'

const PDFPreview = ({ generatorObject, qr_url, pdfSettings, setPdfSettings, setConfirmed}) => {
    return (
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
    )
}

export default PDFPreview