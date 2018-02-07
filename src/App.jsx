import React, {Component} from 'react';
import logo from './logo.svg';
import './App.less';
import NameForm from './Components/NameForm.jsx';
import Reservation from './Components/Reservation.jsx';
import Calculator from './Components/Calculator.jsx';
import WelcomeDialog from './Components/WelcomeDialog.jsx';

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

const Greeting = props => {
  if (props.isLogin) {
    return <div>欢迎回来</div>
  } else {
    return <div>请重新登录。</div>
  }
}

const Mailbox = props => {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length && <h2>
        You have {unreadMessages.length + ' '}
        unread messages.
      </h2>}
    </div>
  );
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

const messages = ['React', '已阅: React', 'Re:Re: React'];

const ListItem = props => <li>{props.value}</li>;

const MessageList = props => <ul style={{
  marginTop: '20px'
}}>{props
    .message
    .map(item => <ListItem key={item} value={item}/>)
}</ul>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      nCount: 1,
      isLogin: false,
      showWarning: false,
      messages
    };

  }

  handleClick = (name, e) => {
    e.preventDefault();
    this.setState(prevState => ({
      nCount: prevState.nCount + 1
    }));
    console.log(name)
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

  handleLogin = () => {
    this.setState(proState => ({
      isLogin: !proState.isLogin
    }))
  }

  handleToggleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return <div>
      <Element/>
      <div className="content">
        <Welcome name="world"/>
        <Clock date={this.state.date}/>
        <Greeting isLogin={this.state.isLogin}/>
        <button onClick={this.handleLogin}>{this.state.isLogin
            ? '注销'
            : '登录'}</button>

        <p>点击了{this.state.nCount}次</p>
        <button onClick={this
          .handleClick
          .bind(this, '传递参数')}>点击一次</button>

        <Mailbox unreadMessages={messages}/>

        <div>
          <WarningBanner warn={this.state.showWarning}/>
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning
              ? '隐藏'
              : '显示'}
          </button>
        </div>

        <MessageList message={this.state.messages}/>

        <NameForm/>
        <Reservation/>

        <Calculator/>

        <WelcomeDialog/>
      </div>
    </div>
  }
}

export default App;