import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Help from '@material-ui/icons/Help'
import Tooltip from '@material-ui/core/Tooltip'

export const ToolTip = ({ message, iconLabel, help = true }) => {
	return (
		<Tooltip title={message}>
			<IconButton aria-label={iconLabel}>
				{help ? <Help /> : <p>other icon</p>}
			</IconButton>
		</Tooltip>
	)
}

export default ToolTip
