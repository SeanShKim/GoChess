import React, { Component } from 'react'

import WithMoveValidation from './WithMoveValidation'

class Chess extends Component {
    render() {
        return (
            <div>
                <div style={boardsContainer}>
                    <WithMoveValidation />
                </div>
            </div>
        )
    }
}

export default Chess

const boardsContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 30,
    marginBottom: 50,
}
