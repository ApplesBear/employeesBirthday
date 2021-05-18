import React from 'react';
import Month from './month.js';
import './birthday.css';

class Birthday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [
        ['January', '01'],
        ['February', '02'],
        ['March', '03'],
        ['April', '04'],
        ['May', '05'],
        ['June', '06'],
        ['July', '07'],
        ['August', '08'],
        ['September', '09'],
        ['October', '10'],
        ['November', '11'],
        ['December', '12'],
      ],
      names: [],
    };
  }

  componentDidMount() {
    let date = new Date();
    let slice = this.state.months.splice(0, date.getMonth());
    this.state.months.push(...slice);
  }

  render() {
    if (this.props.employees.length < 1)
      return <h2>Employees List is empty</h2>;

    return (
      <div className="birthday-months">
        {this.state.months.map((month) => (
          <Month
            key={month[1]}
            month={month[0]}
            employees={this.props.employees.filter((name) => {
              if (name.dob.slice(5, 7) === month[1]) return true;
              return false;
            })}
          />
        ))}
      </div>
    );
  }
}

export default Birthday;
