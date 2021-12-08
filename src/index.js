import store from './Social/redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Social/App';


let rerenderEntireTree = (props) => {
  
  ReactDOM.render(
    <App
      appState={props}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  )
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
/*
const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта'
};

function BoilingVerdict(props) {
  if (props.celcius >= 100) {
    return <p>Вода закипит.</p>;
  }
  return <p>Вода не закипит.</p>;
}
class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
        <input 
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrChange = this.handleFahrChange.bind(this);
    this.state = {temperature : "", scale : "c"};
  }
  handleCelciusChange(temperature){
    this.setState({scale: "c", temperature})
  }

  handleFahrChange(temperature){
    this.setState({scale: "f", temperature})
  }

  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFar) : temperature;

    return (
      <div>
        <TemperatureInput 
          scale="c"
          temperature={celcius}
          onTemperatureChange = {this.handleCelciusChange}
        />
        <TemperatureInput 
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange = {this.handleFahrChange}
          />
        <BoilingVerdict
          celcius={parseFloat(celcius)}
        />
      </div>
    )
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;  
}

function toFar(celcius) {
  return (celcius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

*/

