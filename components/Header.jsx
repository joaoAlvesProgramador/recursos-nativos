import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Battery from 'expo-battery';

export default function Header({ title }) {
  const [nivelBateria, setNivelBateria] = useState();

  async function atualizarTudo() {
    await bateria();
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(Math.round(nivel * 100));
  }

  useEffect(() => {
    bateria();
  }, []);


  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor:
            nivelBateria <= 100 && nivelBateria >= 60
              ? '#A610E8'
              : nivelBateria <= 59 && nivelBateria >= 30
              ? '#371ADB'
              : nivelBateria <= 49 && nivelBateria >= 30
              ? 'orange'
              : 'red',
        },
      ]}
    >
      <Text style={styles.headerTextStyle}>{title}</Text>
      <Button color={'#AE0000'} title="Atualizar" onPress={atualizarTudo} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  headerTextStyle: {
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
});
