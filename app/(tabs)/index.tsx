import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import LocalPage from '/Users/Caiuã/Desktop/DEV - PATH/ESTUDO/REACT-NATIVE/MyNewExpoProject/components/LocalPage';

export default function App() {

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <LocalPage />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1, 
  },
  container: {
    flex: 1, 
    backgroundColor: '#2C2424',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  }
});
