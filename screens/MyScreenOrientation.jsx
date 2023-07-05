import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as ScreenOrientation from "expo-screen-orientation";

export default function MyScreenOrientationScreen() {
  const [cor, setCor] = useState("#fff");
  const [infoUwU, setInfoUwU] = useState("");

  useEffect(() => {
    // Get the initial orientation when the component mounts
    informar();
  }, []);

  async function Default() {
    await ScreenOrientation.unlockAsync();
    setCor("#000");
  }

  async function DeitarDireita() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    setCor("#107361");
  }

  async function DeitarEsquerda() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
    setCor("#1D7373");
  }

  async function ForcarNormal() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
    setCor("#0F5959");
  }

  async function ForcarInverter() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    );
    setCor("#0A3A40");
  }

  async function informar() {
    const orientation = await ScreenOrientation.getOrientationAsync();
    setInfoUwU(orientation);
  }

  return (
    <View style={[{height:'100%', backgroundColor: cor }]}>
      <Header title="Orientação de Tela" />
    
      <Button
        buttonColor="#F50000"
        mode="contained"
        style={{ margin: 20 }}
        title="Padrão"
        onPress={Default}
      >
        Padrão
      </Button>
      <Button
        mode="contained"
        buttonColor="#F50000"
        style={{ margin: 20 }}
        onPress={DeitarDireita}
      >
        Forçar Deitar Direita
      </Button>

      <Button
        mode="contained"
        buttonColor="#F50000"
        style={{ margin: 20 }}
        title="Forçar Deitar Esquerda"
        onPress={DeitarEsquerda}
      >
        Forçar Deitar Esquerda
      </Button>
      <Button
        buttonColor="#F50000"
        mode="contained"
        style={{ margin: 20 }}
        title="Forçar Normal"
        onPress={ForcarNormal}
      >
        Forçar Normal
      </Button>
      <Button
        mode="contained"
        buttonColor="#F50000"
        style={{ margin: 20 }}
        title="Forçar Inverter"
        onPress={ForcarInverter}
      >
        Forçar Inverter
      </Button>

      <Button
        buttonColor="#F50000"
        mode="contained"
        style={{ margin: 20 }}
        onPress={informar}
      >
        Informar
      </Button>
    </View>
  );
}
