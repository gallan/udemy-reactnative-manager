import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please login" />
      </Scene>
      <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          initial
          //This works too: renderBackButton={() => (null)}
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"

        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;