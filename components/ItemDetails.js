import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView } from 'react-native';


const width = Dimensions.get("window").width;
const height = 400;
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
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: product.img }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
        </ScrollView>
    )
}

export default ItemDetails

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        margin:0
    },
    image: {
        height: height,
        width: width,
        resizeMode: "contain",
    },
    title:{
        fontSize:15,
        fontWeight:"bold"
    }
});