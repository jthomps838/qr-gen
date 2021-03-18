import React from 'react'
import QRCodePrintable from '../../components/QRCodePrintable'

const QRPRintWrapper = ({ setConfirmed }) => {
    return (
        <div>
            <QRCodePrintable setConfirmed={setConfirmed} />
        </div>
    )
}

export default QRPRintWrapper