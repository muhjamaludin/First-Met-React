import React from 'react'
import ReactDOM from 'react-dom'

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }

        // this binding is necessary to make 'this' worl in the callback
        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return (
            <buttton onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </buttton>
        )
    }
}

ReactDOM.render(
    <Toggle />, document.getElementById('root')
)

export default Toggle