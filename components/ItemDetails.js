import React, { useState, useEffect } from 'react';
import { StyleSheet, View,Text } from 'react-native'

const ItemDetails = ({ route }) => {

    const [product, setProduct] = useState({
        title:'',
        id:0,
        desc:'',
        img:'',
        price:0,
        stock:0
    });

    useEffect(() => {
        setProduct({
            title: route.name,
            id: route.itemId,
            desc: route.description,
            img: route.image,
            price: route.price,
            stock: route.stock
        });

    }, [])

    return (
        <View style={styles.container}>
            <Text>{product.title}</Text>
            <Text>{product.id}</Text>
            <Text>Hola</Text>
        </View>
    )
}

export default ItemDetails

const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        margin:100
    }
});