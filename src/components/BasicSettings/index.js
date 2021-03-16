import React, { useState, useEffect } from 'react'

const BasicSettings = ({
	setGeneratorObject,
	generatorObject,
	generatorObject: { size: initialSize, includeMargin: initialIncludeMargin },
}) => {
	const [title, setTitle] = useState('')
	const [size, setSize] = useState(initialSize)
	const [includeMargin, setIncludeMargin] = useState(initialIncludeMargin)

	useEffect(() => {
		setGeneratorObject({ ...generatorObject, size, includeMargin, title })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [size, includeMargin, title])

	return (
		<>
			<label htmlFor='title'>
				Title
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					id='title'
				/>
			</label>
			<label htmlFor='qr_size'>
				Size
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
				Do you want to add margins?
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
