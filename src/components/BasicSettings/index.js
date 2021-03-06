import React, { useState, useEffect } from 'react'
import ToolTip from '../Tooltip'

const BasicSettings = ({
	setGeneratorObject,
	generatorObject,
	generatorObject: {
		size: initialSize,
		includeMargin: initialIncludeMargin
	},
}) => {
	const [size, setSize] = useState(initialSize)
	const [includeMargin, setIncludeMargin] = useState(initialIncludeMargin)

	useEffect(() => {
		setGeneratorObject({ ...generatorObject, size, includeMargin })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [size, includeMargin])

	return (
		<>
			<label htmlFor='qr_size'>
				<p>
					Size{' '}
					<ToolTip
						message='Size can range from 128 - 400'
						iconLabel='information'
					/>
				</p>
				<input
					type='range'
					min={128}
					max={400}
					onChange={(e) => setSize(Number(e.target.value))}
					value={size}
					id='qr_size'
				/>
			</label>
			<label htmlFor='include_margins'>
				<p>Do you want to add margins?</p>
				<select
					id='include_margins'
					onChange={(e) =>
						setIncludeMargin(e.target.value === '1' ? true : false)
					}
					value={includeMargin ? '1' : '0'}
				>
					<option value={'0'}>No</option>
					<option value={'1'}>Yes</option>
				</select>
			</label>
		</>
	)
}

export default BasicSettings
