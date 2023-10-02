import { View, Text, StyleSheet } from "react-native";
import * as Device from "expo-device";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { Camera } from 'expo-camera'

export default function CameraInfo() {

  const[ hasPermission, setHasPermission ]= useState(null)
  const[ cameraRef, setCameraRef ] = useState(null)
  const [type ,setType] = useState(Camera.Constants.Type.back)



  useEffect(() => {
    (async () => {
      const {} = Camera.requestCameraPermissionsAsync()
    })();
  }, [])






  if(hasPermission == null){
    return( <View />)
  }
  if(hasPermission == false){
    return( <Text>Sem acesso a camera</Text>)
  }

  return (
    <View style={styles.container}>
      <Header title="Camera" />

      <View>
        <Camera 
          ref={(ref) => setCameraRef(ref)}
          type={type}
          ratio="4:3"
          zoom={0}
        />
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
