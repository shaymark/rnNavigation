import React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default function DetailsScreen() {
   return (
     <View style={styles.container}>
         <Text style={styles.text}>hello world</Text>
         <Text style={styles.text}>hello world</Text>
     </View>
   )
}

DetailsScreen.navigationOptions = {
  title: 'Detailss',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0ff'
  },
  text: {
    padding: 10,
  }
});
