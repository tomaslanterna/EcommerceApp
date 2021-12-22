import React, { useEffect,useState } from 'react';
import * as Location from 'expo-location';
import {useRoute,useNavigation} from '@react-navigation/native';
import MapPreView from './MapPreView';
import COLORS from '../constants/colors';
import { Alert, Button, StyleSheet, View } from 'react-native';



const LocationComp = (props) => {
    const navigation=useNavigation();
    const route=useRoute();
    const [pickedLocation, setPickedLocation] = useState(null);

    const verifyPermissions=async()=>{
        const{status}=await Location.requestForegroundPermissionsAsync();

        if(status!=='granted'){
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permisos de la ubicacion para usar la aplicacion',
                [{text:'Ok'}],
            );
            return false;
        }
        return true;
    }

    const handleLocation=async()=>{
        const isLocation=await verifyPermissions();
        const location =await Location.getCurrentPositionAsync({
            timeout:5000,
        });

        const coords={
            lat:location.coords.latitude,
            lng:location.coords.longitude,
        };
        setPickedLocation(coords);
        props.onLocation(coords);
    }

    const mapLocation=route?.params?.mapLocation;

    useEffect(() => {
        if(mapLocation){
            setPickedLocation(mapLocation);
            props.onLocation(mapLocation);
        }
        
    }, [mapLocation])
    return (
        <View>
            <MapPreView location={pickedLocation}>
                <Text>No hay ubicacion...</Text>
            </MapPreView>
            <Button
            title="Obtener Ubicacion"
            onPress={handleLocation}
            />
            <Button
            title="Seleccionar Ubicacion"
            onPress={()=>navigation.navigate('map')}
            />
        </View>
    )
}

export default LocationComp

const styles=StyleSheet.create({
    
})