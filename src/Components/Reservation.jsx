import React, {Component} from 'react';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      marginTop20: {
        marginTop: '20px'
      }
    };

  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;

    this.setState({[name]: value});

    if (target.type === 'number') {
      this.setState({
        marginTop20: {
          marginTop: value + '0px'
        }
      })
    }
  }

  render() {
    return (
      <div style={this.state.marginTop20}>
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}/>
          </label>
        </form>
      </div>
    );
  }
}

export default Reservation;