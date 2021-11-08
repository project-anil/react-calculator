import React, { useEffect, useState } from 'react'

function UseEffectExample() {
    const [name, setName] = useState("")


    useEffect(() => {
        document.title = `Greetings to ${name}`;
    }, [name]);

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default UseEffectExample
