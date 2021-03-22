import React, { useState } from 'react';
import { NavigationButtons } from '../ButtonGroups'
import { confirmedLevels } from '../../App'
import PDFDocument from '../PDFDocument'

const QRCodePrintable = (props) => {
	const [shouldShow, setShouldShow] = useState(false)
    return (<div>
        <NavigationButtons 
					downCB={() => {}} 
					downDisabled={false}
                    downText='Print QR Code'
					upCB={() => props.setConfirmed(confirmedLevels[3])} 
					upDisabled={false} 
                    upText='Edit With PDF'
					/>

		<NavigationButtons 
					downCB={() => props.setConfirmed(confirmedLevels[0])}
					downDisabled={false}
                    downText='Edit QR Code'
					upCB={() => setShouldShow(true)} 
					upDisabled={false} 
                    upText='Save QR Code'
					/>
					{shouldShow && <PDFDocument {...props} />}
    </div>)
}

export default QRCodePrintable