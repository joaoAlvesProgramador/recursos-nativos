import { TouchableOpacity, View, Text } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as LocalAuthentication from "expo-local-authentication";

export default function Autent() {

    const autenticar = async () => {
        try {
          const disponivel = await LocalAuthentication.hasHardwareAsync();
          if (!disponivel) {
            alert('Autenticação biométrica não disponível');
            return;
          }
    
          const isEnrolled = await LocalAuthentication.isEnrolledAsync();
          if (!isEnrolled) {
            alert('Face ID não está configurado no dispositivo');
            return;
          }
    
          const { success, error } = await LocalAuthentication.authenticateAsync({
            promptMessage: "Use o Face ID para autenticar",
            fallbackLabel: "Use o código PIN",
          });
    
          if (success) {
            alert('Autenticado com sucesso');
          } else {
            if (error.code === 'E_NOT_AVAILABLE') {
              alert('A autenticação biométrica não está disponível no momento.');
            } else if (error.code === 'E_FALLBACK_CANCELLED') {
              alert('O usuário cancelou a autenticação');
            } else if (error.code === 'E_USER_FALLBACK') {
              alert('O usuário escolheu usar um código PIN como alternativa.');
            } else {
              alert('Falha na autenticação: ' + error.message);
            }
          }
        } catch (error) {
          alert('Ocorreu um erro inesperado: ' + error.message);
        }
      };
    

  return (
    <View >
      <Header title="Autentication" />

        <View>
            <TouchableOpacity
                onPress={autenticar}
            >
                <Text>Autenticar</Text>
            </TouchableOpacity>
        </View>

      <Footer />
    </View>
  );
}