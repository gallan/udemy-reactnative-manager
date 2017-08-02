import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class EmployeeListItem extends Component {
  onEmployeePress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onEmployeePress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.employeeTitleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  employeeTitleStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default EmployeeListItem;
