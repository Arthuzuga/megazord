import React, {useEffect} from 'react'
import Component from '@megazord/components'
import Theme from "@megazord/styleguide"

const App = () => {
    const {blue, orange} = Theme
    useEffect(() => {
        // console.log(Styleguide)
        console.log({blue})
        console.log({orange})
    },[])

    return (
        <div>
            {Component}
    <div style={{backgroundColor: blue['10'], color: 'black'}}>{blue['10']}</div>
    <div style={{backgroundColor: orange['70'], color: 'white'}}>{orange['70']}</div>
        </div>
    )
}

export default App