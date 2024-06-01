import React, { useEffect, useState } from "react";
import { ScrollView, View, TouchableOpacity, Image, StyleSheet, Text, ImageBackground, Button, Modal } from "react-native";

const RenderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Conteúdo do modal aqui...</Text>
            <Button title="Fechar" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
    );
  };
  