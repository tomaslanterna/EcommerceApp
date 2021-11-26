import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../store/actions/Product.action';


const Item = ({ product}) => {


  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goToProduct = (prod) => {
    dispatch(selectProduct(prod.id));
    navigation.navigate('ProductDetails', {
      name: prod.title,
      itemId: prod.id,
      description: prod.details,
      image: prod.imgUrl,
      price: prod.price,
      stock: prod.stock
    });
  };
  return (
    <TouchableWithoutFeedback
      key={product.id}
      onPress={() => goToProduct(product)}>
      <View style={styles.containerProduct}>
        <View style={styles.product}>
          <Image
            style={styles.image}
            source={{ uri: product.imgUrl }} />
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
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
    marginBottom: 5
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