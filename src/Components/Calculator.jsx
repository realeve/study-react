import React, {Component} from 'react';

const BoilingVerdict = props => props.celsius >= 100
  ? <p>水会烧开</p>
  : <p>水不会烧开</p>;

const scaleName = {
  c: '摄氏',
  f: '华氏'
}

const toCelsius = f => (f - 32) * 5 / 9;
const toFahrenheit = c => (c * 9 / 5) + 32;
const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this
      .handleChange
      .bind(this)
  }

  handleChange(event) {
    // this.setState({temperature: event.target.value});
    this
      .props
      .onTemperatureChange(event.target.value)
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset className="margin-top-20 margin-bottom-20">
        <legend>请输入一个{scaleName[scale]}温度</legend>
        <input type="number" value={temperature} onChange ={this.handleChange}/>
      </fieldset>
    );
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this
      .handleCelsiusChange
      .bind(this);
    this.handleFahrenheitChange = this
      .handleFahrenheitChange
      .bind(this);

    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature})
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature})
  }

  render() {

    const scale = this.state.scale;
    const temperature = this.state.temperature;

    const celsius = scale === 'f'
      ? tryConvert(temperature, toCelsius)
      : temperature;
    const fahrenheit = scale === 'c'
      ? tryConvert(temperature, toFahrenheit)
      : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}/>

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}/>

        <BoilingVerdict celsius={celsius}/>
      </div>
    )
  }
}

export default Calculator;