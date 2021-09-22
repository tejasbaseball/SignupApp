import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login'
import Signup from './Components/Signup'
export default function App() {
  return (
    <View style={styles.container}>
      <Signup/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
