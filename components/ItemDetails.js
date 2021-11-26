import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const ItemDetails = ({ product }) => {

    

    /* useEffect(() => {
         setProduct({
             title: route.params.name,
             id: route.params.itemId,
             desc: route.params.description,
             img: route.params.image,
             price: route.params.price,
             stock: route.params.stock
         });
 
     }, [])*/

    return (
        <View>
            <View style={styles.container}>
                <Text>{product.title}</Text>
                <Text>{product.id}</Text>
                <Text>Hola</Text>
                <Image source={{ uri: product.img }} style={StyleSheet.image} />
            </View>

        </View>
    )
}

export default ItemDetails

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        margin: 100
    },
    image: {
        height: 150,
        resizeMode: "contain",
    },
});