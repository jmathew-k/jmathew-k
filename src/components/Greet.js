


import React from 'react'

const Greet = ({name, heroName}) => {

    return (
        <div>
            <h1>
                Hello {name} aka {heroName}
            </h1>
            
        </div>
    )
}

export default Greet


// Alternate method:1 to de-structure props using functions

/* const Greet1 = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} aka {heroName}
            </h1>
        </div>
    )
}

export default Greet


// Alternate method:2 to de-structure props using class components


class Greet2 extends Component {
    render() {
        const {name,heroName} = this.props
        // if you need to de-structure state
        const {state1, state2} = this.state
        return (
            <h1>
                Hello {name} aka {heroName}
            </h1>
        )
    }
}

*/