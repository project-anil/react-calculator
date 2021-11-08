import React, { useState } from 'react'

function Setumber() {
    const [name, setName] = useState({ firstName: "", lastName: "" })

    return (
        <div>
            <form>
                <input type="text" value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input type="text" value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })} />
                <h1>my First Name is {name.firstName} </h1>
                <h2>my last Name is {name.lastName} </h2>
            </form>
        </div>
    )
}
export default Setumber