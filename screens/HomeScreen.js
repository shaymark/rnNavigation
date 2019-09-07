import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import DialogInput from 'react-native-dialog-input';
import {AsyncStorage} from 'react-native';

class Homescreen extends Component {

    state = {
      isShowingText: false ,
      isDialogVisible: false,
    };

    componentDidMount() {
      const { navigation } = this.props;
      this.focusListener = navigation.addListener('didFocus', () => {
        // The screen is focused
        // Call any action
        if(global.enterPassword != true){
            //this.state.isDialogVisible = true
        } else {
            //this.state.isDialogVisible = false
        }
      });
    }

    componentWillUnmount() {
      // Remove the event listener
      this.focusListener.remove();
    }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {
            this.state.isShowingText ? <Text is>Home Screen</Text> : null
          }
          <Button
          title="Go to Links"
          onPress={() => this.props.navigation.navigate('Links')}
          />
          <Button
          title="Go to Details s"
          onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
          title="Go to Details s with passwords"
          onPress={() => this.navigateToDetails()}
          />

          <Button
          title="hide show title"
          onPress={() => this.setState({ isShowingText: !this.state.isShowingText })}
          />
          <Button
          title="show dialog"
          onPress={() => this.setState({ isDialogVisible: true })}
          />
          <Button
          title="show navigation object"
          onPress={() => alert(JSON.stringify(this.props.navigation))}
          />
          <Button
          title="store objectsss"
          onPress={() => this.storeObject({a: "a"})}
          />
          <Button
          title="restore objectsss"
          onPress={() => this.retrieveObject()}
          />
          <Button
          title="store data"
          onPress={() => this._storeData()}
          />
          <Button
          title="get data"
          onPress={() => this._retrieveData()}
          />
          <DialogInput isDialogVisible={this.state.isDialogVisible}
            title={"DialogInput 1"}
            message={"Message for DialogInput #1"}
            hintInput ={"HINT INPUT"}
            submitInput={ (inputText) => {this.sendInput(inputText)} }
            closeDialog={ () => {this.showDialog(false)}}>
          </DialogInput>
      </View>
    )
  }

  showDialog(isVisable){
    this.setState({
      isDialogVisible: isVisable,
    })
  }

  sendInput(inputText){
    this.checkPassword(inputText)
  }

  checkPassword(password){
    if(password == '1234') {
      this.showDialog(false)
    } else {
      alert('wrong password')
    }
  }

  async navigateToDetails(){
    const passwords = await this.retrieveObject()
    this.props.navigation.navigate('Details', passwords)
  }

  async storeObject(ob) {
      try {
        await AsyncStorage.setItem('Passwords', JSON.stringify(ob));
        alert('succed')
      } catch (error) {
        alert(error)
      }
  }

   async retrieveObject() {
    try {
      const value = await AsyncStorage.getItem('Passwords');
      if (value !== null) {
        // We have data!!
        passwords = JSON.parse(value)
        console.log(passwords);
        return passwords
      }
    } catch (error) {
      // Error retrieving data
      return error
    }
  };

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('TASKS', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        // We have data!!
        alert(value)
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };




}

export default withNavigation(Homescreen);
