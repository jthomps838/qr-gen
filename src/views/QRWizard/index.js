import React from 'react'
import QRCode from 'qrcode.react'
import QRWidget from '../../components/QRWidget'
import {
	GeneratorWrapper,
	CodeWrapper,
	Warning,
} from '../../styles'

const QRWizard = ({ qr_url, setGeneratorObject, setConfirmed, generatorObject, generatorObject: { fgColor, bgColor, size, includeMargin, imageSettings}}) => {
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
							setConfirmed={setConfirmed}
						/>
					</GeneratorWrapper>
					<Warning>
						Above is ONLY an example, try to access using camera before
						PRINTING.
					</Warning>
				</>
    )
}

export default QRWizard