import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ItemDetails from '../components/ItemDetails';
import { Appbar } from 'react-native-paper';

const ItemDetailsScreen = ({ route }) => {

    const [product, setProduct] = useState({
        title: route.params.name,
        id: route.params.itemId,
        desc: route.params.description,
        img: route.params.image,
        price: route.params.price,
        stock: route.params.stock
    });

    return (
        <View>
            <View style={styles.containerHeader}>
                <Appbar.Header style={styles.header}>
                    <Appbar.BackAction style={styles.subheader} />
                </Appbar.Header>
            </View>
            <View>
                <ItemDetails product={product} />
            </View>
        </View>

    )
}

export default ItemDetailsScreen

const styles = StyleSheet.create({
    containerHeader:{
        height:1,
        margin:0
    },
    header: {
        height:"100%"
    },
    subheader: {
        height:"100%"
    }
});