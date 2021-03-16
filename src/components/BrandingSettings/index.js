import React, { useState, useEffect } from 'react'

const BrandingSettings = ({
	setGeneratorObject,
	generatorObject,
	generatorObject: { bgColor: initialBgColor, fgColor: initialFgColor },
}) => {
	const [bgColor, setBgColor] = useState(initialBgColor)
	const [fgColor, setFgColor] = useState(initialFgColor)

	useEffect(() => {
		setGeneratorObject({ ...generatorObject, bgColor, fgColor })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bgColor, fgColor])

	return (
		<>
			<label htmlFor='fgColor'>
				<p>Color</p>
				<input
					type='color'
					value={fgColor}
					onChange={(e) => setFgColor(e.target.value)}
					id='fgColor'
				/>
			</label>
			<label htmlFor='bgColor'>
				<p>Background Color</p>
				<input
					type='color'
					id='bgColor'
					onChange={(e) => setBgColor(e.target.value)}
					value={bgColor}
				/>
			</label>
		</>
	)
}

export default BrandingSettings
