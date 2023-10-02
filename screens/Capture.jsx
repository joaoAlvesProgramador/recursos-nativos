import { useEffect } from 'react';
import { View } from "react-native";
import Header from "../components/Header";
import { Button } from "react-native";
import * as ScreenCapture from 'expo-screen-capture';
import * as MediaLibrary from 'expo-media-library';

export default function CaptureSrc() {

    useEffect(() => {
        if (hasPermissions()) {
            const subscription = ScreenCapture.addScreenshotListener(() => {
                alert('Print tirada');
            });
            return () => subscription.remove();
        }
    }, []);

    const hasPermissions = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        return status === 'granted';
    };

    const deactivate = async () => {
        await ScreenCapture.preventScreenCaptureAsync();
    };

    const activate = async () => {
        await ScreenCapture.allowScreenCaptureAsync();
    };

    return (
        <View >
            <Header title="CAPTURA DE TELA" />
            <Button
                onPress={activate}
                title="Ativar"
            />
            <Button
                title="Desativar"
                onPress={deactivate}
            />
        </View>
    )
}