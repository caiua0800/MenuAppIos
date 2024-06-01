import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity, Image, StyleSheet, Text, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Item from "./Item";

const LocalPage = () => {
  const logoImg = 'https://th.bing.com/th/id/OIP.TMBfPNCppuMxNooOJktxvQHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7';
  const headerImg = 'https://thegavoice.com/wp-content/uploads/2014/08/mexican-food-2462.jpg';
  const clock = 'https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/clock-two-svgrepo-com%20(1).png?alt=media&token=99ed7d46-88b5-49d5-bbac-2ee7b356f44a';
  const deliveryIcon = 'https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/delivery-scooter-svgrepo-com.png?alt=media&token=6280724d-94e3-465b-a5aa-0f399e566c97';
  const infoImg = 'https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/info-circle-svgrepo-com.png?alt=media&token=dbeca3b8-6842-4c09-ae99-ad8d32dc119c';
  const valorFreteImg = 'https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/money-svgrepo-com.png?alt=media&token=47b742c1-e300-43d9-abd3-9d576f5e35d8';

  const [activeButton, setActiveButton] = useState('TODOS');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const estatico_img = 'https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/taco-chilli.jpeg?alt=media&token=80f73db3-c335-47da-befc-c499ba5bb367';

  const TACOS = [
    {
      Nome: 'Taco Chilli',
      Desc: 'Chilli, Pimenta Moderada, Curry, Tomates, Cheader, Bacon',
      Valor: 'R$43,99',
      Img: estatico_img,
    },
    {
      Nome: 'Taco Chilli',
      Desc: 'Chilli, Pimenta Moderada, Curry, Tomates, Cheader, Bacon',
      Valor: 'R$43,99',
      Img: estatico_img,
    },
    {
      Nome: 'Taco Chilli',
      Desc: 'Chilli, Pimenta Moderada, Curry, Tomates, Cheader, Bacon',
      Valor: 'R$43,99',
      Img: estatico_img,
    },
    {
      Nome: 'Taco Chilli',
      Desc: 'Chilli, Pimenta Moderada, Curry, Tomates, Cheader, Bacon',
      Valor: 'R$43,99',
      Img: estatico_img,
    },
  ]

  const BURRITOS = [
    {
      Nome: 'Burrito Chilli',
      Desc: 'Chilli, Pimenta Moderada, Curry, Tomates, Cheader, Bacon',
      Valor: 'R$43,99',
      Img: estatico_img,
    },
    {
      Nome: 'Burrito Chilli',
      Desc: 'Chilli, Pimenta Moderada, Curry, Tomates, Cheader, Bacon',
      Valor: 'R$43,99',
      Img: estatico_img,
    },
    {
      Nome: 'Burrito Chilli',
      Desc: 'Chilli, Pimenta Moderada, Curry, Tomates, Cheader, Bacon',
      Valor: 'R$43,99',
      Img: estatico_img,
    },
    {
      Nome: 'Burrito Chilli',
      Desc: 'Chilli, Pimenta Moderada, Curry, Tomates, Cheader, Bacon',
      Valor: 'R$43,99',
      Img: estatico_img,
    },
  ]

  const TODOS = [...TACOS, ...BURRITOS];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal={false}>
      <View style={styles.localPage}>
        <View style={styles.header}>
          <ImageBackground source={{ uri: headerImg }} style={styles.headerImg} >
            <Image source={{ uri: logoImg }} style={styles.logoImg} />
          </ImageBackground>
        </View>
        <View style={styles.localPrincipalInfo}>
          <Text style={styles.title}>Habanero</Text>
          <View style={styles.localInfosHeader}>
            <Image source={{ uri: clock }} style={styles.icons}></Image>
            <Text style={styles.bottomTextsTitle}>aberto</Text>
          </View>

          <View style={styles.localInfosHeader}>
            <Image source={{ uri: infoImg }} style={[styles.icons, styles.infoIcon]}></Image>
            <Text style={styles.bottomTextsTitle}>Ver mais</Text>
          </View>

          <View style={styles.localInfosHeader}>
            <Image source={{ uri: deliveryIcon }} ></Image>
            <Text style={styles.bottomTextsTitle}>Entrega Grátis a partir de R$59,00</Text>
          </View>
        </View>


        <View style={styles.localInfosHeader}>
          <Text style={[styles.bottomTextsTitle, styles.MoneyLink]}>Valor da Entrega</Text>
        </View>

        <View style={styles.menuNav}>
          <View style={styles.menuNavButtons}>
            <TouchableOpacity style={[styles.button, activeButton === "TODOS" && styles.activeButton]} onPress={() => handleButtonClick("TODOS")} >
              <Text style={styles.buttonText}>TODOS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, activeButton === "TACOS" && styles.activeButton]} onPress={() => handleButtonClick("TACOS")}>
              <Text style={styles.buttonText}>TACOS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, activeButton === "BURRITOS" && styles.activeButton]} onPress={() => handleButtonClick("BURRITOS")}>
              <Text style={styles.buttonText}>BURRITOS</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuItems}>
            <LinearGradient colors={['#2C2424', 'green']} style={[styles.Gradient, { flexGrow: 1 }]} start={[0, 0]} end={[0, 1]}>
              {activeButton === "TODOS" && TODOS.map((item, index) => (
                <Item
                  key={index}
                  Nome={item.Nome}
                  Desc={item.Desc}
                  Valor={item.Valor}
                  Img={item.Img}
                />
              ))}
              {activeButton === "TACOS" && TACOS.map((taco, index) => (
                <Item
                  key={index}
                  Nome={taco.Nome}
                  Desc={taco.Desc}
                  Valor={taco.Valor}
                  Img={taco.Img}
                />
              ))}
              {activeButton === "BURRITOS" && BURRITOS.map((burrito, index) => (
                <Item
                  key={index}
                  Nome={burrito.Nome}
                  Desc={burrito.Desc}
                  Valor={burrito.Valor}
                  Img={burrito.Img}
                />
              ))} 
            </LinearGradient>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  localPage: {
    height: 'auto',
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  header: {
    height: 'auto',
    paddingTop: 80,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImg: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  localPrincipalInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textShadowColor: 'rgba(62, 249, 174, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  localInfosHeader: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 2
  },
  icons: {
    width: 20,
    height: 20
  },
  infoIcon: {
    width: 18,
    height: 18
  },
  MoneyLink: {
    textDecorationLine: 'underline'
  },
  MoneyIcon: {
    width: 22,
    height: 22
  },
  bottomTextsTitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 255, 255, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  }, menuNav: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50
  },
  menuNavButtons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingHorizontal: 10
  },
  button: {
    width: '32%',
    height: 45,
    backgroundColor: '#4C9900',
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(58, 112, 4, 0.9)',
    borderWidth: 3
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  activeButton: {
    backgroundColor: '#336600',
  },
  Gradient: {
    padding: 20,
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuItems: {
    marginTop: 20,
  },
});

export default LocalPage;
