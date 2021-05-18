import Employees from './employees';
import Birthday from './birthday';
import './mainStructure.css';
import React from 'react';

class MainStructure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      activeEmployees: []
    };
    this.renderBirthday = this.renderBirthday.bind(this);
  }

  async componentDidMount() {
    const names = await fetch(
      "https://yalantis-react-school-api.yalantis.com/api/task0/users"
    )
      .then((response) => response.json())
      .catch((err) => alert(err));
    this.setState({ employees: names });
    this.renderBirthday();
  }

  renderBirthday() {
    let activeNames = this.state.employees.filter(employee => {
      if (localStorage.getItem(employee.id))  return true 
      return false
    }).sort((a, b) => a.lastName > b.lastName ? 1 : -1);;
    this.setState({activeEmployees: activeNames})
  }

  render() {
    return (
      <div>
        <header><h2>Test task for Yalantis React.js School</h2></header>
        <div className='main-container'>
          <section className='left-side'>
            <h1>Employees</h1>
            <Employees employees={this.state.employees} onclick={this.renderBirthday}/>
          </section>
          <section className='right-side'>
            <h1>Employees birthday</h1>
            <Birthday employees={this.state.activeEmployees}/>
          </section>
        </div>
      </div>
    )
  }
}

export default MainStructure;