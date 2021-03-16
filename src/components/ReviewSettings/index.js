import React from 'react'

const ReviewSettings = ({
	generatorObject,
	generatorObject: { imageSettings = null },
	setWidgetStep,
}) => {
	return (
		<>
			<section>
				<h3>Basic Settings</h3>
				<button onClick={() => setWidgetStep(0)}>Edit</button>
			</section>
			<section>
				<h3>Branding Settings</h3>
				<button onClick={() => setWidgetStep(1)}>Edit</button>
			</section>
			<section>
				<h3>Logo Settings</h3>
				<button onClick={() => setWidgetStep(2)}>Edit</button>
			</section>
		</>
	)
}

export default ReviewSettings