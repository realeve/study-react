import React, {Component} from 'react';

import logo from './logo.svg';

import './App.less';

const Element = () => {
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">这里是一点内容</p>
  </div>;
}

const Welcome = props => <h1>hello {props.name}</h1>;

const Clock = props => {
  return <h2>it is {props
      .date
      .toLocaleString()}.</h2>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      nCount: 1
    };

  }

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({
      nCount: prevState.nCount + 1
    }));
  }

  updateDate() {
    this.setState({date: new Date()});
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateDate(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <div>
      <Element></Element>
      <div className="content">
        <Welcome name="world"></Welcome>
        <Clock date={this.state.date}></Clock>
        <Clock date={this.state.date}></Clock>
        <Clock date={this.state.date}></Clock>
        <p>点击了{this.state.nCount}次</p>
        <button onClick={this.handleClick}>点击一次</button>
      </div>
    </div>
  }
}

export default App;