import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image, StyleSheet, View } from 'react-native';

const PhotoComp = () => {

    const [pickedUri, setpickedUri] = useState(null);

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permisos de la camara para usar la aplicacion',
                [{ text: 'Ok' }],
            );
            return false;
        }
        return true;
    }

    const handleImage = async () => {
        const isCamera = await verifyPermissions();
        if (!isCamera) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8,
        });

        setpickedUri(image.uri);
        props.onImage(image.uri);
    };

    return (
        <View>
            <View>
                {pickedUri
                    ? <Image source={{ uri: pickedUri }} />
                    : <Text>No hay imagen...</Text>}

            </View>
            <Button
                title="Tomar Foto"
                onPress={handleImage}
            />
        </View>
    )
}

export default PhotoComp

const styles=StyleSheet.create({
    
})