import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesGet } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesGet();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    ///nextProps are the next set of props this component
    // will be rendered with.
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }
  render() {
    console.log(this.props);
    return (
      <ListView
        emableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  //need to convert the object of employess to an array because ListView doesn't
  //understand objects:
  //state.employees is the object, run the fat arrow functiomn
  // val: name, shift, phone
  // create new object and add id
  // collect and put into array called "employees"
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesGet })(EmployeeList);
