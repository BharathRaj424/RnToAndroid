import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules,
  TouchableOpacity
} from 'react-native';

const Navigation = NativeModules.NavigationModule
console.log(Navigation)
console.log(NativeModules)

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>React Native Screen 1</Text>
        <TouchableOpacity style={{ backgroundColor: '#31CDE5', width: '50%', height: '6%', alignSelf: 'center',justifyContent:"center"}}
          onPress={() => Navigation.navigateToNative()}>
          <Text style={{ color: '#ffffff', textAlign: 'center',fontWeight:'bold' }}>Go to native page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent(
  'MainScreen', // Name of the component for the Android side to pick up
  () => MainScreen
);