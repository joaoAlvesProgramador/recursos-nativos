import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as ScreenOrientation from "expo-screen-orientation";
import { Button } from "react-native";
import { useState } from "react";

async function Default() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
}

async function DeitarDireita() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
  );
}

async function DeitarEsquerda() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
  );
}

async function ForcarNormal() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

async function ForcarInverter() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    );
  }
  
  export default function ScreenOrientationScreen() {
    const [info, setInfo] = useState([]);
    const [headerColor, setHeaderColor] = useState([]);
    
    function informar() {
      setInfo(ScreenOrientation.getOrientationAsync());
    }
    
    return (
      <View style={styles.container}>
      <Header style={styles.title} title="Orientação de Tela" />

      <Button color={'#AE0000'} style={styles.textBtn} title="Padrão" onPress={Default} />
      <Button
        color={'#AE0000'} 
        style={styles.textBtn}
        title="Forçar Deitar Direita"
        onPress={DeitarDireita}
        />
      <Button
        color={'#AE0000'}
        style={styles.textBtn}
        title="Forçar Deitar Esquerda"
        onPress={DeitarEsquerda}
        />
      <Button
        color={'#AE0000'}
        style={styles.textBtn}
        title="Forçar Normal"
        onPress={ForcarNormal}
        />
      <Button
        color={'#AE0000'}
        style={styles.textBtn}
        title="Forçar Inverter"
        onPress={ForcarInverter}
        />
      <Button
        color={'#AE0000'}
        style={styles.textBtn}
        title="Forçar Normal2"
        onPress={ForcarNormal}
      />
      <Button color={'#AE0000'} style={styles.textBtn} title="Informar" onPress={informar} />
      <Text>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },

  title: {
    color: "#fff",
    backgroundColor: "#F50000",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  textBox: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  purpleText: {
    color: "#fff",
    backgroundColor: "#969",
    // textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    width: 230,
    height: 60,
    padding: 10,
  },

  boxBtn: {
    backgroundColor: "#7C7B7E",
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },

  textBtn: {
    backgroundColor: '#4C9BCC',
    paddingVertical: 5,
    paddingHorizontal: 90,
    color: '#fff'
  }
});