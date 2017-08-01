//Import libraries for making component
import React from 'react';
import { Text, View } from 'react-native';

//Make component
const Header = (props) => {
  //Destructuring for textStyle
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#3366ff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    marginBottom: 20, // shadow doesn't work for some https://stackoverflow.com/questions/29323544/how-do-i-render-a-shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30,
    color: '#fff'
  }
};
//export component? make available for other parts of the app.
export default Header;
