import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native'

export default class LandingPage extends Component {
    constructor(props) {
    super(props);
    this.state = {name: '', email: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 100, width: 200}}
          placeholder="Enter name here"
          onChangeText={(name) => this.setState({name})}
        />
         <TextInput
          style={{height: 100, width: 200}}
          placeholder="Enter email here"
          onChangeText={(email) => this.setState({email})}
        />
        <Text style={{padding: 10, fontSize: 16}}>
          {this.state.name}
        </Text>
        <Text style={{padding: 10, fontSize: 16}}>
          {this.state.email}
        </Text>
      </View>
    );
  }
}