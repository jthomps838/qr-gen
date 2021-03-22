import React from 'react'
import QRCodePrintable from '../../components/QRCodePrintable'

const QRPRintWrapper = (props) => {
    return (
        <div>
            <QRCodePrintable {...props} />
        </div>
    )
}

export default QRPRintWrapper