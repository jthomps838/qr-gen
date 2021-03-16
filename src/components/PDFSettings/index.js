import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.aside`
	margin: 30px 0;
	display: flex;
	padding: 10px;
	flex-direction: column;
	justify-content: flex-start;
	min-height: 700px;
`

const SettingsBlock = styled.section`
	margin: 5px;
`

const Heading = styled.h3`
	font-size: 16px;
	font-weight: bold;
	margin: 10px 0 0;
`

const PDFSettings = ({ settings, setSettings }) => {
	const [displayUrl, setDisplayUrl] = useState(false)

	useEffect(() => {
		setSettings({ ...settings, displayUrl })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [displayUrl])
	return (
		<Wrapper>
			<Heading>PDF Settings</Heading>
			<hr />
			<SettingsBlock>
				<Heading>Header Settings</Heading>
				<hr />
			</SettingsBlock>
			<SettingsBlock>
				<Heading>QR Code Settings</Heading>
				<hr />
			</SettingsBlock>
			<SettingsBlock>
				<Heading>Footer Settings</Heading>
				<label htmlFor='display_url'>
					Display URL
					<input
						type='checkbox'
						value={displayUrl}
						onChange={() => setDisplayUrl(!displayUrl)}
					/>
				</label>
				<hr />
			</SettingsBlock>
		</Wrapper>
	)
}

export default PDFSettings
