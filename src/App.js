import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  //We can make firebase load in the same file if we like:
  componentWillMount(){
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyA_oSgJdUhViC-iMcRPg60yhPetGG-Mqt0',
      authDomain: 'udemy-managers.firebaseapp.com',
      databaseURL: 'https://udemy-managers.firebaseio.com',
      projectId: 'udemy-managers',
      storageBucket: 'udemy-managers.appspot.com',
      messagingSenderId: '460877269969'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
