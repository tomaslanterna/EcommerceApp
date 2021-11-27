import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ItemDetails from '../components/ItemDetails';
import { Appbar } from 'react-native-paper';

const ItemDetailsScreen = ({ route,navigation }) => {

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
                    <Appbar.BackAction style={styles.subheader} onPress={()=>{navigation.goBack()}}/>
                    <Appbar.Content style={styles.title} title={product.title}/>
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
       height:20,
       marginBottom:15
    },
    header: {
        height:20,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
       backgroundColor:"#fff"
    },
    subheader: {
        height:20,
        marginBottom:30,
        width:50
    },
    title:{
        height:30,
        marginBottom:30,
        width:50
    }
});