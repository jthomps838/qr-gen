import styled from 'styled-components'

export const GeneratorWrapper = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	margin: 50px auto;
	max-width: 800px;
	min-height: 400px;
`

export const CodeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`

export const Warning = styled.p`
	color: red;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
`

export const BackButton = styled.button`
	margin: 50px;
	width: 150px;
	height: 30px;
	font-weight: bold;
	text-transform: uppercase;
`

export const PDFWrapper = styled.section`
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`
