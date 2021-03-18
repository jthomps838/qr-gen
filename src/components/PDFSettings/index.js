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

const SettingsWrapper = styled.section`
	display: flex;
	flex-direction: column;

	label {
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;
	}
`

const Heading = styled.h3`
	font-size: 16px;
	font-weight: bold;
	margin: 10px 0 0;
`

const PDFSettings = ({ settings, setSettings }) => {
	const [displayUrl, setDisplayUrl] = useState(settings.displayUrl)
	const [displayAddress, setDisplayAddress] = useState(settings.displayAddress)
	const [displayPhone, setDisplayPhone] = useState(settings.displayPhone)

	useEffect(() => {
		setSettings({ ...settings, displayUrl, displayAddress, displayPhone })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [displayUrl, displayAddress, displayPhone])
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
				<hr />
				<SettingsWrapper>
					<label htmlFor='display_url'>
						Display URL
						<input
							type='checkbox'
							checked={displayUrl}
							onChange={() => setDisplayUrl(!displayUrl)}
							id='display_url'
						/>
					</label>
					<label htmlFor='display_address'>
						Display Address
						<input
							type='checkbox'
							checked={displayAddress}
							onChange={() => setDisplayAddress(!displayAddress)}
							id='display_address'
						/>
					</label>
					<label htmlFor='display_phone'>
						Display Phone Number
						<input
							type='checkbox'
							checked={displayPhone}
							onChange={() => setDisplayPhone(!displayPhone)}
							id='display_phone'
						/>
					</label>
				</SettingsWrapper>
				<hr />
			</SettingsBlock>
		</Wrapper>
	)
}

export default PDFSettings
