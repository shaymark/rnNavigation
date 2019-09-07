import React, { Component } from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class DetailsScreen extends Component {
  componentDidMount() {
    const { navigation } = this.props.navigation;
    alert(JSON.stringify(this.props.navigation.getParam("a", "defaultValue")));
  }

  render() {
     return (
       <View style={this.styles.container}>
           <Text style={this.styles.text}>hello world</Text>
           <Text style={this.styles.text}>hello world</Text>
       </View>
     )
  }

  navigationOptions = {
    title: 'Detailsssssaaa',
  }


   styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#0ff'
    },
    text: {
      padding: 10,
    }
  })
}
