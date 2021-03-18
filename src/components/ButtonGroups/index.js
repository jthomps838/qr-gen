import React from 'react'

export const NavigationButtons = ({downCB, upCB, downText='back', upText='next', downDisabled, upDisabled}) => (
    <>
        <button onClick={downCB} disabled={downDisabled}>
            {downText}
        </button>
        <button onClick={upCB} disabled={upDisabled}>
            {upText}
        </button>
    </>
)