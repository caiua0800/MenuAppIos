import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomNavbar() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>Meu App</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#000',
    left: 0,
    right: 0,
    zIndex: 999, // Para garantir que o navbar fique acima de outros componentes
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 120,
    paddingHorizontal: 20,
    paddingTop: 60
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#2980b9',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
