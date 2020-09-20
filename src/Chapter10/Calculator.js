import React from 'react'
import TemperatureInput from './TemperatureInput'

function BoilingVerdict(props) {
    if (props.celcius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

function toCelcius(fahrenhait) {
    return (fahrenhait - 32) * 5 / 9
}

function toFahrenhait(celcius) {
    return (celcius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ''
    }

    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scale: 'c',
            temperature: ''
        }
    }

    handleCelciusChange = (temperature) => {
        this.setState({ scale: 'c', temperature: temperature })
    }

    handleFahrenhaitChange = (temperature) => {
        this.setState({ scale: 'f', temperature: temperature })
    }

    render() {
        const { scale, temperature } = this.state
        const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenhait) : temperature

        return (
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celcius}
                    onTemperatureChange={this.handleCelciusChange}
                />
                <TemperatureInput
                    scale='c'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenhaitChange}
                />

                <BoilingVerdict
                    celcius={parseFloat(celcius)} />
            </div>
        )
    }
}

export default Calculator