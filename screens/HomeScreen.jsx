import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BatteryInfo from "./BatteryInfo";
import DeviceInfo from "./DeviceInfo";
import MyScreenOrientation from "./MyScreenOrientation";
import Notify from "./Notify";
import IndexScreen from "./IndexScreen";
import ContactInfo from "./ContactsInfo";
import Sensors from "./Sensors";
import Autent from "./Autent";
import CaptureSrc from "./Capture";
import CameraInfo from "./CameraInfo";

const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator barStyle={{backgroundColor:'#f50000'}}>
        <Stack.Screen name="Contato" component={ContactInfo} />
        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="Notificação" component={Notify} />
        <Stack.Screen name="Bateria" component={BatteryInfo} />
        <Stack.Screen name="Device" component={DeviceInfo} />
        <Stack.Screen name="Orientação" component={MyScreenOrientation} />
        <Stack.Screen name="S" component={Sensors} />
        <Stack.Screen name="A" component={Autent} />
        <Stack.Screen name="C" component={CaptureSrc} />
        <Stack.Screen name="ci" component={CameraInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}