import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const CartItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.product}>
                <Image style={styles.img}/>
                <Text style={styles.title}></Text>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 3,
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "flex-start",
    },
    product: {
        padding: 10
    },
    img: {
        height: 100,
        resizeMode: "contain",
    },
    title: {
        marginTop: 15,
        fontSize: 18,
    }
})