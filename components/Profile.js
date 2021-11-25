import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.data}>Hola usuario</Text>
            <Image
                source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_219983&psig=AOvVaw1Qe3WoFOhx5jIH8o14b_Gz&ust=1637894195324000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOC_qL-9svQCFQAAAAAdAAAAABAP' }}
                style={styles.image}
            />
            <Text style={styles.data}>Nombre y Apellido</Text>
            <Text style={styles.data}>Direccion</Text>
            <Text style={styles.data}>Correo</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        alignItems:"center",
        height:500,
        justifyContent:"center"
    },
    image: {
        height: 250,
        resizeMode: "contain",
    },
    data:{
        fontSize:40,
        fontWeight: "bold",
    }
});