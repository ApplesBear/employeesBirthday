import React from 'react';
import Name from './names.js';

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      mouseover: false,
    };
  }

  activate(x) {
    this.setState({ focus: x });
  }

  mouseover(x) {
    this.setState({ mouseover: x });
  }

  render() {
    const names = this.props.names
      .filter((name) => name.lastName[0] === this.props.letter)
      .sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

    return (
      <div
        onMouseEnter={(event) => {
          this.mouseover(true);
          setTimeout(() => {
            if (this.state.mouseover) this.activate(true);
          }, 350);
          event.currentTarget.scrollIntoView();
        }}
        onMouseLeave={() => {
          this.mouseover(false);
          this.activate(false);
        }}
        id={this.state.focus ? 'selected-letter' : ''}
      >
        <h3>{this.props.letter}</h3>
        <div className={'employees-by-letter'}>
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
