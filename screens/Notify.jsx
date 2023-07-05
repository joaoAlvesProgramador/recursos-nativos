import { View, Text, StyleSheet, Alert } from "react-native";
import {  Button, } from "react-native-paper";
import Header from "../components/Header";
import * as Notifications from "expo-notifications";
import * as Battery from "expo-battery";
import * as Device  from "expo-device";
import { useEffect, useState } from "react";
import BatteryInfo from "./BatteryInfo";

export default function Notify({navigation}) {
  const [expoToken, setExpoToken] = useState();
  const [battery, setBattery] = useState();

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setBattery(Math.round(nivel * 100));
  }

  async function notificarExpo() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Notificação",
        subtitle: "Trabalho",
        body: "Bom dia senhor ....",
      },
      trigger: { seconds: 1 },
    });
    setExpoToken(token);
  }

  async function notificarExpoBattery() {
    await bateria();
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bateria",
        subtitle: "Subtitle",
        body: "Nivel é: " + battery +"%",
      },
      trigger: { seconds: 1 },
    });
    setExpoToken(token);
  }

  async function notificarExpoDeviceName() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Nome do Aparelho",
        subtitle: "Subtitle",
        body: "Nome do aparelho " + Device.osName,
      },
      trigger: { seconds: 1 },
    });
    setExpoToken(token);
  }

  const ultimaNotificacao = Notifications.useLastNotificationResponse();

  async function exibirAlerta(){
        alert(ultimaNotificacao)
        console.log(ultimaNotificacao)
    }

  useEffect(() => {
    exibirAlerta ()
  }, [ultimaNotificacao])

  
  async function lerNotificacao(){
    const exemplo = await Notifications.getLastNotificationResponseAsync();
    // alert(exemplo)
    alert('Notificação', exemplo.notification.request.identifier)
  }
  
  async function lerNotificacaoN(){
    const exemplo = await Notifications.getPresentedNotificationsAsync();
  }

  async function irParaOutraTela() {
    const exemplo = await Notifications.getLastNotificationResponseAsync();

    if(exemplo.notification.request.identifier == expoToken) {
      navigation.navigate(BatteryInfo)
    } else {
      alert("Notificação Errada");
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Notificação" />

      <View style={{
        gap: 15,
        paddingTop:100,
      }}>
        <Text style={styles.Text}>Expo Token: {expoToken} </Text>
        
        <Button
          buttonColor='#AE0000'
          mode='contained'
          onPress={async () => await notificarExpo()}
          >
            Enviar Notificação
          </Button>

        <Button 
          buttonColor='#AE0000' 
          mode='contained'
          onPress={ async() => lerNotificacao() } 
          >
            Ler ultima notificação clicada
          </Button>

        <Button 
          buttonColor='#AE0000' 
          mode="contained" 
          >
            Ler notificações não clicadas
          </Button>

        <Button 
          buttonColor='#AE0000' 
          mode='contained' 
          onPress={async () => notificarExpoBattery()} 
          > Mostrar Bateria</Button>

        <Button 
          buttonColor='#AE0000'  
          mode='contained'
          onPress={async () => notificarExpoDeviceName()} 
          >
            Nome do aparelho
          </Button>

        <Button 
          buttonColor='#AE0000' 
          mode='contained' 
          onPress={async () => irParaOutraTela()} 
        >
          Ir para outra tela
        </Button>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  content: {
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: "center",
  },
  contentTextStyle: {
    padding: 5,
    textAlignVertical: "center",
    minHeight: 50,
    backgroundColor: "#969",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#888",
    paddingHorizontal: 25,
    padding: 20,
  },
  Text:{
    fontWeight:'bold',
    fontSize:25,
  },
});

// </Button>