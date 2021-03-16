import React from 'react'
import styled from 'styled-components'

const SectionHeaders = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;

	button {
		height: 20px;
		border: 1px solid transparent;
		border-radius: 3px;
		background: lightgray;
		font-size: 12px;

		&:hover {
			color: gray;
		}
	}
`

const ReviewTables = styled.table`
	width: 100%;
	text-align: left;

	td {
		display: flex;
		justify-content: space-between;
	}
`

const Swatch = styled.div`
	background: ${({ color }) => color};
	width: 20px;
	height: 20px;
	border: 1px solid black;
	border-radius: 50%;
`

const Message = styled.p`
	margin: 0;
	text-align: center;
	font-size: 12px;
	color: gray;
`

const ReviewSettings = ({
	generatorObject,
	generatorObject: {
		imageSettings = null,
		size,
		title,
		bgColor,
		fgColor,
		includeMargin,
	},
	setWidgetStep,
	setLastStep,
}) => {
	return (
		<>
			<section>
				<SectionHeaders>
					<h3>Basic Settings</h3>
					<button
						onClick={() => {
							setLastStep()
							setWidgetStep(0)
						}}
					>
						Edit
					</button>
				</SectionHeaders>
				<ReviewTables>
					<tr>
						<th>Title</th>
						<td>{title || 'No Title Selected'}</td>
					</tr>
					<tr>
						<th>Size</th>
						<td>{size}</td>
					</tr>
					<tr>
						<th>Includes Margin</th>
						<td>{includeMargin ? 'TRUE ' : 'FALSE'}</td>
					</tr>
				</ReviewTables>
			</section>
			<section>
				<SectionHeaders>
					<h3>Branding Settings</h3>
					<button
						onClick={() => {
							setLastStep()
							setWidgetStep(1)
						}}
					>
						Edit
					</button>
				</SectionHeaders>
				<ReviewTables>
					<tr>
						<th>Color</th>
						<td>
							{fgColor}
							<Swatch color={fgColor} />
						</td>
					</tr>
					<tr>
						<th>Background Color</th>
						<td>
							{bgColor}
							<Swatch color={bgColor} />
						</td>
					</tr>
				</ReviewTables>
			</section>
			<section>
				<SectionHeaders>
					<h3>Logo Settings</h3>
					<button
						onClick={() => {
							setLastStep()
							setWidgetStep(2)
						}}
					>
						Edit
					</button>
				</SectionHeaders>
				{imageSettings.src !== 'none' ? (
					<ReviewTables>
						<tr>
							<th>Source</th>
							<td>{imageSettings.src}</td>
						</tr>
						<tr>
							<th>Height</th>
							<td>{imageSettings.height}</td>
						</tr>
						<tr>
							<th>Width</th>
							<td>{imageSettings.width}</td>
						</tr>
					</ReviewTables>
				) : (
					<Message>
						No image details were adjusted, please EDIT to see image details
					</Message>
				)}
			</section>
		</>
	)
}

export default ReviewSettings
