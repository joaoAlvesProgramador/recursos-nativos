import { Button, StyleSheet, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Button color={'#E30000'} title='Sair' />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#888",
    paddingHorizontal: 25,
    padding: 20,
    marginTop:80,
  },
});
