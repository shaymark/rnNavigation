import React, { Component } from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import { _ } from 'lodash';

export default class DetailsScreen extends Component {
  componentDidMount() {
    const { navigation } = this.props.navigation;
    alert(JSON.stringify(this.props.navigation.getParam("a", "defaultValue")));
  }

  state = {
    passwordList: [
      {key: "1", user: "shay@gmail.com", password: "123456", name: "Gmail"},
      {key: "2", user: "shay@Walla.com", password: "123456", name: "Walla"},
      {key: "3", user: "DFSJCKS", password: "123456", name: "bank"},
    ],
    other: [
      {key: "1"},
    ],
  }

  getRandom(){
    var RandomNumber = Math.floor(Math.random() * 1000000) + 1 ;
    return RandomNumber
  }

  addUser(){
    console.log('hello')

    newUser = {key: this.getRandom().toString(), user: "ddddd", password: "123aaaaa4dd56", name: "bddddank"}
    userList = _.cloneDeep(this.state.passwordList)
    //userList = this.state.passwordList
    userList.push(newUser)
    this.setState({passwordList: userList})
  }

  render() {
     return (
       <View style={styles.container}>
           <Text style={styles.text}>hello world</Text>
           <Text style={styles.text}>hello world</Text>
           <Button
           title="add onesss"
           onPress={this.addUser.bind(this)}
           />
           <FlatList
              data={this.state.passwordList}
              renderItem={({item}) => <ItemCompenent item={item}/> }
           />
       </View>
     )
  }

  navigationOptions = {
    title: 'Detailsssssaaa',
  }

}

class ItemCompenent extends Component {
  render() {
     return (
       <View style={styles.container}>
           <Text>{this.props.item.name}</Text>
           <Text>{this.props.item.user}</Text>
           <Text>{this.props.item.password}</Text>
       </View>
     )
  }
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
