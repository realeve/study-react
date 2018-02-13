import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.less";
import NameForm from "./Components/NameForm.jsx";
import Reservation from "./Components/Reservation.jsx";
import Calculator from "./Components/Calculator.jsx";
import WelcomeDialog from "./Components/WelcomeDialog.jsx";
import ComponentFormat from "./Components/ComponentFormat";

const Element = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">这里是一点内容</p>
    </div>
  );
};

const Welcome = props => <h1>hello {props.name}</h1>;

const Clock = props => {
  return <h2>it is {props.date.toLocaleString()}.</h2>;
};

const Greeting = props => {
  if (props.isLogin) {
    return <div>欢迎回来</div>;
  } else {
    return <div>请重新登录。</div>;
  }
};

const Mailbox = props => {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length && (
        <h2>
          You have {unreadMessages.length + " "}
          unread messages.
        </h2>
      )}
    </div>
  );
};

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}

const messages = ["React", "已阅: React", "Re:Re: React"];

const ListItem = props => <li>{props.value}</li>;

const MessageList = props => (
  <ul
    style={{
      marginTop: "20px"
    }}
  >
    {props.message.map(item => <ListItem key={item} value={item} />)}
  </ul>
);

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {index => (
        <div key={index}>
          This is item {index}
          in the list
        </div>
      )}
    </Repeat>
  );
}

class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  render() {
    return (
      <button
        color={this.props.color}
        onClick={() =>
          this.setState(state => ({
            count: state.count + 1
          }))
        }
      >
        Count: {this.state.count}
      </button>
    );
  }
}

const tableData = {
  header: ["编号", "姓名", "年龄"],
  data: [[1, "zhangsan", 21], [2, "李四", 32], [3, "王五", 24]]
};

const RThead = props => (
  <thead>
    <tr>{props.header.map(item => <th key={item}>{item}</th>)}</tr>
  </thead>
);

const RTr = props => <tr>{props.tr.map(td => <td key={td}>{td}</td>)}</tr>;

const RTbody = props => (
  <tbody>{props.data.map(tr => <RTr tr={tr} key={tr[0]} />)}</tbody>
);

const RTable = () => (
  <table>
    <RThead header={tableData.header} />
    <RTbody data={tableData.data} />
  </table>
);

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
    console.log(name);
  };

  updateDate() {
    this.setState({ date: new Date() });
  }

  componentWillMount() {
    console.log("APP组件准备开始加载");
  }

  componentDidMount() {
    console.log("APP组件加载完毕");
    this.timerID = setInterval(() => this.updateDate(), 1000);
  }

  componentWillUnmount() {
    console.log("APP组件卸载");
    clearInterval(this.timerID);
  }

  handleLogin = () => {
    this.setState(proState => ({
      isLogin: !proState.isLogin
    }));
  };

  handleToggleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Element />
        <div
          className="content"
          style={{
            marginBottom: "40px"
          }}
        >
          <Welcome name="world" />
          <Clock date={this.state.date} />
          <Greeting isLogin={this.state.isLogin} />
          <button onClick={this.handleLogin}>
            {this.state.isLogin ? "注销" : "登录"}
          </button>

          <p>点击了{this.state.nCount}次</p>
          <button onClick={this.handleClick.bind(this, "传递参数")}>
            点击一次
          </button>

          <Mailbox unreadMessages={messages} />

          <div>
            <WarningBanner warn={this.state.showWarning} />
            <button onClick={this.handleToggleClick}>
              {this.state.showWarning ? "隐藏" : "显示"}
            </button>
          </div>

          <MessageList message={this.state.messages} />

          <NameForm />
          <Reservation />

          <Calculator />

          <WelcomeDialog />
          <ListOfTenThings />

          <CounterButton color="red" />

          <RTable />
          <ComponentFormat />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
