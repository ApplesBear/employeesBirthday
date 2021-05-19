import React from 'react';
import Letter from './letter.js';

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabet: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ],
    };
  }

  render() {
    return (
      <div className="employees">
        {this.state.alphabet.map((x) => (
          <Letter
            letter={x}
            key={x}
            names={this.props.employees}
            onclick={this.props.onclick}
          />
        ))}
      </div>
    );
  }
}

export default Employees;
