import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MAP } from '../constants/map';

const MapPreView = (props) => {

    const mapPreviewUrl = props.location
        ? `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:L%7C${props.location.lat},${props.location.lng}
&key=${MAP.API_KEY}`
        : '';

    return (
        <View>
            {props.location 
            ? <Image style={styles.mapImage} source={{uri:mapPreviewUrl}}/>
        :(props.children)}
        </View>
    )
}

export default MapPreView

const styles = StyleSheet.create({
mapPreview:{
    justifyContent: 'center',
    alignItems: 'center',
},
mapImage:{
    width: '100%',
    height: '100%',
}
})