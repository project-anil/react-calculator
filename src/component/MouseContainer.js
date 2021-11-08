import React, { useState } from 'react'
import MouseMove from './MouseMove'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>toggle display</button>
            {display && <MouseMove />}
        </div>
    )
}

export default MouseContainer

