import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';


const Item = ({ product }) => {

    const navigation=useNavigation();

    const goToProduct=(id)=>{
    navigation.push();

    };
    return (
            <TouchableWithoutFeedback
            key={product.id}
            onPress={()=>goToProduct(product.id)}>
                <View style={styles.containerProduct}>
                    <View style={styles.product}>
                        <Image
                        style={styles.image}
                        source={{uri:product.imgUrl}}/>
                        <Text numberOfLines={1} ellipsizeMode="tail">
                            {product.title}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
    );
}

export default Item

const styles = StyleSheet.create({
    containerProduct: {
      width: "50%",
      padding: 3,
    },
    product: {
      backgroundColor: "#f0f0f0",
      padding: 10,
    },
    image: {
      height: 150,
      resizeMode: "contain",
    },
    name: {
      marginTop: 15,
      fontSize: 18,
    },
  });