import React from 'react';
import { NavigationButtons } from '../ButtonGroups'
import { confirmedLevels } from '../../App'

const QRCodePrintable = ({ setConfirmed }) => {
    return (<div>
        <NavigationButtons 
					downCB={() => {}} 
					downDisabled={false}
                    downText='Print QR Code'
					upCB={() => setConfirmed(confirmedLevels[3])} 
					upDisabled={false} 
                    upText='Edit With PDF'
					/>

<NavigationButtons 
					downCB={() => setConfirmed(confirmedLevels[0])}
					downDisabled={false}
                    downText='Edit QR Code'
					upCB={() => {}} 
					upDisabled={false} 
                    upText='Save QR Code'
					/>
    </div>)
}

export default QRCodePrintable