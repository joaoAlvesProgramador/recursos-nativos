import { View, Text, StyleSheet } from "react-native";
import * as Device from "expo-device";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Gyroscope, Magnetometer } from "expo-sensors";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-native-paper";

import * as ScreenOrientation from "expo-screen-orientation";

export default function Sensors() {

  const [giroscopio, setGiroscopio] = useState({});
  const [magnetro, setMagnetro] = useState({}); 

  useEffect(() => {
    Gyroscope.addListener( giroscopioListner);
    Magnetometer.addListener(magnetroListner);
  }, [])

  const giroscopioListner = (data) => {
    setGiroscopio(data)
  }

  const magnetroListner = (data) => {
    setMagnetro(data)
  } 

    
  return (
    <View style={styles.container}>
      <Header title="Informações do Aparelho" />
      <View>
        <Text style={{fontSize :16}}>Giroscópio</Text>
        <Text>x:{giroscopio.x} </Text>
        <Text>y:{giroscopio.y} </Text>
        <Text>z:{giroscopio.z} </Text>

        <Text style={{marginTop:'4%'}}>Magnétômetro</Text>
        <Text>x:{magnetro.x}</Text>
        <Text>y:{magnetro.y}</Text>
        <Text>z:{magnetro.z}</Text>

      </View>

      <View>
        <Text>Posição atual <Button
        buttonColor="#F50000"
        mode="contained"
        style={{ marginTop: 70 }}
        onPress={informar}
      >
        Informar
      </Button> </Text>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      gap: 10
  },
  purpleText:{
    margin:10,
  },
  content: {
      flex: 1,
      gap: 20,
      padding: 20,
      alignSelf: 'center',
  },
  contentTextStyle: {
      padding: 5,
      textAlignVertical: 'center',
      minHeight: 50,
      backgroundColor: '#969',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center'
  },
  footer: {
      backgroundColor: '#888',
      paddingHorizontal: 25,
      padding: 20,
  }
});
