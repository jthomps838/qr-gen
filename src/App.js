import CodeGenerator from './components/QRCode'
import styled from 'styled-components'

const AppWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
`

function App() {
	return (
		<AppWrapper>
			<h1>QR Code Generator</h1>
			<CodeGenerator />
		</AppWrapper>
	)
}

export default App
