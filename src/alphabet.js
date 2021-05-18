import React from 'react';
import Name from './names.js';

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  activate(x) {
    this.setState({ focus: x }, this.setRef);
  }

  render() {
    const names = this.props.names
      .filter((name) => name.lastName[0] === this.props.letter)
      .sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

    return (
      <div
        onClick={(event) => {
          this.activate(true);
          event.currentTarget.scrollIntoView();
        }}
        onMouseLeave={() => this.activate(false)}
        id={this.state.focus ? 'selected-letter' : ''}
      >
        <h3>{this.props.letter}</h3>
        <div
          className={this.props.letter + ' employees-by-letter'}
          ref={this.target}
        >
          {names.length > 0 ? (
            names.map((name) => (
              <Name
                key={name.id}
                employee={name}
                onclick={this.props.onclick}
              />
            ))
          ) : (
            <p>___</p>
          )}
        </div>
      </div>
    );
  }
}

export default Letter;
