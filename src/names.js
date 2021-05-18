import React from "react";

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: (localStorage.getItem(this.props.employee.id) ? true : false) };
  }

  activate(x) {
    this.setState({ active: x });
    x ? localStorage.setItem(this.props.employee.id, x) : localStorage.removeItem(this.props.employee.id);
    this.props.onclick();
  }

  render() {
    return (
      <div>
        <h4 className={this.state.active === true ? "active" : ""}>
          {this.props.employee.lastName + " " + this.props.employee.firstName}
        </h4>
        <form>
          <label className={this.state.active === false ? "selected" : ""}>
            <input
              type="radio"
              name="activate"
              value="not-active"
              onClick={() => this.activate(false)}
            />{" "}
            not active
          </label>
          <label className={this.state.active === true ? "selected" : ""}>
            <input
              type="radio"
              name="activate"
              value="active"
              onClick={() => this.activate(true)}
            />{" "}
            active
          </label>
        </form>
      </div>
    );
  }
}

export default Name;