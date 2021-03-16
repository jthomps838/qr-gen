import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import QRCode from 'qrcode.react'

const styles = StyleSheet.create({
	document: {
		width: '600px',
		height: '700px',
	},
	page: {
		flexDirection: 'column',
		display: 'flex',
		height: '100%',
		width: '100%',
		border: '1px solid black',
		margin: '20px auto',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
		height: '200px',
		width: '100%',
	},
	header: {
		margin: '100px auto 50px',
		padding: 10,
		fontSize: '36px',
		textTransform: 'uppercase',
		textAlign: 'center',
	},
	tableId: {
		fontSize: '24px',
		textAlign: 'center',
	},
	qrcode: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '20px auto',
	},
	qrUrl: {
		fontSize: '8px',
		color: 'gray',
	},
})

function PDFDocument({
	generatorObject,
	generatorObject: { size, bgColor, fgColor, includeMargin, imageSettings },
	qr_url,
	tableId = 'Table ID',
	pdfSettings,
}) {
	return (
		<>
			<Document style={styles.document}>
				<Page size='A4' style={styles.page}>
					<View style={styles.header}>
						<Text>{generatorObject.title}</Text>
					</View>
					<View style={styles.tableId}>
						<Text>{tableId}</Text>
					</View>
					<View style={styles.qrcode}>
						<QRCode
							value={qr_url}
							renderAs='svg'
							size={size}
							bgColor={bgColor}
							fgColor={fgColor}
							includeMargin={includeMargin}
							imageSettings={imageSettings}
						/>
						<Text style={styles.qrUrl}>
							{pdfSettings.displayUrl ? <p>{qr_url}</p> : null}
						</Text>
					</View>
				</Page>
			</Document>
		</>
	)
}

export default PDFDocument
