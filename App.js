import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './src/components/header';
import LandingPage from './src/components/landingPage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/assets/backgroundpicforapp.jpg')} style={styles.container}>
          <LandingPage />
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
