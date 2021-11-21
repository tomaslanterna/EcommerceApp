import React from 'react';
import { View,Text,Image,StyleSheet} from 'react-native';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState(null);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nuevos Productos</Text>
            {products && <ItemList products={products}/>}
        </View>
    );
}

export default ItemListContainer

const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginTop: 20,
    },
    title: {
      fontWeight: "bold",
      fontSize: 22,
      marginBottom: 10,
    },
  });