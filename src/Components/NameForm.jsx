import React, {Component} from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      flavor: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event
        .target
        .value
        .toUpperCase()
    });
  }

  handleSelectChange = event => {
    this.setState({flavor: event.target.value});
  }

  handleSubmit = event => {
    // alert('A name was submitted: ' + this.state.value);
    console.log(this.state.value);
    console.table(this.state)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h3>{this.state.value}</h3>
        </div>
        <label>
          姓名:
          <textarea type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <div>
          <h3>{this.state.flavor}</h3>
        </div>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.flavor} onChange={this.handleSelectChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <button type="submit">提交数据</button>
      </form>
    );
  }
}

export default NameForm;