import React, {Component} from 'react';

const FancyBorder = props => {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      <p>这里是子组件内容的内容</p>
      {props.children}
    </div>
  )
}

const Dialog = props => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

class WelcomeDialog extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this
      .handleChange
      .bind(this);

    this.handleSignup = this
      .handleSignup
      .bind(this);

    this.state = {
      login: ''
    }
  }

  render() {
    return (
      <Dialog className="margin-bottom-20" title="欢迎你，小李" message="感谢访问本页面">
        <input value={this.state.login} onChange ={this.handleChange}/>

        <button onClick={this.handleSignup}>登录</button>
      </Dialog>
    )
  }

  handleChange(e) {
    this.setState({login: e.target.value})
  }

  handleSignup() {
    console.log(`welcome aboard,${this.state.login}`)
  }

}

export default WelcomeDialog;