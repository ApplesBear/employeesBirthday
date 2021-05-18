import React from "react";

class Month extends React.Component {
  render() {
    if (this.props.employees.length < 1) return null

    return (
      <div>
        <h2>{this.props.month}</h2>
        <div>{this.props.employees.map(name => <div key={name.id}><span>{name.lastName} {name.firstName}</span> {`\u2014`} {name.dob.slice(8, 10)} {this.props.month}, {name.dob.slice(0, 4)} year</div>)}</div>
      </div>
    )
  }
}

export default Month;