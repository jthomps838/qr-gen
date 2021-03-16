import React, { useState, useEffect } from 'react'
import ToolTip from '../Tooltip'

const LogoSettings = ({
	setGeneratorObject,
	generatorObject,
	generatorObject: {
		imageSettings: {
			src: initialSrc,
			height: initialHeight,
			width: initialWidth,
		},
	},
}) => {
	const [src, setSrc] = useState(initialSrc)
	const [height, setHeight] = useState(initialHeight)
	const [width, setWidth] = useState(initialWidth)

	useEffect(() => {
		setGeneratorObject({
			...generatorObject,
			imageSettings: { ...generatorObject.imageSettings, src, height, width },
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [src, height, width])

	return (
		<>
			<label htmlFor='src'>
				<p>
					Image Source{' '}
					<ToolTip message='Please enter a valid url' iconLabel='information' />
				</p>
				<input
					type='text'
					value={src}
					onChange={(e) => setSrc(e.target.value)}
					id='src'
				/>
			</label>
			<label htmlFor='height'>
				<p>Height</p>
				<input
					type='number'
					id='height'
					onChange={(e) => setHeight(e.target.value)}
					value={height}
				/>
			</label>
			<label htmlFor='width'>
				<p>Width</p>
				<input
					type='number'
					id='height'
					onChange={(e) => setWidth(e.target.value)}
					value={width}
				/>
			</label>
		</>
	)
}

export default LogoSettings
