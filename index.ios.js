'use strict';
var React = require('react-native');
var { AppRegistry, StyleSheet, View, Text, NavigatorIOS } = React;

var Movies = require('./Movies')

class NativeTest extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          component: Movies,
          title: 'Movies'
        }}
      />
    )
  }
}

AppRegistry.registerComponent('NativeTest', () => NativeTest);
