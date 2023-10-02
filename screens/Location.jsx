import { View, StyleSheet, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

export default function LocationScreen() {

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if(status !== 'granted') {
        console.log('nao tem permissao')
        return
      }

      let info = await Location.getCurrentPositionAsync({})
      console.log(info)
      setLocation(info)

    })()
  },[])

  return (
    <View>
      <Header
        title="Localização"
      />

      <View>
        <Text>
          Latitude: {location?.coords.latitude}, Longitude : {location?.coords.longitude}
        </Text>
      </View>

      <Footer />
    </View>
  )
};

const styles = StyleSheet.create({
  Text:{
    paddingTop:200,
    paddingBottom:100,
    paddingLeft:180,
  }
})
