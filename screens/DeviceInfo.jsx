import { View, Text, StyleSheet } from "react-native";
import * as Device from "expo-device";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DeviceInfo() {
  return (
    <View style={styles.container}>
      <Header title="Informações do Aparelho" />

      <View style={styles.textBox}>
        <Text style={styles.purpleText}>
          O nome do seu Aparelho é: {Device.osName}
        </Text>

        <Text style={styles.purpleText}>
          A Marca do aparelho é: {Device.brand}
        </Text>

        <Text style={styles.purpleText}>
          O Modelo do aparelho é: {Device.osName}
        </Text>

        <Text style={styles.purpleText}>
          O nome completo do aparelho é: {Device.osName}
        </Text>

        <Text style={styles.purpleText}>
          O Design do aparelho é: {Device.osName}
        </Text>

        <Text style={styles.purpleText}>
          O Ano de lançamento é: {Device.deviceYearClass}
        </Text>

        <Text style={styles.purpleText}>
          A memória do aparelho é: {Device.totalMemory}
        </Text>

        <Text style={styles.purpleText}>
          A Versão do sistema é a: {Device.osVersion}
        </Text>

        <Text style={styles.purpleText}>
          A arquitetura do aparelho é: {Device.osName}
        </Text>
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
    margin:12,
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
