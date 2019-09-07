import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { withNavigation } from 'react-navigation';

class Homescreen extends Component {

    state = { isShowingText: true };

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
          title="hide show title"
          onPress={() => this.setState({ isShowingText: !this.state.isShowingText })}
          />
          <Button
          title="show navigation object"
          onPress={() => alert(JSON.stringify(this.props.navigation))}
          />
      </View>



    )
  }
}

export default withNavigation(Homescreen);
